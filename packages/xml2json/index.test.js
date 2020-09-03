const path = require('path');
const tap = require('tap');
const fs = require('fs');
const parse = require('./')(fs.readFileSync(path.resolve(__dirname, 'test', 'template.xml')).toString());
const templatePath = (path.resolve(__dirname, 'test', 'template.xml').toString());
const payload = fs.readFileSync(path.resolve(__dirname, 'test', 'payload.xml')).toString();

tap.test('parse', async assert => {
    const wantedResult = { 'a': 'value 1', 'b': { 'c': 'value 2' }, 'd': undefined };
    assert.deepEqual(await parse(payload, templatePath), wantedResult, 'parse xml string to JSON');
    // assert.end();
});
