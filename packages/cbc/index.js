const crypto = require('crypto');
module.exports = (key, validate) => {
    const iv = Buffer.alloc(16);
    crypto.randomFillSync(iv);

    if (typeof key === 'string') key = Buffer.from(key, 'hex');

    const enc = crypto.createCipheriv('aes-256-cbc', key, iv);
    const dec = crypto.createDecipheriv('aes-256-cbc', key, iv);

    dec.update(iv);

    const pad = s => s + ' '.repeat(16 - s.length % 16);

    return {
        encrypt: value => Buffer.concat([enc.update(crypto.randomFillSync(iv)), enc.update(pad(value))]),
        decrypt: value => {
            value = Buffer.from(value, 'hex');
            if (validate && value.length % 16) {
                const error = new Error('Length of encrypted value is not multiple of 16');
                error.type = 'utFunction.cbc.decrypt';
                throw error;
            }
            return dec.update(Buffer.concat([value, iv.slice(value.length % 16)])).toString('utf8', 32).trim();
        }
    };
};
