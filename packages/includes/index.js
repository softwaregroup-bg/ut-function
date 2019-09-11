module.exports = function includes(where, strings) {
    switch (typeof where) {
        case 'boolean':
            return where;
        case 'function':
            return strings.find(value => where(value));
        case 'object':
            if (Array.isArray(where)) {
                return where.find(value => includes(value, strings));
            } else if (where instanceof RegExp) {
                return strings.find(value => where.test(value));
            } else {
                return strings.find(value => where[value]);
            }
        case 'string':
            switch (where) {
                case 'true':
                    return true;
                case 'false':
                    return false;
            }
            return strings.includes(where);
    };
    return false;
};
