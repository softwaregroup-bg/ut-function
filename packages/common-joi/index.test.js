const tap = require('tap');
const joi = require('joi');
const commonJoi = require('.')({joi});
const commonJojXss = require('.')({joi, config: {xss: true}});
tap.test('validate', t => {
    t.equal(commonJoi.string.validate('<script>x</script>').value, '<script>x</script>', 'input not filtered');
    t.equal(commonJojXss.string.validate('<script>x</script>').value, '&lt;script&gt;x&lt;/script&gt;', 'input filtered');

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

    t.end();
});
