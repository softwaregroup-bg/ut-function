# ut-function.merge

Advanced merge handler

## Installation

```sh
npm i ut-function.merge
```

## Usage examples

```js
const merge = require('ut-function.merge');
const x = {
    foo: 'fooX'
};
const y = {
    foo: 'fooY',
    bar: 'true',
    baz: [{x: 'xX'}, {y:'xY'}]
};
const z = {
    foo: 'fooZ',
    baz: [{y:'xZ'}, {z: 'zZ'}]
};

const output = merge(x, y, z);

/* output will be:
{
    "foo": "fooZ",
    "bar": "true",
    "baz": [
        {
            "y": "xZ"
        },
        {
            "z": "zZ"
        }
    ]
}
*/
```

For more advanced scenarions `ut-function.merge`
provides an alternative method signature

```js
merge(objects, options);
```

Where

* `objects` (required) - an array of objects to be merged
* `options` (optional) - an object with options
  * `options.convert` - whether to convert strings to
  boolean, null or number where applicable
  * `options.mergeStrategies` - whether to apply different merge strategies
  for Arrays located under different paths. Strategies are defined as
  key value pairs where the key is the path to the array and the
  value is a string representing the merge strategy itself.
  The merge stratecies currently available are:
    * `combine` - will concatenate both arrays and filter repeating elements
    * `override` - will override target with source
    * `default` - will apply lodash.mergeWith default strategy

Here is how to achieve the same result as with the example above
based on this alternative signature:

```js
// ...
const output = merge([x, y, z]);
```

In this case merge options were not provided.

if you need to automatically convert strings to
boolean, null or number where applicable, pass
the convert option:

```js
const merge = require('ut-function.merge');
const x = {
    foo: 'fooX'
};
const y = {
    foo: 'fooY',
    bar: 'true',
    baz: [{x: 'xX'}, {y:'xY'}]
};
const z = {
    foo: 'fooZ',
    baz: [{y:'xZ'}, {z: 'zZ'}]
};

const output = merge([x, y, z], {convert: true});

/* output will be:
{
    "foo": "fooZ",
    "bar": true,
    "baz": [
        {
            "y": "xZ"
        },
        {
            "z": "zZ"
        }
    ]
}
*/
```

Note that in this case "bar" become a boolean

Example for applying a different merge strategy:

```js
const merge = require('ut-function.merge');
const x = {
    foo: 'fooX'
};
const y = {
    foo: 'fooY',
    bar: 'true',
    baz: [{x: 'xX'}, {y:'xY'}]
};
const z = {
    foo: 'fooZ',
    baz: [{y:'xZ'}, {z: 'zZ'}]
};

const output = merge([x, y, z], {
    convert: true,
    mergeStrategies: {
        'baz': 'combine'
    }
});

/* output will be:
{
    "foo": "fooZ",
    "bar": true,
    "baz": [
        {
            "x": "xX"
        },
        {
            "y": "xY"
        },
        {
            "y": "xZ"
        },
        {
            "z": "zZ"
        }
    ]
}
*/
```

This works for nested properties also.
Just provide the correct path to the array.

```js
const merge = require('ut-function.merge');
const x = {
    foo: 'fooX'
};
const y = {
    foo: 'fooY',
    bar: 'true',
    baz: {
        test: [{x: 'xX'}, {y:'xY'}, {test: true}]
    }
};
const z = {
    foo: 'fooZ',
    baz: {
        test: [{y:'xZ'}, {z: 'zZ'}, {test: true}]
    }
};

const output = merge([x, y, z], {
    convert: true,
    mergeStrategies: {
        'baz.test': 'combine'
    }
});

/* output will be:
{
    "foo": "fooZ",
    "bar": true,
    "baz": {
        "test": [
            {
                "x": "xX"
            },
            {
                "y": "xY"
            },
            {
                "test": true
            },
            {
                "y": "xZ"
            },
            {
                "z": "zZ"
            }
        ]
    }
}
*/
```

Note that `{"test": true}` appears just once as it was
recognized as a duplication.
