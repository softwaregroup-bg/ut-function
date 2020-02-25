const defultMatcher = /{([^}]+)}/g;
const dotProp = require('dot-prop');
module.exports = function interpolate(what, params, inline = true, matcher = defultMatcher) {
    switch (typeof what) {
        case 'string': {
            if (inline) {
                return what.replace(matcher, (placeHolder, label) => {
                    const value = dotProp.get(params, label);
                    switch (typeof value) {
                        case 'undefined': return placeHolder;
                        case 'object': return JSON.stringify(value);
                        default: return value;
                    }
                });
            }
            const match = matcher.exec(what);
            if (!match || match[0] !== what) return what;
            matcher.lastIndex = 0; // reset matcher as it is stateful
            return dotProp.get(params, match[1], match[0]);
        }
        case 'object':
            if (Array.isArray(what)) {
                return what.map(item => interpolate(item, params, inline, matcher));
            } else {
                return Object.entries(what).reduce((all, [key, value]) => {
                    all[key] = interpolate(value, params, inline, matcher);
                    return all;
                }, {});
            }
        default:
            return what;
    }
};
