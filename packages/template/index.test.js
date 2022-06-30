const tap = require('tap');
const template = require('./');
const sortKeys = require('sort-keys');

const format = value => (
    value instanceof Date ? value : new Date(value)
).toUTCString();

const formatJson = value => `{"json": "${format(value)}"}`;

const formatXml = value => `<xml>${format(value)}</xml>`;

const formatHtml = value => `<html>${format(value)}</html>`;

// eslint-disable-next-line no-template-curly-in-string
const templateString = 'UTC time: ${ut.format(time)}';
// eslint-disable-next-line no-template-curly-in-string
const specialChars = '\\u \r \n \t \f "${suffix}';

tap.test('render', assert => {
    assert.matchSnapshot(template(templateString, {time: 0}, {format}), 'immediate template with variable and function (epoch)');
    const time = template(templateString, ['time'], {format});
    assert.matchSnapshot(time(0), 'template rendering with variable and function (epoch)');
    assert.matchSnapshot(time(1000), 'template rendering with variable and function (epoch + 1 second)');
    assert.matchSnapshot(JSON.stringify(template(specialChars, {suffix: '{"b'})), 'immediate template with special characters');

    // xml
    assert.matchSnapshot(template(templateString, {time: 0}, {format: formatXml}, 'xml'), 'immediate xml template with variable and function (epoch)');
    const timeXml = template(templateString, ['time'], {format: formatXml}, 'xml');
    assert.matchSnapshot(timeXml(0), 'xml template rendering with variable and function (epoch)');
    assert.matchSnapshot(timeXml(1000), 'xml template rendering with variable and function (epoch + 1 second)');
    // eslint-disable-next-line no-template-curly-in-string
    assert.matchSnapshot(template('<a>${b.c}</a>', ['b'], {}, 'xml')({c: '<d>&"><\'</d>'}), 'xml template rendering with malicious variable');
    // eslint-disable-next-line no-template-curly-in-string
    assert.matchSnapshot(template('<a>${ut.escapeXml(b.c)}</a>', ['b'], {})({c: '<d>&"><\'</d>'}), 'xml template rendering with built-in escape');
    assert.matchSnapshot(JSON.stringify(template(specialChars, {suffix: '<d>&"><\'</d>'}, {}, 'xml')), 'immediate xml template with special characters');
    // eslint-disable-next-line no-template-curly-in-string
    assert.matchSnapshot(template('<a>${ut.join(params.list.map(item => ut.xml`\n  <item>${item}</item>`))}\n</a>', ['params'], {}, 'xml')({list: [1, '"2"', '<3>']}), 'xml template with iterator');

    // html
    assert.matchSnapshot(template(templateString, {time: 0}, {format: formatXml}, 'html'), 'immediate html template with variable and function (epoch)');
    const timeHtml = template(templateString, ['time'], {format: formatHtml}, 'html');
    assert.matchSnapshot(timeHtml(0), 'html template rendering with variable and function (epoch)');
    assert.matchSnapshot(timeHtml(1000), 'html template rendering with variable and function (epoch + 1 second)');
    // eslint-disable-next-line no-template-curly-in-string
    assert.matchSnapshot(template('<a>${b.c}</a>', ['b'], {}, 'html')({c: '<d>&"><\'</d>'}), 'html template rendering with malicious variable');
    // eslint-disable-next-line no-template-curly-in-string
    assert.matchSnapshot(template('<a>${ut.escapeHtml(b.c)}</a>', ['b'], {})({c: '<d>&"><\'</d>'}), 'html template rendering with built-in escape');
    assert.matchSnapshot(JSON.stringify(template(specialChars, {suffix: '<d>&"><\'</d>'}, {}, 'html')), 'immediate html template with special characters');
    // eslint-disable-next-line no-template-curly-in-string
    assert.matchSnapshot(template('<body>${ut.join(params.list.map(item => ut.html`\n  <div>${item}</div>`))}\n</body>', ['params'], {}, 'html')({list: [1, "'2'", '<3>']}), 'html template with iterator');

    // json
    assert.matchSnapshot(template(templateString, {time: 0}, {format: formatJson}, 'json'), 'immediate json template with variable and function (epoch)');
    const timeJson = template(templateString, ['time'], {format: formatJson}, 'json');
    assert.matchSnapshot(timeJson(0), 'json template rendering with variable and function (epoch)');
    assert.matchSnapshot(timeJson(1000), 'json template rendering with variable and function (epoch + 1 second)');
    // eslint-disable-next-line no-template-curly-in-string
    assert.matchSnapshot(template('{"a": "${b.c}"}', ['b'], {}, 'json')({c: '{"d": "&\'\n\r\t\b\f"}'}), 'json template rendering with malicious variable');
    // eslint-disable-next-line no-template-curly-in-string
    assert.matchSnapshot(template('{"a": "${ut.escapeJson(b.c)}"}', ['b'], {})({c: '{"d": "&\'\n\r\t\b\f"}'}), 'json template rendering with built-in escape');
    assert.matchSnapshot(JSON.stringify(template(specialChars, {suffix: '{"d": "&\'\n\r\t\b\f'}, {}, 'json')), 'immediate json template with special characters');
    // eslint-disable-next-line no-template-curly-in-string
    assert.matchSnapshot(template('{"items": [${ut.join(params.list.map(item => ut.json`\n  ${item}`),\',\')}\n]}', ['params'], {}, 'json')({list: [1, '2', [3], {}, null, true, false]}), 'json template with iterator');

    assert.equal(template(null), null, 'null template');

    assert.equal(template(true), true, 'boolean template');

    assert.throws(() => template({x: {y: {z: true}}}, {}, {}, null, 2), new Error('max depth reached!'));

    // complex object
    assert.matchSnapshot(sortKeys(template({
        a: ['${add(10, 20)}', 'ordinary string', 123], // eslint-disable-line no-template-curly-in-string
        b: '${subtract(10, 20)}', // eslint-disable-line no-template-curly-in-string
        c: {
            d: '${multiply(10, 20)}', // eslint-disable-line no-template-curly-in-string
            e: [null],
            f: true,
            g: {
                h: 0
            }
        }
    }, {
        add: (x, y) => x + y,
        subtract: (x, y) => x - y,
        multiply: (x, y) => x * y
    }), {deep: true}), 'recursive object values rendering');

    assert.throws(() => template('${', {}), {templateString: '${'}, 'Unexpected end of input');

    assert.end();
});
