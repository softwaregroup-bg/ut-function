const crypto = require('crypto');
module.exports = key => {
    const iv = Buffer.alloc(16);
    crypto.randomFillSync(iv);

    if (typeof key === 'string') key = Buffer.from(key, 'hex');

    const enc = crypto.createCipheriv('aes-256-cbc', key, iv);
    const dec = crypto.createDecipheriv('aes-256-cbc', key, iv);

    dec.update(iv);

    const pad = s => s + ' '.repeat(16 - s.length % 16);

    return {
        encrypt: val => Buffer.concat([enc.update(crypto.randomFillSync(iv)), enc.update(pad(val))]),
        decrypt: val => dec.update(Buffer.concat([Buffer.from(val, 'hex'), iv])).toString('utf8', 32).trim()
    };
};
