/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`packages/template/index.test.js TAP render > html template rendering with built-in escape 1`] = `
<a>&lt;d&gt;&amp;&quot;&gt;&lt;&#39;&lt;/d&gt;</a>
`

exports[`packages/template/index.test.js TAP render > html template rendering with malicious variable 1`] = `
<a>&lt;d&gt;&amp;&quot;&gt;&lt;&#39;&lt;/d&gt;</a>
`

exports[`packages/template/index.test.js TAP render > html template rendering with variable and function (epoch + 1 second) 1`] = `
UTC time: &lt;html&gt;Thu, 01 Jan 1970 00:00:01 GMT&lt;/html&gt;
`

exports[`packages/template/index.test.js TAP render > html template rendering with variable and function (epoch) 1`] = `
UTC time: &lt;html&gt;Thu, 01 Jan 1970 00:00:00 GMT&lt;/html&gt;
`

exports[`packages/template/index.test.js TAP render > immediate html template with special characters 1`] = `
"\\\\u \\r \\n \\t \\f \\"&lt;d&gt;&amp;&quot;&gt;&lt;&#39;&lt;/d&gt;"
`

exports[`packages/template/index.test.js TAP render > immediate html template with variable and function (epoch) 1`] = `
UTC time: &lt;xml&gt;Thu, 01 Jan 1970 00:00:00 GMT&lt;/xml&gt;
`

exports[`packages/template/index.test.js TAP render > immediate json template with special characters 1`] = `
"\\\\u \\r \\n \\t \\f \\"{\\\\\\"d\\\\\\": \\\\\\"&'\\\\n\\\\r\\\\t\\\\b\\\\f"
`

exports[`packages/template/index.test.js TAP render > immediate json template with variable and function (epoch) 1`] = `
UTC time: {\\"json\\": \\"Thu, 01 Jan 1970 00:00:00 GMT\\"}
`

exports[`packages/template/index.test.js TAP render > immediate template with special characters 1`] = `
"\\\\u \\r \\n \\t \\f \\"{\\"b"
`

exports[`packages/template/index.test.js TAP render > immediate template with variable and function (epoch) 1`] = `
UTC time: Thu, 01 Jan 1970 00:00:00 GMT
`

exports[`packages/template/index.test.js TAP render > immediate xml template with special characters 1`] = `
"\\\\u \\r \\n \\t \\f \\"&lt;d&gt;&amp;&quot;&gt;&lt;&apos;&lt;/d&gt;"
`

exports[`packages/template/index.test.js TAP render > immediate xml template with variable and function (epoch) 1`] = `
UTC time: &lt;xml&gt;Thu, 01 Jan 1970 00:00:00 GMT&lt;/xml&gt;
`

exports[`packages/template/index.test.js TAP render > json template rendering with built-in escape 1`] = `
{"a": "{\\"d\\": \\"&'\\n\\r\\t\\b\\f\\"}"}
`

exports[`packages/template/index.test.js TAP render > json template rendering with malicious variable 1`] = `
{"a": "{\\"d\\": \\"&'\\n\\r\\t\\b\\f\\"}"}
`

exports[`packages/template/index.test.js TAP render > json template rendering with variable and function (epoch + 1 second) 1`] = `
UTC time: {\\"json\\": \\"Thu, 01 Jan 1970 00:00:01 GMT\\"}
`

exports[`packages/template/index.test.js TAP render > json template rendering with variable and function (epoch) 1`] = `
UTC time: {\\"json\\": \\"Thu, 01 Jan 1970 00:00:00 GMT\\"}
`

exports[`packages/template/index.test.js TAP render > recursive object values rendering 1`] = `
Object {
  "a": Array [
    "30",
    "ordinary string",
    123,
  ],
  "b": "-10",
  "c": Object {
    "d": "200",
    "e": Array [
      null,
    ],
    "f": true,
    "g": Object {
      "h": 0,
    },
  },
}
`

exports[`packages/template/index.test.js TAP render > template rendering with variable and function (epoch + 1 second) 1`] = `
UTC time: Thu, 01 Jan 1970 00:00:01 GMT
`

exports[`packages/template/index.test.js TAP render > template rendering with variable and function (epoch) 1`] = `
UTC time: Thu, 01 Jan 1970 00:00:00 GMT
`

exports[`packages/template/index.test.js TAP render > xml template rendering with built-in escape 1`] = `
<a>&lt;d&gt;&amp;&quot;&gt;&lt;&apos;&lt;/d&gt;</a>
`

exports[`packages/template/index.test.js TAP render > xml template rendering with malicious variable 1`] = `
<a>&lt;d&gt;&amp;&quot;&gt;&lt;&apos;&lt;/d&gt;</a>
`

exports[`packages/template/index.test.js TAP render > xml template rendering with variable and function (epoch + 1 second) 1`] = `
UTC time: &lt;xml&gt;Thu, 01 Jan 1970 00:00:01 GMT&lt;/xml&gt;
`

exports[`packages/template/index.test.js TAP render > xml template rendering with variable and function (epoch) 1`] = `
UTC time: &lt;xml&gt;Thu, 01 Jan 1970 00:00:00 GMT&lt;/xml&gt;
`
