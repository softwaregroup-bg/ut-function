const tap = require('tap');
const key = '757435736f66747761726567726f7570757435736f66747761726567726f7570';
const {encrypt: encrypt1, decrypt: decrypt1} = require('.')(key);
const {encrypt: encrypt2, decrypt: decrypt2} = require('.')(Buffer.from(key, 'hex'));
const {decrypt} = require('.')(key, true);
tap.test('decrypt', assert => {
    assert.matchSnapshot(decrypt1(encrypt1('test1')), 'decrypt1 buffer');
    assert.matchSnapshot(decrypt1(encrypt1('test1').toString('hex')), 'decrypt1 hex');
    assert.matchSnapshot(decrypt2(encrypt2('test2')), 'decrypt2 buffer');
    decrypt2('00'); // try to unsync with bad length
    assert.matchSnapshot(decrypt2(encrypt2('test2').toString('hex')), 'decrypt2 hex');
    assert.throws(() => decrypt('00'), {type: 'utFunction.cbc.decrypt'}, 'decrypt validate bad length');
    assert.end();
});
