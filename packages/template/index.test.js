const tap = require('tap');
const template = require('./');

const format = value => (
    value instanceof Date ? value : new Date(value)
).toUTCString();

const formatJson = value => `{"time": "${format(value)}"}`;

const formatXml = value => `<time>${format(value)}</time>`;

// eslint-disable-next-line no-template-curly-in-string
const templateString = 'UTC time: ${ut.format(time)}';

tap.test('render', assert => {
    assert.matchSnapshot(template(templateString, {time: 0}, {format}), 'immediate template with variable and function (epoch)');
    const time = template(templateString, ['time'], {format});
    assert.matchSnapshot(time(0), 'template rendering with variable and function (epoch)');
    assert.matchSnapshot(time(1000), 'template rendering with variable and function (epoch + 1 second)');

    // json
    assert.matchSnapshot(template(templateString, {time: 0}, {format: formatJson}, 'json'), 'immediate json template with variable and function (epoch)');
    const timeJson = template(templateString, ['time'], {format: formatJson}, 'json');
    assert.matchSnapshot(timeJson(0), 'json template rendering with variable and function (epoch)');
    assert.matchSnapshot(timeJson(1000), 'json template rendering with variable and function (epoch + 1 second)');
    // eslint-disable-next-line no-template-curly-in-string
    assert.matchSnapshot(template('{"a": "${b.c}"}', ['b'], {}, 'json')({c: '{"d": "e"}'}), 'json template rendering with malicious variable');

    // xml
    assert.matchSnapshot(template(templateString, {time: 0}, {format: formatXml}, 'xml'), 'immediate xml template with variable and function (epoch)');
    const timeXml = template(templateString, ['time'], {format: formatXml}, 'xml');
    assert.matchSnapshot(timeXml(0), 'xml template rendering with variable and function (epoch)');
    assert.matchSnapshot(timeXml(1000), 'xml template rendering with variable and function (epoch + 1 second)');
    // eslint-disable-next-line no-template-curly-in-string
    assert.matchSnapshot(template('<a>${b.c}</a>', ['b'], {}, 'xml')({c: '<d></d>'}), 'xml template rendering with malicious variable');

    assert.end();
});
