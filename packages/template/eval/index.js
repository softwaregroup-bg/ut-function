// adapted from https://github.com/hacknlove/static-eval

module.exports = function evaluate(ast, vars, opts) {
    if (!opts) opts = {};
    const rejectAccessToMethodsOnFunctions = !opts.allowAccessToMethodsOnFunctions;

    if (!vars) vars = {};
    const FAIL = {};

    const result = (function walk(node, noExecute) {
        if (node.type === 'Literal') {
            return node.value;
        } else if (node.type === 'UnaryExpression') {
            const val = walk(node.argument, noExecute);
            if (node.operator === '+') return +val;
            if (node.operator === '-') return -val;
            if (node.operator === '~') return ~val;
            if (node.operator === '!') return !val;
            return FAIL;
        } else if (node.type === 'ArrayExpression') {
            const xs = [];
            for (let i = 0, l = node.elements.length; i < l; i++) {
                const x = walk(node.elements[i], noExecute);
                if (x === FAIL) return FAIL;
                xs.push(x);
            }
            return xs;
        } else if (node.type === 'ObjectExpression') {
            const obj = {};
            for (let i = 0; i < node.properties.length; i++) {
                const prop = node.properties[i];
                const value = prop.value === null
                    ? prop.value
                    : walk(prop.value, noExecute)
                    ;
                if (value === FAIL) return FAIL;
                obj[prop.key.value || prop.key.name] = value;
            }
            return obj;
        } else if (node.type === 'BinaryExpression' ||
            node.type === 'LogicalExpression') {
            const op = node.operator;

            if (op === '&&') {
                const l = walk(node.left);
                if (l === FAIL) return FAIL;
                if (!l) return l;
                const r = walk(node.right);
                if (r === FAIL) return FAIL;
                return r;
            } else if (op === '||') {
                const l = walk(node.left);
                if (l === FAIL) return FAIL;
                if (l) return l;
                const r = walk(node.right);
                if (r === FAIL) return FAIL;
                return r;
            }

            const l = walk(node.left, noExecute);
            if (l === FAIL) return FAIL;
            const r = walk(node.right, noExecute);
            if (r === FAIL) return FAIL;

            if (op === '==') return l == r; // eslint-disable-line eqeqeq
            if (op === '===') return l === r;
            if (op === '!=') return l != r; // eslint-disable-line eqeqeq
            if (op === '!==') return l !== r;
            if (op === '+') return l + r;
            if (op === '-') return l - r;
            if (op === '*') return l * r;
            if (op === '/') return l / r;
            if (op === '%') return l % r;
            if (op === '<') return l < r;
            if (op === '<=') return l <= r;
            if (op === '>') return l > r;
            if (op === '>=') return l >= r;
            if (op === '|') return l | r;
            if (op === '&') return l & r;
            if (op === '^') return l ^ r;

            return FAIL;
        } else if (node.type === 'Identifier') {
            if ({}.hasOwnProperty.call(vars, node.name)) {
                return vars[node.name];
            } else return FAIL;
        } else if (node.type === 'ThisExpression') {
            if ({}.hasOwnProperty.call(vars, 'this')) {
                return vars.this;
            } else return FAIL;
        } else if (node.type === 'CallExpression') {
            const callee = walk(node.callee, noExecute);
            if (callee === FAIL) return FAIL;
            if (typeof callee !== 'function') return FAIL;

            let ctx = node.callee.object ? walk(node.callee.object, noExecute) : FAIL;
            if (ctx === FAIL) ctx = null;

            const args = [];
            for (let i = 0, l = node.arguments.length; i < l; i++) {
                const x = walk(node.arguments[i], noExecute);
                if (x === FAIL) return FAIL;
                args.push(x);
            }

            if (noExecute) {
                return undefined;
            }

            return callee.apply(ctx, args);
        } else if (node.type === 'MemberExpression') {
            const obj = walk(node.object, noExecute);
            if ((obj === FAIL) || (
                (typeof obj === 'function') && rejectAccessToMethodsOnFunctions
            )) {
                return FAIL;
            }
            if (node.property.type === 'Identifier' && !node.computed) {
                if (isUnsafeProperty(node.property.name)) return FAIL;
                return obj[node.property.name];
            }
            const prop = walk(node.property, noExecute);
            if (prop === null || prop === FAIL) return FAIL;
            if (isUnsafeProperty(prop)) return FAIL;
            return obj[prop];
        } else if (node.type === 'ConditionalExpression') {
            const val = walk(node.test, noExecute);
            if (val === FAIL) return FAIL;
            return val ? walk(node.consequent) : walk(node.alternate, noExecute);
        } else if (node.type === 'ExpressionStatement') {
            const val = walk(node.expression, noExecute);
            if (val === FAIL) return FAIL;
            return val;
        } else if (node.type === 'ReturnStatement') {
            return walk(node.argument, noExecute);
        } else if (node.type === 'FunctionExpression' || node.type === 'ArrowFunctionExpression') {
            return (...params) => {
                const newVars = Object.assign({}, vars);
                node.params.forEach((param, i) => {
                    newVars[param.name] = params[i];
                });

                return evaluate(node.body, newVars);
            };
        } else if (node.type === 'TemplateLiteral') {
            let str = '';
            let i;
            for (i = 0; i < node.expressions.length; i++) {
                str += walk(node.quasis[i], noExecute);
                str += walk(node.expressions[i], noExecute);
            }
            str += walk(node.quasis[i], noExecute);
            return str;
        } else if (node.type === 'TaggedTemplateExpression') {
            const tag = walk(node.tag, noExecute);
            const quasi = node.quasi;
            const strings = quasi.quasis.map(walk);
            const values = quasi.expressions.map(walk);
            return tag.apply(null, [strings].concat(values));
        } else if (node.type === 'TemplateElement') {
            return node.value.cooked;
        } else if (node.type === 'BlockStatement') {
            for (let i = 0; i < node.body.length; i++) {
                const result = walk(node.body[i], noExecute);
                if (result === FAIL) return FAIL;
                if (node.body[i].type === 'ReturnStatement') return result;
            }
        } else {
            FAIL.why = 'Unknown node type: ' + node.type;
            return FAIL;
        }
    })(ast);

    if (result === FAIL) {
        return undefined;
    }

    return result;
};

function isUnsafeProperty(name) {
    return name === 'constructor' || name === '__proto__';
}
