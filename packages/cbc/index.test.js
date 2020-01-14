const tap = require('tap');
const {encrypt, decrypt} = require('.')('757435736f66747761726567726f7570757435736f66747761726567726f7570');

tap.test('decrypt', assert => {
    assert.matchSnapshot(decrypt(encrypt('test')), 'decrypt');
    assert.end();
});
