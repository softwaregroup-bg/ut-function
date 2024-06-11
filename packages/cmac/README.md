# ut-function.cmac

CMAC calculation function
Based on [node-aes-cmac](https://www.npmjs.com/package/node-aes-cmac)

## Usage

```js
const cmac = require('ut-function.cmac');

const key = '33333333333333334444444444444444'; // 16 hex bytes

console.log(cmac(key, '0100000000000080', 'des3'));
// cee717dc1d467889

console.log(cmac(key, '0100000000000080', 'aes'));
// a30765e89f679cbb92104a3ac8c86052

console.log(cmac(key, '0100000000000080'));
// Error: Invalid type, should be one of [des3, aes]

console.log(cmac('33333333333333334', '0100000000000080', 'des3'));
// Error: Invalid key length, should be one of [16, 24] bytes
```
