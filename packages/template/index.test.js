const tap = require('tap');
const template = require('./');
const format = value => (
    value instanceof Date ? value : new Date(value)
).toUTCString();
const templateString = 'UTC time: ${ut.format(time)}'; // eslint-disable-line no-template-curly-in-string
const templateStringJson = '{"utcTime": "${ut.format(time)}"}'; // eslint-disable-line no-template-curly-in-string
const templateStringXml = '<utcTime>${ut.format(time)}</utcTime>'; // eslint-disable-line no-template-curly-in-string

tap.test('render', assert => {
    assert.matchSnapshot(template(templateString, {time: 0}, {format}), 'immediate template with variable and function (epoch)');
    const time = template(templateString, ['time'], {format});
    assert.matchSnapshot(time(0), 'template rendering with variable and function (epoch)');
    assert.matchSnapshot(time(1000), 'template rendering with variable and function (epoch + 1 second)');

    // json
    assert.matchSnapshot(template(templateStringJson, {time: 0}, {format}, 'json'), 'immediate json template with variable and function (epoch)');
    const timeJson = template(templateStringJson, ['time'], {format}, 'json');
    assert.matchSnapshot(timeJson(0), 'json template rendering with variable and function (epoch)');
    assert.matchSnapshot(timeJson(1000), 'json template rendering with variable and function (epoch + 1 second)');

    // xml
    assert.matchSnapshot(template(templateStringXml, {time: 0}, {format}, 'xml'), 'immediate xml template with variable and function (epoch)');
    const timeXml = template(templateStringXml, ['time'], {format}, 'xml');
    assert.matchSnapshot(timeXml(0), 'xml template rendering with variable and function (epoch)');
    assert.matchSnapshot(timeXml(1000), 'xml template rendering with variable and function (epoch + 1 second)');

    assert.end();
});
