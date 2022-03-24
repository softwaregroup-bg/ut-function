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
            veryVeryLongTagName: 'value 2',
            props: {
                prop: ['prop 1', 'prop 2']
            },
            items: {
                item: [
                    {prop1: 'item 1 prop 1', prop2: 'item 1 prop 2'},
                    {prop1: 'item 2 prop 1'}
                ]
            }
        }
    })), 'extract object from parsed xml');
    assert.end();
});
