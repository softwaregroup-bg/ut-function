const tap = require('tap');
const flatten = require('./');
const sortKeys = require('sort-keys');

tap.test('flatten', assert => {
    assert.matchSnapshot(sortKeys(flatten({
        a: {
            b: 1
        },
        c: {
            d() {
                //
            },
            e: {}
        }
    }, 3)));
    assert.throws(() => flatten({a: {b: 1}}, 2), new Error('Object exceeds max depth: a.b'));
    assert.end();
});
