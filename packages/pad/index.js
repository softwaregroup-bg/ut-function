module.exports = {
    /**
     * @param {String} value - value to pad
     * @param {String} position - padding position, 'l' or 'r'
     * @param {String} padSymbol - symbol to pad with
     * @param {Number} targetLength - nmumber of symbols target length
     * @param {String} paddingMethod - 'ANSI X.923', 'PKCS7', 'ISO/IEC 7816-4', 'zero'; ignores position and padSymbol parameters when present
     */
    padString(value, position, padSymbol, targetLength, paddingMethod) {
        const invalidParameters = new Error('Invalid parameters');
        if (!value) throw invalidParameters;
        if (!paddingMethod) {
            // if paddingMethod is NOT present, padding is done based on position and padSymbol values
            if ((targetLength - value.length) % padSymbol.length !== 0) throw invalidParameters;
            if (position === 'r') return value.concat(padSymbol.repeat(targetLength - value.length));
            if (position === 'l') return padSymbol.repeat(targetLength - value.length).concat(value);
            return value;
        }
        // if paddingMethod is present, then position is always 'r' and padSymbol is set according to the method
        if (value.length % 2 !== 0) throw invalidParameters;
        const padStringLength = (targetLength - value.length) / 2;
        if (!padStringLength) {
            return value;
        }
        // https://en.wikipedia.org/wiki/Padding_(cryptography)
        switch (paddingMethod) {
            case 'ANSI X.923':
                // bytes filled with zeros are padded and the last byte defines the padding boundaries or the number of padded bytes
                return value.concat('00'.repeat(padStringLength - 1), `00${padStringLength}`.slice(-2));
            case 'PKCS7':
                // The value of each added byte is the number of bytes that are added, i.e. N bytes, each of value N are added
                return value.concat(`00${padStringLength}`.slice(-2).repeat(padStringLength));
            case 'ISO/IEC 7816-4':
                // the first byte is a mandatory byte valued '80' (Hexadecimal) followed, if needed, by 0 to N-1 bytes set to '00'
                return value.concat('80', '00'.repeat(padStringLength - 1));
            case 'zero':
                // All the bytes that are required to be padded are padded with zero
                return value.concat('00'.repeat(padStringLength));
            default:
                return value;
        }
    },
    unpadString(value, position, padSymbol, paddingMethod) {
        const invalidParameters = new Error('Invalid parameters');
        if (!value) throw invalidParameters;
        let result = value;
        let cutString = [];
        const cutStringConstructed = [];
        if (!paddingMethod) {
            switch (position) {
                case 'l':
                    // left padded with padSymbol
                    cutString = result.match(new RegExp('^' + padSymbol + '*'));
                    cutStringConstructed.push(padSymbol.repeat(cutString[0] && cutString[0].length));
                    result = result.replace(cutString[0], '');
                    break;
                case 'r':
                    // right padded with padSymbol
                    cutString = result.match(new RegExp(padSymbol + '*$'));
                    cutStringConstructed.push(padSymbol.repeat(cutString[0] && cutString[0].length));
                    result = result.slice(0, result.length - (cutString[0] && cutString[0].length));
                    break;
                default:
                    cutString.push('');
                    cutStringConstructed.push('');
                    break;
            }
        } else {
            // https://en.wikipedia.org/wiki/Padding_(cryptography)
            if (value.length % 2 !== 0) throw invalidParameters;
            let bytesCount;
            switch (paddingMethod) {
                case 'ANSI X.923':
                    // bytes filled with zeros are padded and the last byte defines the padding boundaries or the number of padded bytes
                    cutStringConstructed.push(result.slice(-2));
                    bytesCount = parseInt(cutStringConstructed[0], 16);
                    cutStringConstructed.unshift('00'.repeat(bytesCount - 1));
                    cutString.push(result.slice(-2 * bytesCount));
                    result = result.slice(0, result.length - (bytesCount * 2));
                    break;
                case 'PKCS7':
                    // The value of each added byte is the number of bytes that are added, i.e. N bytes, each of value N are added
                    cutStringConstructed.push(result.slice(-2));
                    bytesCount = parseInt(cutStringConstructed[0], 16);
                    cutString.push(result.slice(-2 * bytesCount));
                    cutStringConstructed.push(cutStringConstructed[0].repeat(bytesCount - 1));
                    result = result.slice(0, result.length - (bytesCount * 2));
                    break;
                case 'ISO/IEC 7816-4':
                    // the first byte is a mandatory byte valued '80' (Hexadecimal) followed, if needed, by 0 to N-1 bytes set to '00'
                    cutStringConstructed.push('80');
                    cutString = /80{1}[00]*$/.exec(result) || [];
                    bytesCount = (cutString && cutString[0] && cutString[0].length / 2) || 0;
                    cutStringConstructed.push('00'.repeat((bytesCount && bytesCount - 1) || 0));
                    result = result.slice(0, result.length - (bytesCount * 2));
                    break;
                case 'zero':
                    // All the bytes that are required to be padded are padded with zero
                    cutString = result.match(/([0{2}]+)$/g) || [];
                    bytesCount = (cutString && cutString[0] && cutString[0].length / 2) || 0;
                    cutStringConstructed.push('00'.repeat(bytesCount));
                    result = result.slice(0, result.length - (bytesCount * 2));
                    break;
                default:
                    cutString.push('');
                    cutStringConstructed.push('');
                    break;
            }
        }

        if (cutString.join('') === cutStringConstructed.join('')) {
            return result;
        } else {
            // no padding (most probably) !!!
            return value;
        }
    }
};
