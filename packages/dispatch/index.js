const scriptPort = require('ut-port-script');
module.exports = function({namespace, methods, imports, validations}) {
    let namespaces = namespace && [].concat(namespace);
    if (!namespaces) {
        [methods, imports, validations] = arguments;
        namespaces = Array.from(
            new Set(
                Object.keys(methods).map(name => name.split('.', 2)[0])));
    };
    if (!namespaces.length) throw new Error('Missing namespace for dispatch');
    const id = namespaces[0].replace(/[\\/]/g, '-');
    return (...params) => ({
        [id]: class extends scriptPort(...params) {
            get defaults() {
                return {
                    namespace: namespaces,
                    imports,
                    validations
                };
            }

            handlers() {
                return {
                    ...namespaces.reduce((prev, name) => ({
                        ...prev,
                        [name + '.service.get']: () => params[0].utMethod.pkg
                    }), {}),
                    ...methods
                };
            }
        }
    }[id]);
};
