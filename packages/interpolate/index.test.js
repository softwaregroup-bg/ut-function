const tap = require('tap');
const interpolate = require('.');
const cases = [
    {
        message: 'no interpolation',
        what: 'x y z',
        inline: false, // use default true
        matcher: undefined, // use default /{([^}]+)}/g
        result: 'x y z'
    },
    {
        message: 'inline interpolation',
        what: 'x {y} z',
        inline: undefined, // use default true
        matcher: undefined, // use default /{([^}]+)}/g
        result: 'x y z',
        params: {
            y: 'y'
        }
    },
    {
        message: 'inline interpolation',
        what: 'x {y} {z}',
        inline: undefined, // use default true
        matcher: undefined, // use default /{([^}]+)}/g
        result: 'x 1 {}',
        params: {
            y: 1,
            z: {}
        }
    },
    {
        message: 'inline interpolation no match',
        what: 'x {y} z',
        inline: undefined, // use default true
        matcher: undefined, // use default /{([^}]+)}/g
        result: 'x {y} z',
        params: {

        }
    },
    {
        message: 'inline interpolation nested params',
        what: 'x {y.y} z',
        inline: undefined, // use default true
        matcher: undefined, // use default /{([^}]+)}/g
        result: 'x y z',
        params: {
            y: {
                y: 'y'
            }
        }
    },
    {
        message: 'inline interpolation different matcher',
        what: 'x {{y}} z',
        inline: undefined, // use default true
        matcher: /{{([^}]+)}}/g,
        result: 'x y z',
        params: {
            y: 'y'
        }
    },
    {
        message: 'non-inline interpolation',
        what: '{x}',
        inline: false,
        matcher: undefined, // use default /{([^}]+)}/g
        result: true,
        params: {
            x: true
        }
    },
    {
        message: 'non-inline interpolation no match',
        what: '{x}',
        inline: false,
        matcher: undefined, // use default /{([^}]+)}/g
        result: '{x}',
        params: {

        }
    },
    {
        message: 'non-inline interpolation nested params',
        what: '{x.y}',
        inline: false,
        matcher: undefined, // use default /{([^}]+)}/g
        result: {
            z: true
        },
        params: {
            x: {
                y: {
                    z: true
                }
            }
        }
    },
    {
        message: 'inline object interpolation',
        what: {
            x: {
                y: 'x {y} z',
                z: [0]
            }
        },
        inline: undefined, // use default true
        matcher: undefined, // use default /{([^}]+)}/g
        result: {
            x: {
                y: 'x y z',
                z: [0]
            }
        },
        params: {
            y: 'y'
        }
    },
    {
        message: 'inline array interpolation',
        what: [{
            x: {
                y: 'x {y} z'
            }
        }],
        inline: undefined, // use default true
        matcher: undefined, // use default /{([^}]+)}/g
        result: [{
            x: {
                y: 'x y z'
            }
        }],
        params: {
            y: 'y'
        }
    },
    {
        message: 'non-inline object interpolation',
        what: {
            x: {
                y: '{y}'
            }
        },
        inline: false,
        matcher: undefined, // use default /{([^}]+)}/g
        result: {
            x: {
                y: true
            }
        },
        params: {
            y: true
        }
    },
    {
        message: 'non-inline array interpolation',
        what: [{
            x: {
                y: '{y}'
            }
        }],
        inline: false,
        matcher: undefined, // use default /{([^}]+)}/g
        result: [{
            x: {
                y: true
            }
        }],
        params: {
            y: true
        }
    }
];

cases.forEach(({message, what, params, inline, matcher, result}) => {
    tap.same(interpolate(what, params, inline, matcher), result, message);
});
