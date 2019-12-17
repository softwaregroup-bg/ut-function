# ut-dispatch

Easily expose backend methods through script port.

## Usage

```js
const dispatch = require('ut-function.dispatch');
module.exports = function({utMethod}) {
    return dispatch({
        namespace: 'external',
        methods: {
            'external.identity': utMethod('internal.identity.check'),
            'external.message': utMethod('internal.message.receive')
        }
    })(...arguments);
};
```
