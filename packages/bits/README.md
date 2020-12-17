# ut-function.bits

String padding functionalities

## Installation

```sh
npm i ut-function.bits
```

## Usage examples

```js
const {and, or, xor} = require('ut-function.bits');
and(['0000', '1111'])
// 0000

or(['0000', '1111', '0000'])
// 1111

xor(['0000', '1111'])
// 1111

xor(['AAA=', 'ERE='], 'base64')
// 'ERE='
```
