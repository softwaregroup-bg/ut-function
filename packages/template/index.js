const vm = require('vm');
const JOIN = Symbol('join');

const getHandler = escapeMap => {
    let handler;
    if (typeof escapeMap === 'function') handler = escapeMap;
    else {
        const regExp = new RegExp('([' + Object.keys(escapeMap).join('') + '])', 'g');
        handler = str => String(str).replace(regExp, (str, x) => escapeMap[x]);
    }
    return str => {
        const join = str?.[JOIN];
        return (typeof join === 'string') ? str.join(join) : handler(str);
    };
};

const getTag = escape => {
    return (strings, ...values) => {
        return Array
            .from({length: strings.length + values.length}, (v, i) => {
                return i % 2 ? escape(values[(i - 1) / 2]) : strings[i / 2];
            })
            .filter(Boolean)
            .join('');
    };
};

const stringify = str => {
    let result = JSON.stringify(str) ?? '';
    if (!result.startsWith('"')) result = JSON.stringify(result);
    return result.slice(1, -1);
}

const escapeXml = getHandler({
    '&': '&amp;',
    '"': '&quot;',
    '>': '&gt;',
    '<': '&lt;',
    '\'': '&apos;'
});
const escapeHtml = getHandler({
    '&': '&amp;',
    '"': '&quot;',
    '>': '&gt;',
    '<': '&lt;',
    '\'': '&#39;'
});
const escapeJson = getHandler(stringify);

const handlers = {
    escapeHtml,
    escapeXml,
    escapeJson,
    join: (array, string = '') => {
        array = [].concat(array);
        array[JOIN] = string;
        return array;
    },
    xml: getTag(escapeXml),
    html: getTag(escapeHtml),
    json: getTag(getHandler(JSON.stringify))
};

const tags = {
    escapeXml: getTag(escapeXml),
    escapeHtml: getTag(escapeHtml),
    escapeJson: getTag(escapeJson)
};

module.exports = function template(templateString, templateVariables, ut = {}, escape, maxDepth = 100) {
    Object.assign(ut, handlers, {tags});
    const array = Array.isArray(templateVariables);
    if (!array) {
        switch (typeof templateString) {
            case 'string':
                break;
            case 'object':
                if (templateString !== null) {
                    if (typeof maxDepth !== 'number' || --maxDepth < 0) throw new Error('max depth reached!');
                    Object.entries(templateString).forEach(([key, value]) => {
                        if (typeof value === 'string' && value) {
                            // recurse and reassign only if not empty string
                            templateString[key] = template(value, templateVariables, ut, escape, maxDepth);
                        } else if (typeof value === 'object' && value !== null) {
                            // recurse only if iterable object. No reassign needed.
                            template(value, templateVariables, ut, escape, maxDepth);
                        }
                    });
                }
                return templateString;
            default:
                return templateString;
        }
    }

    const [keys, values] = Object.entries(templateVariables).reduce((prev, cur) => {
        const name = cur[array ? 1 : 0].split(/^[^a-zA-Z_$]|[^\w$]/g).join('_');
        if (!prev[0].includes(name)) { // skip duplicates
            prev[0].push(name);
            if (!array) prev[1].push(cur[1]);
        }
        return prev;
    }, [['ut'], [ut]]);

    let functionBody;
    switch (escape) {
        case 'xml':
            functionBody = `return ut.tags.escapeXml\`${stringify(templateString)}\`;`;
            break;
        case 'html':
            functionBody = `return ut.tags.escapeHtml\`${stringify(templateString)}\`;`;
            break;
        case 'json':
            functionBody = `return ut.tags.escapeJson\`${stringify(templateString)}\`;`;
            break;
        default:
            functionBody = `return \`${stringify(templateString)}\`;`;
            break;
    }

    let templateFunction;
    if (vm.compileFunction) {
        templateFunction = vm.compileFunction(functionBody, keys);
    } else {
        templateFunction = new Function(...keys, functionBody); // eslint-disable-line
    }
    return array ? (...params) => templateFunction(ut, ...params) : templateFunction(...values);
};
