const fs = require('fs');
const path = require('path');
const through2 = require('through2');

module.exports = function(request, captureOptions) {
    let counter = 0;
    return function() {
        counter++;
        let fn = Date.now() + '-' + ('0000' + counter).substr(-4) + '.http';
        return request(...arguments).on('response', response => {
            let method = response.request.headers['x-envoy-decorator-operation'] || response.headers['x-envoy-decorator-operation'] || '';
            fn = method + '-' + Date.now() + '-' + ('0000' + counter).substr(-4) + '.http';
            if (captureOptions && captureOptions.name) fn = captureOptions.name + '-' + fn;
            if (captureOptions && captureOptions.path) {
                fn = path.resolve(captureOptions.path, fn);
            }
            let req = `### request\r\n${response.request.method.toUpperCase()} ${response.request.uri.href} HTTP/${response.httpVersion}\r\n`;
            fs.writeFileSync(fn, req + Object.entries(response.request.headers).map(([name, value]) => `${name}: ${value}\r\n`).join(''), {flag: 'ax'});
            if (response.request.body) fs.writeFileSync(fn, '\r\n' + response.request.body, {flag: 'a'});
            fs.writeFileSync(fn, `\r\n\r\n### response\r\nHTTP/${response.httpVersion} ${response.statusCode}${response.statusMessage ? ' ' + response.statusMessage : ''}\r\n` +
                response.rawHeaders.map((h, i) => (i % 2) ? h + '\r\n' : h + ': ').join('') + '\r\n'
            , {flag: 'a'});
        }).pipe(through2((chunk, enc, callback) => {
            fs.writeFileSync(fn, chunk, {flag: 'a'});
            callback(undefined, chunk);
        }));
    };
};
