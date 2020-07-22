const scriptPort = require('ut-port-script');
module.exports = function({namespace, methods}) {
    let namespaces = namespace;
    if (!namespaces) {
        methods = arguments[0];
        namespaces = Array.from(
            new Set(
                Object.keys(methods).map(name => name.split('.', 2)[0])));
    };
    if (!namespaces.length) throw new Error('Missing namespace for dispatch');
    return (...params) => ({
        [namespaces[0]]: class extends scriptPort(...params) {
            get defaults() {
                return {
                    namespace: namespaces
                };
            }

            handlers() {
                return {
                    ...namespaces.reduce((prev, name) => ({
                        ...prev,
                        [name + 'service.get']: () => params[0].utMethod.pkg
                    }), {}),
                    ...methods
                };
            }
        }
    }[namespaces[0]]);
};
