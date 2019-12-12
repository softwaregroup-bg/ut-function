const sortKeys = require('sort-keys');
const path = require('path');
const tap = require('tap');
const fs = require('fs');
const parse = require('./')(fs.readFileSync(path.resolve(__dirname, 'test', 'template.xml')).toString());
const payload = fs.readFileSync(path.resolve(__dirname, 'test', 'payload.xml')).toString();

tap.test('parse', async assert => {
    assert.matchSnapshot(sortKeys(await parse(payload)), 'parse xml string to object');
    assert.matchSnapshot(await parse(payload, true), 'parse xml string to JSON');
    assert.matchSnapshot(sortKeys(await parse({
        some: {
            deep: {
                nested: {
                    structure: 'value 1'
                }
            },
            veryVeryLongTagName: 'value 2'
        }
    })), 'extract object from parsed xml');
    assert.end();
});
