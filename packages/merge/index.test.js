const tap = require('tap');
const merge = require('./');
const equals = require('ut-function.equals');

tap.ok(equals(merge([], ['a', 'c']), ['a', 'c']), 'merge empty array with array');
tap.ok(equals(merge({}, ['a', 'c', true, 2, {x: {y: 1.5}}]), {0: 'a', 1: 'c', 2: true, 3: 2, 4: {x: {y: 1.5}}}), 'merge empty object with array');
tap.ok(equals(merge({}, {x: 'a', y: 1, z: {c: true}}), {x: 'a', y: 1, z: {c: true}}), 'merge empty object with object');
tap.ok(equals(merge({}, 'bbb'), {0: 'b', 1: 'b', 2: 'b'}), 'merge empty object with string');
tap.ok(equals(merge({}, 123), {}), 'merge empty object with number');
tap.ok(equals(merge({a: 1}, {b: {x: {y: true, z: 'test'}}}), {a: 1, b: {x: {y: true, z: 'test'}}}), 'merge objects');
tap.ok(equals(merge({a: 1}, {b: {x: {a: true, z: 'test'}}}), {a: 1, b: {x: {a: true, z: 'test'}}}), 'merge objects');
tap.ok(equals(merge({a: 1}, {a: 2}), {a: 2}), 'merge objects with same key');
tap.ok(equals(merge({a: 1}, null), {a: 1}), 'merge object with null');
tap.ok(equals(merge({a: 1}, undefined), {a: 1}), 'merge object with undefined');
tap.ok(equals(merge([null], {a: 1}), {}), 'merge null with wrong options');
