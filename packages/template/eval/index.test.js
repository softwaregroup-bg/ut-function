// adapted from https://github.com/hacknlove/static-eval

const test = require('tap').test;
const evaluate = require('./');
const parse = require('esprima').parse;

test('resolved', async function(t) {
    const src = '[1,2,3+4*10+(n||6),foo(3+5),obj[""+"x"].y]';
    const ast = parse(src).body[0].expression;
    const res = evaluate(ast, {
        n: false,
        foo: function(x) { return x * 100; },
        obj: { x: { y: 555 } }
    });
    t.same(res, [1, 2, 49, 800, 555]);
});

test('unresolved', async function(t) {
    const src = '[1,2,3+4*10*z+n,foo(3+5),obj[""+"x"].y]';
    const ast = parse(src).body[0].expression;
    const res = evaluate(ast, {
        n: 6,
        foo: function(x) { return x * 100; },
        obj: { x: { y: 555 } }
    });
    t.equal(res, undefined);
});

test('boolean', async function(t) {
    const src = '[ 1===2+3-16/4, [2]==2, [2]!==2, [2]!==[2] ]';
    const ast = parse(src).body[0].expression;
    t.same(evaluate(ast), [true, true, true, true]);
});

test('array methods', async function(t) {
    const src = '[1, 2, 3].map(function(n) { return n * 2 })';
    const ast = parse(src).body[0].expression;
    t.same(evaluate(ast), [2, 4, 6]);
});

test('array methods with arrow function', async function(t) {
    const src = '[1, 2, 3].map(n => n * 2 )';
    const ast = parse(src).body[0].expression;
    t.same(evaluate(ast), [2, 4, 6]);
});

test('array methods invocation count', function(t) {
    t.plan(2);

    const variables = {
        values: [1, 2, 3],
        receiver: []
    };
    const src = 'values.forEach(function(x) { receiver.push(x); })';
    const ast = parse(src).body[0].expression;
    evaluate(ast, variables);
    t.equal(variables.receiver.length, 3);
    t.same(variables.receiver, [1, 2, 3]);
});

test('array methods with vars', async function(t) {
    const src = '[1, 2, 3].map(n => n * x)';
    const ast = parse(src).body[0].expression;
    t.same(evaluate(ast, {x: 2}), [2, 4, 6]);
});

test('evaluate this', async function(t) {
    const src = 'this.x + this.y.z';
    const ast = parse(src).body[0].expression;
    const res = evaluate(ast, {
        this: { x: 1, y: { z: 100 } }
    });
    t.equal(res, 101);
});

test('MemberExpressions from Functions unresolved', async function(t) {
    const src = '(function () {}).constructor';
    const ast = parse(src).body[0].expression;
    const res = evaluate(ast, {});
    t.equal(res, undefined);
});

test('disallow accessing constructor or __proto__', function(t) {
    t.plan(4);

    const someValue = {};

    let src = 'object.constructor';
    let ast = parse(src).body[0].expression;
    let res = evaluate(ast, { vars: { object: someValue } });
    t.equal(res, undefined);

    src = 'object["constructor"]';
    ast = parse(src).body[0].expression;
    res = evaluate(ast, { vars: { object: someValue } });
    t.equal(res, undefined);

    src = 'object.__proto__';
    ast = parse(src).body[0].expression;
    res = evaluate(ast, { vars: { object: someValue } });
    t.equal(res, undefined);

    src = 'object["__pro"+"t\x6f__"]';
    ast = parse(src).body[0].expression;
    res = evaluate(ast, { vars: { object: someValue } });
    t.equal(res, undefined);
});

test('constructor at runtime only', function(t) {
    t.plan(2);

    let src = '(function myTag(y){return ""[!y?"__proto__":"constructor"][y]})("constructor")("console.log(process.env)")()';
    let ast = parse(src).body[0].expression;
    let res = evaluate(ast);
    t.equal(res, undefined);

    src = '(function(prop) { return {}[prop ? "benign" : "constructor"][prop] })("constructor")("alert(1)")()';
    ast = parse(src).body[0].expression;
    res = evaluate(ast);
    t.equal(res, undefined);
});

test('short circuit evaluation AND', async function(t) {
    const variables = {
        value: null
    };
    const src = 'value && value.func()';
    const ast = parse(src).body[0].expression;
    const res = evaluate(ast, variables);
    t.equal(res, null);
});

test('short circuit evaluation OR', async function(t) {
    let fnInvoked = false;
    const variables = {
        value: true,
        fn: function() { fnInvoked = true; }
    };
    const src = 'value || fn()';
    const ast = parse(src).body[0].expression;
    evaluate(ast, variables);
    t.equal(fnInvoked, false);
});

test('function declaration does not invoke CallExpressions', async function(t) {
    let invoked = false;
    const variables = {
        noop: function() {},
        onInvoke: function() { invoked = true; }
    };
    const src = 'noop(function(){ onInvoke(); })';
    const ast = parse(src).body[0].expression;
    evaluate(ast, variables);
    t.equal(invoked, false);
});

test('function property', async function(t) {
    const src = '[1,2,3+4*10+n,beep.boop(3+5),obj[""+"x"].y]';
    const ast = parse(src).body[0].expression;
    const res = evaluate(ast, {
        n: 6,
        beep: { boop: function(x) { return x * 100; } },
        obj: { x: { y: 555 } }
    });
    t.same(res, [1, 2, 49, 800, 555]);
});

test('untagged template strings', async function(t) {
    const src = '`${1},${2 + n},${`4,5`}`'; // eslint-disable-line no-template-curly-in-string
    const ast = parse(src).body[0].expression;
    const res = evaluate(ast, {
        n: 6
    });
    t.same(res, '1,8,4,5');
});

test('tagged template strings', async function(t) {
    const src = 'template`${1},${2 + n},${`4,5`}`'; // eslint-disable-line no-template-curly-in-string
    const ast = parse(src).body[0].expression;
    const res = evaluate(ast, {
        template: function(strings) {
            t.same(strings, ['', ',', ',', '']);

            const values = [].slice.call(arguments, 1);
            t.same(values, [1, 8, '4,5']);

            return 'foo';
        },
        n: 6
    });
    t.same(res, 'foo');
});
