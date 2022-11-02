const tap = require('tap');
const joi = require('joi');
const commonJoi = require('.')({joi});
const commonJoiXss = require('.')({joi, config: {xss: true}});
tap.test('validate', t => {
    t.doesNotThrow(() => joi.assert('<script>x</script>', commonJoi.string), 'string ok "<script>x</script>"');
    t.doesNotThrow(() => joi.assert('javascript:SCRIPT', commonJoi.string), 'string ok "javascript:SCRIPT"');
    t.throws(() => joi.assert('<script>x</script>', commonJoiXss.string), 'string fail "<script>x</script>"');
    t.throws(() => joi.assert('javascript:SCRIPT', commonJoiXss.string), 'string fail "javascript:SCRIPT"');

    t.doesNotThrow(() => joi.assert(undefined, commonJoi.stringNoSpace), 'stringNoSpace ok undefined');
    t.doesNotThrow(() => joi.assert('xy', commonJoi.stringNoSpace), 'stringNoSpace ok "xy"');
    t.throws(() => joi.assert('x y', commonJoi.stringNoSpace), 'stringNoSpace fail "x y"');

    t.throws(() => joi.assert(undefined, commonJoi.stringNoSpaceRequired), 'stringNoSpaceRequired fail undefined');

    t.doesNotThrow(() => joi.assert(null, commonJoi.stringNoSpaceNull), 'stringNoSpaceNull ok null');

    t.doesNotThrow(() => joi.assert(undefined, commonJoi.stringTrimmed), 'stringTrimmed ok undefined');
    t.doesNotThrow(() => joi.assert('x y', commonJoi.stringTrimmed), 'stringTrimmed ok "x y"');
    t.throws(() => joi.assert(' xy', commonJoi.stringTrimmed), 'stringTrimmed fail " xy"');
    t.throws(() => joi.assert('xy ', commonJoi.stringTrimmed), 'stringTrimmed fail "xy "');

    t.throws(() => joi.assert(undefined, commonJoi.stringTrimmedRequired), 'stringTrimmedRequired fail undefined');

    t.doesNotThrow(() => joi.assert(null, commonJoi.stringTrimmedNull), 'stringTrimmedNull ok null');

    t.doesNotThrow(() => joi.assert({field: 'abc', dir: 'ASC'}, commonJoi.orderBy),
        'orderBy ok {"field": "abc", "dir": "ASC"}'
    );
    t.doesNotThrow(() => joi.assert([{field: 'abc', dir: 'ASC'}], commonJoi.orderBy),
        'orderBy ok [{"field": "abc", "dir": "ASC"}]'
    );
    t.doesNotThrow(() => joi.assert(undefined, commonJoi.orderBy), 'orderBy ok undefined');

    t.end();
});
