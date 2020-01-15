# ut-function.cbc

Cipher block chaining encrypt/decrypt factory function

## Usage

ut-function.cbc is a factory function
that has a single argument `key`which must
be a buffer or `hex` representing the raw key
used by the built-in `aes-256-cbc` algorithm.

e.g.:

```js
const cbc = require('ut-function.cbc');
// use 32 bytes hex as a key in this case
const {encrypt, decrypt} = cbc('757435736f66747761726567726f7570757435736f66747761726567726f7570');

// different each time as it is being encrypted with random seed
const encrypted = encrypt('test');

// equals to 'test' no matter the seed was random
const decrypted = decrypt(encrypted);
```
