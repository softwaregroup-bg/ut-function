const vm = require('vm');

const isObject = (o, notEmpty) => typeof o === 'object' && o !== null;

const getHandler = escapeMap => {
    let handler;
    if (typeof escapeMap === 'function') handler = escapeMap;
    else {
        const regExp = new RegExp('([' + Object.keys(escapeMap).join('') + '])', 'g');
        handler = str => str.replace(regExp, (str, x) => escapeMap[x]);
    }
    return str => handler(String(str));
};

const getTag = escape => {
    return (strings, ...values) => {
        return Array
            .from({length: strings.length + values.length}, (v, i) => {
                return i % 2 ? escape(values[(i - 1) / 2]) : strings[ i / 2 ];
            })
            .filter(Boolean)
            .join('');
    };
};

const handlers = {
    escapeXml: getHandler({
        '&': '&amp;',
        '"': '&quot;',
        '>': '&gt;',
        '<': '&lt;',
        '\'': '&apos;'
    }),
    escapeHtml: getHandler({
        '&': '&amp;',
        '"': '&quot;',
        '>': '&gt;',
        '<': '&lt;',
        '\'': '&#39;'
    }),
    escapeJson: getHandler(str => JSON.stringify(str).slice(1, -1))
};

const tags = {
    escapeXml: getTag(handlers.escapeXml),
    escapeHtml: getTag(handlers.escapeHtml),
    escapeJson: getTag(handlers.escapeJson)
};

module.exports = function template(templateString, templateVariables, ut = {}, escape) {
    Object.assign(ut, handlers, {tags});
    const array = Array.isArray(templateVariables);
    if (!array && isObject(templateString)) {
        Object.entries(templateString).forEach(([key, value]) => {
            if (typeof value === 'string' && value) templateString[key] = template(value, templateVariables, ut, escape);
            else if (isObject(value)) template(value, templateVariables, ut, escape);
        });
        return templateString;
    }
    const [keys, values] = Object.entries(templateVariables).reduce((prev, cur) => {
        let name = cur[array ? 1 : 0].split(/^[^a-zA-Z_$]|[^\w$]/g).join('_');
        if (!prev[0].includes(name)) { // skip duplicates
            prev[0].push(name);
            if (!array) prev[1].push(cur[1]);
        }
        return prev;
    }, [['ut'], [ut]]);

    let functionBody;
    switch (escape) {
        case 'xml':
            functionBody = `return ut.tags.escapeXml\`${templateString}\`;`;
            break;
        case 'html':
            functionBody = `return ut.tags.escapeHtml\`${templateString}\`;`;
            break;
        case 'json':
            functionBody = `return ut.tags.escapeJson\`${templateString}\`;`;
            break;
        default:
            functionBody = `return \`${templateString}\`;`;
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
