const countries = require('./countries');
const alphaUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const numeric = alphaUppercase.reduce((prev, current) => Object.assign(prev, {[current]: current.charCodeAt(0) % 55}), {});
const mod97 = array => array
    .map((element) => (numeric[element] || element))
    .join('')
    .match(/[0-9]{1,10}/g)
    .reduce((p, c) => Number(p + c) % 97, 0);

module.exports = {
    generateIban({bban, countryCode}) {
        const mod = mod97([
            ...bban.toUpperCase(),
            ...countryCode.toUpperCase(),
            ...'00'
        ]);
        return [
            countryCode,
            `0${98 - mod}`.slice(-2),
            bban
        ].join('');
    },
    parseIban(iban) {
        const formatted = iban.split(' ').join('').toUpperCase();
        const countryCode = formatted.slice(0, 2);
        const mod = countries[countryCode]?.reg?.test?.(formatted)
            ? mod97([...formatted.slice(4), ...formatted.slice(0, 4)])
            : 0;
        return {
            iban: formatted,
            valid: mod === 1,
            countryCode,
            bban: formatted.slice(4)
        };
    }
};
