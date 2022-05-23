# ut-function.xjx - Load XML to Object and Object to XML handlers from a folder

## Usage

> Note: this function is intended to be used by microservices, based on
> `ut-microservice`, that's why its signature may look a bit complicated.
> For more information, see
> [ut-microservice/xml.md](https://github.com/softwaregroup-bg/ut-microservice/blob/master/xml.md)

Create template files in a folder, by using the following naming convention:

- `name1.parse.xml` - create a handler namer `name1` for parsing XML to JSON
- `name2.render.xml` - create a handler named `name2` for rendering JSON to XML

```js
const xjx = require('ut-function.xjx');

async function test() {
  const handlers = (await xjx(fs, __dirname))();
  await handlers.name1({payload: xml}); // will return object from the parsed XML
  await handlers.name2(params, $meta); // will return XML string
}
```

See [index.test.js](./index.test.js) for more details.
