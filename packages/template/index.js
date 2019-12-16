const vm = require('vm');

const getTemplateTag = escapeMap => {
    const regExp = new RegExp('([' + Object.keys(escapeMap).join('') + '])', 'g');
    const escape = str => str.replace(regExp, (str, x) => escapeMap[x]);
    return (strings, ...values) => {
        return Array
            .from({length: strings.length + values.length}, (v, i) => {
                return i % 2 ? escape(values[(i - 1) / 2]) : strings[ i / 2 ];
            })
            .filter(Boolean)
            .join('');
    };
};

const templateTags = {
    escapeXml: getTemplateTag({
        '&': '&amp;',
        '"': '&quot;',
        '>': '&gt;',
        '<': '&lt;',
        '\'': '&apos;'
    }),
    escapeJson: getTemplateTag({
        '&': '\\&',
        '"': '\\"',
        '\'': '\\\'',
        '\n': '\\n',
        '\r': '\\r',
        '\t': '\\t',
        '\b': '\\b',
        '\f': '\\f'
    })
};

module.exports = function template(templateString, templateVariables, ut = {}, escape) {
    Object.assign(ut, templateTags);
    const array = Array.isArray(templateVariables);
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
            functionBody = `return ut.escapeXml\`${templateString}\`;`;
            break;
        case 'json':
            functionBody = `return ut.escapeJson\`${templateString}\`;`;
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
