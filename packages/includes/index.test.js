const tap = require('tap');
const includes = require('./');

tap.equal(includes(true), true, 'includes boolean');
tap.equal(includes('true'), true, 'includes string resolved to true');
tap.equal(includes('false'), false, 'includes string resolved to false');
tap.equal(includes('a', ['a', 'b']), true, 'includes string');
tap.equal(includes(x => x === true, [false, true]), true, 'includes function');
tap.equal(includes([true, false], [true]), true, 'includes array');
tap.equal(includes(/true/, ['false', 'true']), 'true', 'includes regexp');
tap.equal(includes({c: true}, ['a', 'b', 'c']), 'c', 'includes object');
tap.equal(includes(1), false, 'includes number');
