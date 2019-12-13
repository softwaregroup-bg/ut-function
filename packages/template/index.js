const vm = require('vm');
const escapeHandlers = [
    ['xml', {
        '&': '&amp;',
        '"': '&quot;',
        '>': '&gt;',
        '<': '&lt;',
        '\'': '&apos;'
    }],
    ['json', {
        '&': '\\&',
        '"': '\\"',
        '\'': '\\\'',
        '\n': '\\n',
        '\r': '\\r',
        '\t': '\\t',
        '\b': '\\b',
        '\f': '\\f'
    }]
].reduce((all, [what, map]) => {
    const r = new RegExp('([' + Object.keys(map).join('') + '])', 'g');
    return {
        ...all,
        [what]: s => s.replace(r, (s, x) => map[x])
    };
}, {});

module.exports = function template(templateString, templateVariables, ut = {}, escape) {
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
    if (escapeHandlers[escape]) {
        ut._escape = (strings, ...values) => {
            const result = Array
                .from({length: strings.length + values.length}, (v, i) => {
                    return i % 2 ? values[(i - 1) / 2] : strings[ i / 2 ];
                })
                .filter(Boolean)
                .join('');
            return escapeHandlers[escape](result);
        };
        functionBody = `return ut._escape\`${templateString}\`;`;
    } else {
        functionBody = `return \`${templateString}\`;`;
    };

    let templateFunction;
    if (vm.compileFunction) {
        templateFunction = vm.compileFunction(functionBody, keys);
    } else {
        templateFunction = new Function(...keys, functionBody); // eslint-disable-line
    }
    return array ? (...params) => templateFunction(ut, ...params) : templateFunction(...values);
};
