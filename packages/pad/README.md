# ut-function.pad

String padding functionalities

## Installation

```sh
npm i ut-function.pad
```

## Usage examples

```js
const {padString} = require('ut-function.pad');
padString('abcd', undefined, undefined, 10, 'ANSI X.923')
// abcd000003

padString('abcd', undefined, undefined, 10, 'PKCS7')
// abcd030303

padString('abcd', 'r', '0', 10)
// abcd000000

padString('abcd', 'l', 'F', 10)
// FFFFFFabcd

```
