const tap = require('tap');

const {sum} = require('./index')({
    errors: {
        'currency.invalidCurrency': () => new Error('Invalid currency'),
        'currency.invalidAmount': () => new Error('Invalid amount')
    }
});

tap.test('sum', assert => {
    assert.strictSame(sum('USD', []), ['0.00', []], 'zero sum of empty array');
    assert.strictSame(sum('USD', [-1]), ['-1.00', ['-1.00']], 'negative');
    assert.equal(0.1 + 0.2, 0.30000000000000004, '0.1 + 0.2 === 0.30000000000000004');
    assert.strictSame(sum('USD', [0.1, 0.2]), ['0.30', ['0.10', '0.20']], 'rounded sum');
    assert.strictSame(sum('USD', [0.005, 0.005]), ['0.02', ['0.01', '0.01']], 'sum of amounts rounded up');
    assert.strictSame(sum('USD', [0.004, 0.004]), ['0.00', ['0.00', '0.00']], 'sum of amounts rounded down');
    assert.end();
});
