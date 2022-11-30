# ut-function.transform

Used to map db result set to json object based on the config object

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
