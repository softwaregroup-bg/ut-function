const any = (items = [], encoding = 'hex', operation) => {
    if (items.length <= 1) return items.shift();
    const a = Buffer.from(items.shift(), encoding);
    const b = Buffer.from(items.shift(), encoding);
    let c;
    if (operation === 'or') c = a.map((el, idx) => el | b[idx]);
    if (operation === 'xor') c = a.map((el, idx) => el ^ b[idx]);
    if (operation === 'and') c = a.map((el, idx) => el & b[idx]);
    items.unshift(Buffer.from(c).toString(encoding).toUpperCase());
    return bits[operation](items, encoding);
};
const bits = {
    or: (items, encoding) => any(items, encoding, 'or'),
    xor: (items, encoding) => any(items, encoding, 'xor'),
    and: (items, encoding) => any(items, encoding, 'and')
};

module.exports = bits;
