let tz = require('timezone');
const loaded = new Set();
const VALID = /^[A-Z][A-Za-z]+(\/[A-Z][A-Za-z-_]+)?$/;
module.exports = (date, format, zone) => {
    if (zone && !loaded.has(zone) && VALID.test(zone) && require.resolve('timezone/' + zone)) {
        tz = tz(require('timezone/' + zone));
        loaded.add(zone);
    }
    return zone ? tz(date, format, zone) : tz(date, format);
};
