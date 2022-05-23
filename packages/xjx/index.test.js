const path = require('path');
const tap = require('tap');
const fs = require('fs');
const xjx = require('./');

tap.test('parse', async assert => {
    const {xml2json, json2xml} = (await xjx(fs, path.join(__dirname, 'test')))();
    const payload = json2xml({a: 1, b: {c: 2}, d: null}, {});
    assert.matchSnapshot(payload, 'render object to xml string');
    assert.matchSnapshot(await xml2json({payload: Buffer.from(payload)}), 'parse xml string to object');
    assert.end();
});
