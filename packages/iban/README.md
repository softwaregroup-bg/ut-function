# ut-function.iban

IBAN functionalities

## Installation

```sh
npm i ut-function.iban
```

## Usage examples

```js
const {generateIban, parseIban} = require('ut-function.iban');
generateIban({bban: 'INGB4937453297', countryCode: 'NL'});
// NL26INGB4937453297

parseIban('NL26INGB4937453297')
// iban: 'NL26INGB4937453297'
// valid: true
// countryCode: 'NL'
// bban: 'INGB4937453297'

parseIban('NL33INGB4937453297')
// iban: 'NL33INGB4937453297'
// valid: false
// countryCode: 'NL'
// bban: 'INGB4937453297'

parseIban('NL33INGB49374')
// iban: 'NL33INGB49374'
// valid: false
// countryCode: 'NL'
// bban: 'INGB49374'

parseIban('TM33INGB49374')
// iban: 'TM33INGB49374'
// valid: false
// countryCode: 'TM'
// bban: 'INGB49374'
```
