/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`packages/template/index.test.js TAP render browser > html template rendering with built-in escape 1`] = `
<a>&lt;d&gt;&amp;&quot;&gt;&lt;&#39;&lt;/d&gt;</a>
`

exports[`packages/template/index.test.js TAP render browser > html template rendering with malicious variable 1`] = `
<a>&lt;d&gt;&amp;&quot;&gt;&lt;&#39;&lt;/d&gt;</a>
`

exports[`packages/template/index.test.js TAP render browser > html template rendering with variable and function (epoch + 1 second) 1`] = `
UTC time: &lt;html&gt;Thu, 01 Jan 1970 00:00:01 GMT&lt;/html&gt;
`

exports[`packages/template/index.test.js TAP render browser > html template rendering with variable and function (epoch) 1`] = `
UTC time: &lt;html&gt;Thu, 01 Jan 1970 00:00:00 GMT&lt;/html&gt;
`

exports[`packages/template/index.test.js TAP render browser > html template with iterator 1`] = `
<body>
  <div>1</div>
  <div>&#39;2&#39;</div>
  <div>&lt;3&gt;</div>
</body>
`

exports[`packages/template/index.test.js TAP render browser > immediate html template with special characters 1`] = `
"\\\\u \\r \\n \\t \\f \\"&lt;d&gt;&amp;&quot;&gt;&lt;&#39;&lt;/d&gt;"
`

exports[`packages/template/index.test.js TAP render browser > immediate html template with variable and function (epoch) 1`] = `
UTC time: &lt;xml&gt;Thu, 01 Jan 1970 00:00:00 GMT&lt;/xml&gt;
`

exports[`packages/template/index.test.js TAP render browser > immediate json template with special characters 1`] = `
"\\\\u \\r \\n \\t \\f \\"{\\\\\\"d\\\\\\": \\\\\\"&'\\\\n\\\\r\\\\t\\\\b\\\\f"
`

exports[`packages/template/index.test.js TAP render browser > immediate json template with variable and function (epoch) 1`] = `
UTC time: {\\"json\\": \\"Thu, 01 Jan 1970 00:00:00 GMT\\"}
`

exports[`packages/template/index.test.js TAP render browser > immediate template with special characters 1`] = `
"\\\\u \\r \\n \\t \\f \\"{\\"b"
`

exports[`packages/template/index.test.js TAP render browser > immediate template with variable and function (epoch) 1`] = `
UTC time: Thu, 01 Jan 1970 00:00:00 GMT
`

exports[`packages/template/index.test.js TAP render browser > immediate xml template with special characters 1`] = `
"\\\\u \\r \\n \\t \\f \\"&lt;d&gt;&amp;&quot;&gt;&lt;&apos;&lt;/d&gt;"
`

exports[`packages/template/index.test.js TAP render browser > immediate xml template with variable and function (epoch) 1`] = `
UTC time: &lt;xml&gt;Thu, 01 Jan 1970 00:00:00 GMT&lt;/xml&gt;
`

exports[`packages/template/index.test.js TAP render browser > json optional chaining 1`] = `
{"a": ""}
`

exports[`packages/template/index.test.js TAP render browser > json stringify 1`] = `
["2", {}, 1]
`

exports[`packages/template/index.test.js TAP render browser > json template rendering with built-in escape 1`] = `
{"a": "{\\"d\\": \\"&'\\n\\r\\t\\b\\f\\"}"}
`

exports[`packages/template/index.test.js TAP render browser > json template rendering with malicious variable 1`] = `
{"a": "{\\"d\\": \\"&'\\n\\r\\t\\b\\f\\"}"}
`

exports[`packages/template/index.test.js TAP render browser > json template rendering with variable and function (epoch + 1 second) 1`] = `
UTC time: {\\"json\\": \\"Thu, 01 Jan 1970 00:00:01 GMT\\"}
`

exports[`packages/template/index.test.js TAP render browser > json template rendering with variable and function (epoch) 1`] = `
UTC time: {\\"json\\": \\"Thu, 01 Jan 1970 00:00:00 GMT\\"}
`

exports[`packages/template/index.test.js TAP render browser > json template with iterator 1`] = `
{"items": [
  1,
  "2",
  [3],
  {},
  null,
  true,
  false
]}
`

exports[`packages/template/index.test.js TAP render browser > recursive object values rendering 1`] = `
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

exports[`packages/template/index.test.js TAP render browser > template rendering with variable and function (epoch + 1 second) 1`] = `
UTC time: Thu, 01 Jan 1970 00:00:01 GMT
`

exports[`packages/template/index.test.js TAP render browser > template rendering with variable and function (epoch) 1`] = `
UTC time: Thu, 01 Jan 1970 00:00:00 GMT
`

exports[`packages/template/index.test.js TAP render browser > xml template rendering with built-in escape 1`] = `
<a>&lt;d&gt;&amp;&quot;&gt;&lt;&apos;&lt;/d&gt;</a>
`

exports[`packages/template/index.test.js TAP render browser > xml template rendering with malicious variable 1`] = `
<a>&lt;d&gt;&amp;&quot;&gt;&lt;&apos;&lt;/d&gt;</a>
`

exports[`packages/template/index.test.js TAP render browser > xml template rendering with variable and function (epoch + 1 second) 1`] = `
UTC time: &lt;xml&gt;Thu, 01 Jan 1970 00:00:01 GMT&lt;/xml&gt;
`

exports[`packages/template/index.test.js TAP render browser > xml template rendering with variable and function (epoch) 1`] = `
UTC time: &lt;xml&gt;Thu, 01 Jan 1970 00:00:00 GMT&lt;/xml&gt;
`

exports[`packages/template/index.test.js TAP render browser > xml template with iterator 1`] = `
<a>
  <item>1</item>
  <item>&quot;2&quot;</item>
  <item>&lt;3&gt;</item>
</a>
`

exports[`packages/template/index.test.js TAP render node > html template rendering with built-in escape 1`] = `
<a>&lt;d&gt;&amp;&quot;&gt;&lt;&#39;&lt;/d&gt;</a>
`

exports[`packages/template/index.test.js TAP render node > html template rendering with malicious variable 1`] = `
<a>&lt;d&gt;&amp;&quot;&gt;&lt;&#39;&lt;/d&gt;</a>
`

exports[`packages/template/index.test.js TAP render node > html template rendering with variable and function (epoch + 1 second) 1`] = `
UTC time: &lt;html&gt;Thu, 01 Jan 1970 00:00:01 GMT&lt;/html&gt;
`

exports[`packages/template/index.test.js TAP render node > html template rendering with variable and function (epoch) 1`] = `
UTC time: &lt;html&gt;Thu, 01 Jan 1970 00:00:00 GMT&lt;/html&gt;
`

exports[`packages/template/index.test.js TAP render node > html template with iterator 1`] = `
<body>
  <div>1</div>
  <div>&#39;2&#39;</div>
  <div>&lt;3&gt;</div>
</body>
`

exports[`packages/template/index.test.js TAP render node > immediate html template with special characters 1`] = `
"\\\\u \\r \\n \\t \\f \\"&lt;d&gt;&amp;&quot;&gt;&lt;&#39;&lt;/d&gt;"
`

exports[`packages/template/index.test.js TAP render node > immediate html template with variable and function (epoch) 1`] = `
UTC time: &lt;xml&gt;Thu, 01 Jan 1970 00:00:00 GMT&lt;/xml&gt;
`

exports[`packages/template/index.test.js TAP render node > immediate json template with special characters 1`] = `
"\\\\u \\r \\n \\t \\f \\"{\\\\\\"d\\\\\\": \\\\\\"&'\\\\n\\\\r\\\\t\\\\b\\\\f"
`

exports[`packages/template/index.test.js TAP render node > immediate json template with variable and function (epoch) 1`] = `
UTC time: {\\"json\\": \\"Thu, 01 Jan 1970 00:00:00 GMT\\"}
`

exports[`packages/template/index.test.js TAP render node > immediate template with special characters 1`] = `
"\\\\u \\r \\n \\t \\f \\"{\\"b"
`

exports[`packages/template/index.test.js TAP render node > immediate template with variable and function (epoch) 1`] = `
UTC time: Thu, 01 Jan 1970 00:00:00 GMT
`

exports[`packages/template/index.test.js TAP render node > immediate xml template with special characters 1`] = `
"\\\\u \\r \\n \\t \\f \\"&lt;d&gt;&amp;&quot;&gt;&lt;&apos;&lt;/d&gt;"
`

exports[`packages/template/index.test.js TAP render node > immediate xml template with variable and function (epoch) 1`] = `
UTC time: &lt;xml&gt;Thu, 01 Jan 1970 00:00:00 GMT&lt;/xml&gt;
`

exports[`packages/template/index.test.js TAP render node > json optional chaining 1`] = `
{"a": ""}
`

exports[`packages/template/index.test.js TAP render node > json stringify 1`] = `
["2", {}, 1]
`

exports[`packages/template/index.test.js TAP render node > json template rendering with built-in escape 1`] = `
{"a": "{\\"d\\": \\"&'\\n\\r\\t\\b\\f\\"}"}
`

exports[`packages/template/index.test.js TAP render node > json template rendering with malicious variable 1`] = `
{"a": "{\\"d\\": \\"&'\\n\\r\\t\\b\\f\\"}"}
`

exports[`packages/template/index.test.js TAP render node > json template rendering with variable and function (epoch + 1 second) 1`] = `
UTC time: {\\"json\\": \\"Thu, 01 Jan 1970 00:00:01 GMT\\"}
`

exports[`packages/template/index.test.js TAP render node > json template rendering with variable and function (epoch) 1`] = `
UTC time: {\\"json\\": \\"Thu, 01 Jan 1970 00:00:00 GMT\\"}
`

exports[`packages/template/index.test.js TAP render node > json template with iterator 1`] = `
{"items": [
  1,
  "2",
  [3],
  {},
  null,
  true,
  false
]}
`

exports[`packages/template/index.test.js TAP render node > recursive object values rendering 1`] = `
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

exports[`packages/template/index.test.js TAP render node > template rendering with variable and function (epoch + 1 second) 1`] = `
UTC time: Thu, 01 Jan 1970 00:00:01 GMT
`

exports[`packages/template/index.test.js TAP render node > template rendering with variable and function (epoch) 1`] = `
UTC time: Thu, 01 Jan 1970 00:00:00 GMT
`

exports[`packages/template/index.test.js TAP render node > xml template rendering with built-in escape 1`] = `
<a>&lt;d&gt;&amp;&quot;&gt;&lt;&apos;&lt;/d&gt;</a>
`

exports[`packages/template/index.test.js TAP render node > xml template rendering with malicious variable 1`] = `
<a>&lt;d&gt;&amp;&quot;&gt;&lt;&apos;&lt;/d&gt;</a>
`

exports[`packages/template/index.test.js TAP render node > xml template rendering with variable and function (epoch + 1 second) 1`] = `
UTC time: &lt;xml&gt;Thu, 01 Jan 1970 00:00:01 GMT&lt;/xml&gt;
`

exports[`packages/template/index.test.js TAP render node > xml template rendering with variable and function (epoch) 1`] = `
UTC time: &lt;xml&gt;Thu, 01 Jan 1970 00:00:00 GMT&lt;/xml&gt;
`

exports[`packages/template/index.test.js TAP render node > xml template with iterator 1`] = `
<a>
  <item>1</item>
  <item>&quot;2&quot;</item>
  <item>&lt;3&gt;</item>
</a>
`
