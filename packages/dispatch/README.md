# ut-dispatch

Easily expose backend methods through script port.

## Usage

Implied namespaces:

```js
const dispatch = require('ut-function.dispatch');
module.exports = function({utMethod}) {
    return dispatch({
        'external.identity': utMethod('internal.identity.check'),
        'external.message': utMethod('internal.message.receive')
    })(...arguments);
};
```

Provide namespace explicitly:

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
