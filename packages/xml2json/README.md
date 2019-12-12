# ut-function.xml2json - practical XML parsing

Use precompiled template to extract meaningful object from XML junk

## Usage

```xml
<!-- template.xml -->
<some>
    <deep>
        <nested>
            <structure>${a}</structure>
        </nested>
    </deep>
    <veryVeryLongTagName>${b.c}</veryVeryLongTagName>
    <potentially>
        <missing>${d}</missing>
    </potentially>
<some>
```

```xml
<!-- payload.xml -->
<randomNameSpace:some xmlns:randomNameSpace="http://randomNameSpace.com">
    <deep>
        <nested>
            <structure>value 1</structure>
        </nested>
    </deep>
    <veryVeryLongTagName>value 2</veryVeryLongTagName>
    <something>
        <weDoNotCareAbout>value 3</weDoNotCareAbout>
    </something>
</randomNameSpace:some>
```

```js
const fs = require('fs');
const parse = require('ut-function.xml2json')(fs.readFileSync('template.xml').toString())
const xml = fs.readFileSync('payload.xml').toString();

async function test() {
    // convert xml string to object
    await parse(xml)
    // { a: 'value 1', b: { c: 'value 2' }, d: undefined }

    // convert xml string to JSON
    await parse(xml, true)
    // '{"a":"value 1","b":{"c":"value 2"},"d":"undefined"}'

    // convert parsed xml to object
    await parse({
        some: {
            deep: {
                nested: {
                    structure: 'value 1'
                }
            },
            veryVeryLongTagName: 'value 2'
        }
    });
    // { a: 'value 1', b: { c: 'value 2' }, d: undefined }
}
```
