# ut-function.template

Fast and tiny template engine

## Usage

function `template`(`string`, `params`, `ut`)

Parameters:

* `string`: Template to render
* `params`: Pass one of:
    * `object`: Template is evaluated, properties of the passed object are
    available as variables in the template, using ${...} expressions
    * `array`: Template rendering function is returned, with arguments
    named after the strings in tha passed array.
* `ut`: object, exposed as a global variable named ut,
  which can be accessed inside ${...} expressions. It is
  usually helpful to expose utility functions.

Result:

* The passed `string` with ${...} expressions evaluated

Example:

```js
const template = require('ut-function.template')
const format = value => (
    value instanceof Date ? value : new Date(value)
).toUTCString();
const templateString = 'UTC time: ${ut.format(time)}';

template(templateString, {time: 0}, {format});
// => UTC time: Thu, 01 Jan 1970 00:00:00 GMT

const time = template(templateString, ['time'], {format});
time(0);
// => UTC time: Thu, 01 Jan 1970 00:00:00 GMT

```
