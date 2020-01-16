const tap = require('tap');
const merge = require('./');
const equals = require('ut-function.equals');

// Positive matches
tap.ok(equals(merge([], ['a', 'c']), ['a', 'c']), 'merge empty array with array');
tap.ok(equals(merge({}, ['a', 'c', true, 2, {x: {y: 1.5}}]), {0: 'a', 1: 'c', 2: true, 3: 2, 4: {x: {y: 1.5}}}), 'merge empty object with array');
tap.ok(equals(merge({}, {x: 'a', y: 1, z: {c: true}}), {x: 'a', y: 1, z: {c: true}}), 'merge empty object with object');
tap.ok(equals(merge({}, 'bbb'), {0: 'b', 1: 'b', 2: 'b'}), 'merge empty object with string');
tap.ok(equals(merge({}, 123), {}), 'merge empty object with number');
tap.ok(equals(merge({a: 1}, {b: {x: {y: true, z: 'test'}}}), {a: 1, b: {x: {y: true, z: 'test'}}}), 'merge objects');
tap.ok(equals(merge({a: 1}, {a: 2}), {a: 2}), 'merge objects with same key');
tap.ok(equals(merge({a: 1}, null), {a: 1}), 'merge object with null');
tap.ok(equals(merge({a: 1}, undefined), {a: 1}), 'merge object with undefined');
tap.ok(equals(merge([null], {a: 1}), {}), 'merge object with null array');
tap.ok(equals(merge([{a: [1]}, {a: [2]}], {mergeStrategies: {a: 'combine'}}), {a: [1, 2]}), 'merge objects with combine');
tap.ok(equals(merge([{a: [1]}, {a: 2}], {mergeStrategies: {a: 'combine'}}), {a: 2}), 'merge objects with combine');
tap.ok(equals(merge([{a: [1]}, {a: [2]}], {mergeStrategies: {a: 'override'}}), {a: [2]}), 'merge objects with override');
tap.ok(equals(merge([{a: [1]}, {a: [2]}], {mergeStrategies: {a: 'default'}}), {a: [2]}), 'merge objects with default');
tap.ok(equals(merge([{a: [1]}, {a: [2]}], {mergeStrategies: {a: true}}), {a: [2]}), 'merge objects with mergeStrategy bool');
tap.ok(equals(merge([{a: [1]}, {a: [2]}], {mergeStrategies: {}}), {a: [2]}), 'merge objects with mergeStrategy empty obj');
tap.ok(equals(merge([{x: {y: {z: [1]}}}, {x: {y: {z: [2]}}}], {mergeStrategies: {'x.y.z': (a, b) => a + b}}), {x: {y: {z: '12'}}}), 'merge objects with function');
tap.ok(equals(merge([{a: {b: {c: [1], d: true}}}, {a: {b: {c: [2], d: false}}}], {mergeStrategies: {'a.b.c': 'combine'}}), {a: {b: {c: [1, 2], d: false}}}), 'merge objects with function');
tap.ok(equals(merge([{a: [1]}, {a: new Set([3, 5])}]), {a: [1, 3, 5]}), 'merge objects with set');
// tap.ok(equals(merge([{a: 1, b: 'true', c: 'test'}, {a: 2, d: 'false'}], {convert: true}), {a: 2, b: true, c: 'test', d: false}), 'merge objects with same key');
tap.ok(equals(merge([{}, {a: 2, d: 'false'}], {convert: true}), {a: 2, d: false}), 'merge objects with convert bool false');
tap.ok(equals(merge([{}, {a: 2, d: 'false'}], {convert: false}), {a: 2, d: 'false'}), 'merge objects with convert false');
tap.ok(equals(merge([{}, {a: 2, d: 'true'}], {convert: true}), {a: 2, d: true}), 'merge objects with convert bool true');
tap.ok(equals(merge([{}, {a: 2, d: 'null'}], {convert: true}), {a: 2, d: null}), 'merge objects with convert null');
tap.ok(equals(merge([{}, {a: 2, d: '1.5'}], {convert: true}), {a: 2, d: 1.5}), 'merge objects with convert float');
tap.ok(equals(merge([{}, {a: 2, d: '1,5'}], {convert: true}), {a: 2, d: '1,5'}), 'merge objects with convert float');
tap.ok(equals(merge([1, 2, 4], new Set([3, 5])), new Set([3, 5])), 'merge array with Set');
tap.ok(equals(merge([1, 2], [3, 4], ['a']), ['a', 4]), 'merge more than two');
tap.ok(equals(merge([[{a: 1}, 2], [3, {b: {c: 'false'}}], ['true']], {convert: true}), [true, {b: {c: false}}]), 'merge more than two');

// Negative matches
tap.notOk(equals(merge([1, 2], [3]), [1, 2, 3]), 'return default lodash merge');
tap.notOk(equals(merge([1, 2], [3]), [1, 2]), 'return default lodash merge');
tap.notOk(equals(merge([], {a: 1}), []), 'merge object with empty array');
