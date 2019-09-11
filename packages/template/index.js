const vm = require('vm');

module.exports = function template(templateString, templateVariables, ut = {}) {
    const array = Array.isArray(templateVariables);
    const [keys, values] = Object.entries(templateVariables).reduce((prev, cur) => {
        let name = cur[array ? 1 : 0].split(/^[^a-zA-Z_$]|[^\w$]/g).join('_');
        if (!prev[0].includes(name)) { // skip duplicates
            prev[0].push(name);
            if (!array) prev[1].push(cur[1]);
        }
        return prev;
    }, [['ut'], [ut]]);
    let templateFunction;
    if (vm.compileFunction) {
        templateFunction = vm.compileFunction(`return \`${templateString}\`;`, keys);
    } else {
        templateFunction = new Function(...keys, `return \`${templateString}\`;`); // eslint-disable-line
    }
    return array ? (...params) => templateFunction(ut, ...params) : templateFunction(...values);
};
