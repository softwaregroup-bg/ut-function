# ut-function.timing

Time intervals and high resolution time helpers, browser compatible

## Usage

```js
const {diff, after, isAfter, now, spare} = require('ut-function.timing')
```

Where

- `diff(time1, time2)` - difference in milliseconds between two high resolution
  time values `time1` and `time2`
- `after(interval)` - get local high resolution time value after specified time
  `interval` in milliseconds
- `isAfter(time, timeout)` - check if high resolution `time` is after high
  resolution value `timeout`
- `now` - get curren time as high resolution value
- `spare(time, latency)` - get remaining time between current time and passed `time`,
  minus the optional expected network or other `latency`
