# ut-function.currency

Usage

```js
const curFun = require('ut-function.currency');
const deps = {
    errors: {
        invalidCurrency: (args) => {
            throw new Error('.....');
        },
        invalidAmount: (args) => {
            throw new Error('.....')
        }
    }
};
const currency = curFun(deps);
```
