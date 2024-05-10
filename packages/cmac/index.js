const {des3Cmac} = require('./des3-cmac.js');
const {aesCmac} = require('node-aes-cmac');

module.exports = (key, message, type) => {
    if (![32, 48].includes(key.length)) {
        throw new Error('Invalid key length, should be one of [16, 24] bytes');
    }
    if (type === 'des3') {
        return des3Cmac(key, Buffer.from(message, 'hex')).toString('hex').toUpperCase();
    } else if (type === 'aes') {
        return aesCmac(key, message);
    } else {
        throw new Error('Invalid type, should be one of [des3, aes]');
    }
};
 