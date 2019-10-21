# ut-function.currency

Usage

```js
const curFun = require('ut-function.currency');
const deps = {
    errors: {
        'currency.invalidCurrency': (args) => {
            throw new Error('.....');
        },
        'currency.invalidAmount': (args) => {
            throw new Error('.....')
        }
    }
};
const currency = curFun(deps);
```
