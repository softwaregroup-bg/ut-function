require('ut-run').run({
    main: require('.')({
        'a.b.c': () => 'abc',
        'x.y.z': () => 'xyz'
    }),
    method: 'unit',
    config: {},
    params: {
        steps: [{
            method: 'a.b.c', name: 'call a.b.c', result: (result, assert) => assert.equals(result, 'abc', 'return abc')
        }, {
            method: 'x.y.z', name: 'call x.y.z', result: (result, assert) => assert.equals(result, 'xyz', 'return xyz')
        }]
    }
});
