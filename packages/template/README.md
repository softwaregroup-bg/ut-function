# ut-function.template

Fast and tiny template engine

## Usage

function `template`(`string`, `params`, `ut`, `escape`)

Parameters:

* `string`: Template to render
* `params`: Pass one of:
  * `object`: Template is evaluated, properties of the passed object are
    available as variables in the template, using ${...} expressions
  * `array`: Template rendering function is returned, with arguments
    named after the strings in tha passed array.
* `ut`: object, exposed as a global variable named ut,
  which can be accessed inside ${...} expressions. It is
  usually helpful to expose utility functions. By default the following
  functions are available:
  * `ut.join(delimiter)`: Joins the arguments with the delimiter and bypass escaping
  * `ut.xml`: Tag a template to escape XML characters in placeholders
  * `ut.html`: Tag a template to escape HTML characters in placeholders
  * `ut.json`: Tag a template to use JSON.stringify() in placeholders
* `escape`: default escaping to apply. Can be one of:
  * `'html'`: HTML escaping
  * `'xml'`: XML escaping
  * `'json'`: JSON escaping
  * `anything else`: means no escaping

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

const loop = template(
  '<items>${ut.join(items.map(item => ut.xml`<item>${item}</item>`))}</items>',
  ['items'],
  {},
  'xml'
);
loop(['a', 'b', 'c']);
// <items><item>a</item><item>b</item><item>c</item></items>
```

### recursive rendering

The first argument of the template function can be an
`object` instead of a `string`. In that case the engine
will iterate through the object recursively and will render each
`string` value separately treating it as a standalone template.

E.g.

```js
const result = template(
  {
      a: ['${add(10, 20)}'],
      b: '${subtract(10, 20)}',
      c: {
          d: '${multiply(10, 20)}'
      }
  },
  {
      add: (x, y) => x + y,
      subtract: (x, y) => x - y,
      multiply: (x, y) => x * y
  }
);

/* result would be:
{
  "a": ["30"],
  "b": "-10",
  "c": {
    "d": "200"
  }
}
*/

```
