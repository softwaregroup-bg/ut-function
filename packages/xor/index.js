module.exports = function xor(items) {
    const a = Buffer.from(items.shift(), 'hex');
    const b = Buffer.from(items.shift(), 'hex');
    const c = Buffer.from(a.map((el, idx) => el ^ b[idx])).toString('hex').toUpperCase();
    if (items.length > 0) {
        items.unshift(c);
        return xor(items);
    }
    return c;
};
