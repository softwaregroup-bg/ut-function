const tap = require('tap');
const equals = require('./');

// positive matches
tap.equals(equals('x', 'x'), true, 'equal strings');
tap.equals(equals(123, 123), true, 'equal numbers');
tap.equals(equals(['x', 1], ['x', 1]), true, 'equal arrays');
tap.equals(equals({ a: 'a', b: true, c: 123 }, { b: true, a: 'a', c: 123 }), true, 'equal objects');
tap.equals(equals(
    { a: 'a', b: true, c: 123, d: { e: 'f' } },
    { d: { e: 'f' }, b: true, a: 'a', c: 123 }
), true, 'equal deep objects');
tap.equals(equals(false, false), true, 'equal booleans');
tap.equals(equals(null, null), true, 'equal nulls');

// negative matches
tap.equals(equals([1], [1, 2]), false, 'unequal array - array');
tap.equals(equals({x: {y: true}}, {x: {y: {z: true}}}), false, 'unequal object - object');
tap.equals(equals(false, 0), false, 'unequal boolean - number');
tap.equals(equals(false, ''), false, 'unequal boolean - string');
tap.equals(equals(0, ''), false, 'unequal number - string');
tap.equals(equals(null, undefined), false, 'unequal null - undefined');
tap.equals(equals(null, 0), false, 'unequal null - number');
tap.equals(equals(null, false), false, 'unequal null - boolean');
