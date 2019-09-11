# ut-function.template

Fast template engine

## Usage

function `template`(`string`, `params`, `ut`)

Parameters:

* `string`: template to render
* `params`: object, whoose properties are available as
  variables in the template, using ${...} expressions
* `ut`: object, exposed as a global variable named ut,
  which can be accessed inside ${...} expressions. It is
  usually helpful to expose utility functions.

Result:

* The passed `string` with ${...} expressions evaluated

Example:

```js
require('ut-function.template')('UTC time: ${ut.format(time)}', {
    time: 0
}, {
    format: value => (
        value instanceof Date ? value : new Date(value)
    ).toUTCString()
}); // => UTC time: Thu, 01 Jan 1970 00:00:00 GMT

```
