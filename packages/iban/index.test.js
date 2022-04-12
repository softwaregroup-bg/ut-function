const tap = require('tap');
const {generateIban, parseIban} = require('./');

tap.equal(generateIban({bban: 'INGB4937453297', countryCode: 'NL'}), 'NL26INGB4937453297', 'generates valid iban');
tap.same(parseIban('NL26INGB4937453297'), {
    iban: 'NL26INGB4937453297',
    valid: true,
    countryCode: 'NL',
    bban: 'INGB4937453297'
}, 'parsed result');

tap.same(parseIban('NL33INGB4937453297'), {
    iban: 'NL33INGB4937453297',
    valid: false,
    countryCode: 'NL',
    bban: 'INGB4937453297'
}, 'parsed result');

tap.same(parseIban('NL33INGB49374'), {
    iban: 'NL33INGB49374',
    valid: false,
    countryCode: 'NL',
    bban: 'INGB49374'
}, 'parsed result');

tap.same(parseIban('TM33INGB49374'), {
    iban: 'TM33INGB49374',
    valid: false,
    countryCode: 'TM',
    bban: 'INGB49374'
}, 'parsed result');