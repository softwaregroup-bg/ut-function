const tap = require('tap');
const table = require('.');
const data = [{column1: 'a'.repeat(30), column2: 'b'.repeat(40), column3: 'c'.repeat(120)}];
tap.test('table', assert => {
    table(data, {maxWidth: 50});
    table(data);
    table(data[0]);
    assert.end();
});
