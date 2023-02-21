# ut-function.console-table

Auto-fit `console.table`

## Usage

`ut-function.console-table` uses `console.table` to show an array
as a table in the console. It will try to shrink or hide columns,
so that the output fits to the specified width.

```js
const table = require('ut-function.console-table');

table(params, options)
```

- `param` can be:
  - an `array`
  - an `object` with properties {`rows`, `name`}, where `name` will be shown in the
    console above the table specified with `rows`
- `options` is an optional parameter with properties:
  - `maxWidth` - the maximum table width
  - `maxColWidth` - the maximum column width
