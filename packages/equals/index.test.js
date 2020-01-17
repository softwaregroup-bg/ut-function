const tap = require('tap');
const equals = require('./');

// positive matches
tap.ok(equals('x', 'x'), 'equal strings');
tap.ok(equals(123, 123), 'equal numbers');
tap.ok(equals(['x', 1], ['x', 1]), 'equal arrays');
tap.ok(equals([[1, 2], [3, 4], [5, 6]], [[1, 2], [3, 4], [5, 6]]), 'equal arrays of arrays');
tap.ok(equals({ a: 'a', b: true, c: 123 }, { b: true, a: 'a', c: 123 }), 'equal objects');
tap.ok(equals(
    { a: 'a', b: true, c: 123, d: { e: 'f' } },
    { d: { e: 'f' }, b: true, a: 'a', c: 123 }
), 'equal deep objects');
tap.ok(equals(false, false), 'equal booleans');
tap.ok(equals(null, null), 'equal nulls');
tap.ok(equals(undefined, undefined), 'equal undefined');
tap.ok(equals('', ''), 'equal empty string');
tap.ok(equals([], []), 'equal empty array');
tap.ok(equals('@', '@'), 'equal special symbols');

// negative matches
tap.notOk(equals(1, 2), 'unequal integers');
tap.notOk(equals(1, 1.5), 'unequal integer float');
tap.notOk(equals('а', 'аа'), 'unequal strings');
tap.notOk(equals([1], [1, 2]), 'unequal array - array');
tap.notOk(equals({x: {y: true}}, {x: {y: {z: true}}}), 'unequal object - object');
tap.notOk(equals([{a: '1'}, {b: '2'}, {c: 3}], [{c: 3}, {b: '2'}, {a: '1'}]), 'unequal arrays - same elements, different order');
tap.notOk(equals(false, 0), 'unequal boolean - number');
tap.notOk(equals(false, ''), 'unequal boolean - string');
tap.notOk(equals(0, ''), 'unequal number - string');
tap.notOk(equals(null, undefined), 'unequal null - undefined');
tap.notOk(equals(null, 0), 'unequal null - number');
tap.notOk(equals({a: null}, null), 'unequal null - number');
tap.notOk(equals(null, false), 'unequal null - boolean');
