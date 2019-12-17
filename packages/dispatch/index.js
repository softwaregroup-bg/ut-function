const scriptPort = require('ut-port-script');
module.exports = function({namespace, methods}) {
    return (...params) => ({
        [namespace]: class extends scriptPort(...params) {
            get defaults() {
                return {
                    namespace
                };
            }
            handlers() {
                return {
                    [namespace + 'service.get']: () => params[0].utMethod.pkg,
                    ...methods
                };
            }
        }
    }[namespace]);
};
