const tap = require('tap');
const {padString, unpadString} = require('./');

tap.test('pad', (t) => {
    t.test('paddingMethod', (t) => {
        t.equal(padString('abcd', 'l', '0', 10, 'ANSI X.923'), 'abcd000003', 'pad string paddingMethod ANSI X.923');
        t.equal(padString('abcd', 'l', '0', 10, 'PKCS7'), 'abcd030303', 'pad string paddingMethod PKCS7');
        t.equal(padString('abcd', 'l', '0', 10, 'ISO/IEC 7816-4'), 'abcd800000', 'pad string paddingMethod ISO/IEC 7816-4');
        t.equal(padString('abcd', 'l', '0', 10, 'zero'), 'abcd000000', 'pad string paddingMethod zero');
        t.equal(padString('abcd', 'l', '0', 10, 'flemh'), 'abcd', 'pad string unexisting paddingMethod');
        t.equal(padString('abcd', 'l', '0', 4, 'zero'), 'abcd', 'same length with paddingMethod');
        t.throws(() => padString(undefined, 'l', '0', 10, 'ANSI X.923'), 'invalid parameters', 'should fail - pad string should not be undefined');
        t.throws(() => padString('abc', 'l', '0', 10, 'ANSI X.923'), 'invalid parameters', 'should fail - pad string should not be uneven');

        t.equal(unpadString('abcd000003', undefined, undefined, 'ANSI X.923'), 'abcd', 'unpad string paddingMethod ANSI X.923');
        t.equal(unpadString('abcd', undefined, undefined, 'ANSI X.923'), 'abcd', 'unpad string paddingMethod ANSI X.923, no padding');
        t.equal(unpadString('abcd030303', undefined, undefined, 'PKCS7'), 'abcd', 'unpad string paddingMethod PKCS7');
        t.equal(unpadString('abcd', undefined, undefined, 'PKCS7'), 'abcd', 'unpad string paddingMethod PKCS7, no padding');
        t.equal(unpadString('abcd800000', undefined, undefined, 'ISO/IEC 7816-4'), 'abcd', 'unpad string paddingMethod ISO/IEC 7816-4');
        t.equal(unpadString('abcd', undefined, undefined, 'ISO/IEC 7816-4'), 'abcd', 'unpad string paddingMethod ISO/IEC 7816-4, no padding');
        t.equal(unpadString('abcd000000', undefined, undefined, 'zero'), 'abcd', 'unpad string paddingMethod zero');
        t.equal(unpadString('abcd', undefined, undefined, 'zero'), 'abcd', 'unpad string paddingMethod zero, no padding');
        t.equal(unpadString('abcdabcdabcdabcd', undefined, undefined, 'PKCS7'), 'abcdabcdabcdabcd', 'unpad string paddingMethod PKCS7, no padding');
        t.equal(unpadString('abcd', undefined, undefined, 'flemh'), 'abcd', 'unpad string unexisting paddingMethod');
        t.equal(unpadString('abcdFFF', 'r', 'F', undefined), 'abcd', 'unpad string right F');
        t.equal(unpadString('FFFabcd', 'l', 'F', undefined), 'abcd', 'unpad string left F');
        t.throws(() => unpadString('abc', 'l', '0', 10, 'ANSI X.923'), 'invalid parameters', 'should fail - pad string should not be uneven');
        t.throws(() => unpadString(undefined, 'l', '0', 10, 'ANSI X.923'), 'invalid parameters', 'should fail - pad string should not be undefined');

        t.end();
    });
    t.test('without paddingMethod', (t) => {
        t.equal(padString('abcd', 'l', '0', 10), '000000abcd', 'pad string l without paddingMethod');
        t.equal(padString('abcd', 'r', '0', 10), 'abcd000000', 'pad string r without paddingMethod');
        t.equal(padString('abcd', 'u', '0', 10), 'abcd', 'pad string unexisting direction without paddingMethod');
        t.throws(() => padString('abcd', undefined, undefined, 10), {}, 'should fail - padSymbol should not be undefined');
        t.throws(() => padString('abc', 'l', '00', 10), 'invalid parameters', 'should fail - padding even number of pad symbols in odd positions');
        t.throws(() => padString(undefined, 'l', '00', 10), 'invalid parameters', 'should fail - pad string should not be undefined');

        t.equal(unpadString('000000abcd', 'l', '0'), 'abcd', 'unpad string l without paddingMethod');
        t.equal(unpadString('abcd', 'l', '0'), 'abcd', 'unpad string l without paddingMethod, no padding');
        t.equal(unpadString('abcd000000', 'r', '0'), 'abcd', 'unpad string r without paddingMethod');
        t.equal(unpadString('abcd', 'r', '0'), 'abcd', 'unpad string r without paddingMethod, no padding');
        t.equal(unpadString('abcd', undefined, undefined), 'abcd', 'unpad string undefined without paddingMethod');
        t.equal(unpadString('0000000abcd', 'l', '0'), 'abcd', 'unpad eneven string without paddingMethod');
        t.equal(unpadString('abcd0000000', 'r', '0'), 'abcd', 'unpad eneven string without paddingMethod');
        t.throws(() => unpadString(undefined, 'r', '0'), 'invalid parameters', 'should fail - pad string should not be undefined');

        t.end();
    });
    t.end();
});
