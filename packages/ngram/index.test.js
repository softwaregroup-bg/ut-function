const tap = require('tap');
const ngram = require('.');
tap.same(ngram('word'), new Set(['wor', 'ord']), 'default (min: 3, max 3)');
tap.same(ngram('word', {min: 2, max: 3}), new Set(['wo', 'wor', 'or', 'ord', 'rd']), 'min: 2, max 3');
tap.same(ngram('longer', {depth: 2}), new Set(['lon', 'ong', 'nge']), 'depth: 2');
tap.same(ngram('two words'), new Set(['two', 'wor', 'ord', 'rds']), 'two words');
tap.same(ngram('word word'), new Set(['wor', 'ord']), 'word repeat');
tap.same(ngram(''), new Set([]), 'empty string');
