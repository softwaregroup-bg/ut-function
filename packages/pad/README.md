# ut-function.pad

String padding functionalities

## Installation

```sh
npm i ut-function.pad
```

## Usage examples

```js
const {padString, unpadString} = require('ut-function.pad');
padString('abcd', undefined, undefined, 10, 'ANSI X.923')
// abcd000003

unpadString('abcd000003', undefined, undefined, 'ANSI X.923')
// abcd

padString('abcd', undefined, undefined, 10, 'PKCS7')
// abcd030303

unpadString('abcd030303', undefined, undefined, 'PKCS7')
// abcd

padString('abcd', 'r', '0', 10)
// abcd000000

unpadString('abcd000000', 'r', '0')
// abcd

padString('abcd', 'l', 'F', 10)
// FFFFFFabcd

unpadString('abcd000000', 'l', 'F')
// abcd

```
