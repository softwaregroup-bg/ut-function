module.exports = function equals(x, y) {
    if (typeof x !== typeof y) return false;
    if (typeof x === 'object' && x !== null) {
        const xProps = Object.getOwnPropertyNames(x);
        const yProps = Object.getOwnPropertyNames(y);
        if (xProps.length !== yProps.length) return false;
        for (let i = 0, n = xProps.length; i < n; i += 1) {
            const prop = xProps[i];
            if (!equals(x[prop], y[prop])) return false;
        }
        return true;
    }
    return x === y;
};
