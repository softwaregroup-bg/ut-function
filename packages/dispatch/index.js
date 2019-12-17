module.exports = function({namespace, methods}) {
    return (...params) => ({
        [namespace]: class extends require('ut-port-script')(...params) {
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
