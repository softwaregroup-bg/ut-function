const bits = {
    or: (items, encoding = 'hex') => {
        const a = Buffer.from(items.shift(), encoding);
        const b = Buffer.from(items.shift(), encoding);
        const c = Buffer.from(a.map((el, idx) => el | b[idx])).toString(encoding).toUpperCase();
        if (items.length > 0) {
            items.unshift(c);
            return bits.or(items, encoding);
        }
        return c;
    },
    xor: (items, encoding = 'hex') => {
        const a = Buffer.from(items.shift(), encoding);
        const b = Buffer.from(items.shift(), encoding);
        const c = Buffer.from(a.map((el, idx) => el ^ b[idx])).toString(encoding).toUpperCase();
        if (items.length > 0) {
            items.unshift(c);
            return bits.xor(items, encoding);
        }
        return c;
    },
    and: (items, encoding = 'hex') => {
        const a = Buffer.from(items.shift(), encoding);
        const b = Buffer.from(items.shift(), encoding);
        const c = Buffer.from(a.map((el, idx) => el & b[idx])).toString(encoding).toUpperCase();
        if (items.length > 0) {
            items.unshift(c);
            return bits.and(items, encoding);
        }
        return c;
    }
};

module.exports = bits;
