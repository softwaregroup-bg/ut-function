# ut-function.timezone

## Usage

```js
let string = require('ut-function.timezone')(date, format, timezone)
```

Where

- `date` - date to use
- `format` - specifies the format, using  [GNU date format specifiers](http://man7.org/linux/man-pages/man1/date.1.html)
- `timezone` - specifies [IANA timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
