# ut-funciton.interpolate

function signature:

`interpolate(what, params, inline, matcher)`

    * what [required] - what to be interpolated
    `string`, `object` or `array`
    * params [required] - interpolation data source
    * inline [optional] (default true) - whether the
    interpolation to be inline or not.
    E.g. `{x}` with params `{x: true}` will become
    `"true"` if inline or `true` otherwise
    * matcher [optional] (default `/{([^}]+)}/g`) - the
    interpolation matcher

Examples:

```js
const result = interpolate("x {y} z", {"y":"y"});
// result = "x y z"
```

```js
const result = interpolate("x {y} z", {});
// result = "x {y} z"
```

```js
const result = interpolate("x {y.y} z", {"y":{"y":"y"}});
// result = "x y z"
```

```js
const result = interpolate("x {{y}} z", {"y":"y"}, true, /{{([^}]+)}}/g);
// result = "x y z"
```

```js
const result = interpolate("{x}", {"x":true}, false);
// result = true
```

```js
const result = interpolate("{x}", {}, false);
// result = "{x}"
```

```js
const result = interpolate("{x.y}", {"x":{"y":{"z":true}}}, false);
// result = {"z":true}
```

```js
const result = interpolate({"x":{"y":"x {y} z"}}, {"y":"y"});
// result = {"x":{"y":"x y z"}}
```

```js
const result = interpolate([{"x":{"y":"x {y} z"}}], {"y":"y"});
// result = [{"x":{"y":"x y z"}}]
```

```js
const result = interpolate({"x":{"y":"{y}"}}, {"y":true}, false);
// result = {"x":{"y":true}}
```

```js
const result = interpolate([{"x":{"y":"{y}"}}], {"y":true}, false);
// result = [{"x":{"y":true}}]
```