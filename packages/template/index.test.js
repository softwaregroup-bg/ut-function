const tap = require('tap');
const template = require('./');
const format = value => (
    value instanceof Date ? value : new Date(value)
).toUTCString();
// eslint-disable-next-line no-template-curly-in-string
const templateString = 'UTC time: ${ut.format(time)}';

tap.test('render', assert => {
    assert.matchSnapshot(template(templateString, {time: 0}, {format}), 'immediate template with variable and function (epoch)');
    const time = template(templateString, ['time'], {format});
    assert.matchSnapshot(time(0), 'template rendering with variable and function (epoch)');
    assert.matchSnapshot(time(1000), 'template rendering with variable and function (epoch + 1 second)');
    assert.end();
});
