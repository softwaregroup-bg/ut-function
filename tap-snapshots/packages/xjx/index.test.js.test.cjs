/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`packages/xjx/index.test.js TAP parse > parse xml string to object 1`] = `
Object {
  "a": "1",
  "b": Object {
    "c": "2",
  },
  "d": "",
}
`

exports[`packages/xjx/index.test.js TAP parse > render object to xml string 1`] = `
<some>
    <deep>
        <nested>
            <structure>1</structure>
        </nested>
    </deep>
    <veryVeryLongTagName>2</veryVeryLongTagName>
    <potentially>
        <missing></missing>
    </potentially>
</some>

`
