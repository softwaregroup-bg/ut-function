const tap = require('tap');
const template = require('./');

tap.test('render', assert => {
    // eslint-disable-next-line no-template-curly-in-string
    assert.matchSnapshot(template('UTC time: ${ut.format(time)}', {
        time: 0
    }, {
        format: value => (
            value instanceof Date ? value : new Date(value)
        ).toUTCString()
    }), 'template with variable and function');
    assert.end();
});
