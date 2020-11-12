const fs = require('fs');
const path = require('path');
const Boom = require('boom');
const Http = require('http');

exports.register = function(server, captureOptions) {
    let counter = 0;
    server.ext('onPreResponse', (request, h) => {
        counter++;
        let fn = Date.now() + '-' + ('0000' + counter).substr(-4) + '.http';
        const method = request.headers['x-envoy-decorator-operation'] || request.raw.req.method;
        if (captureOptions && captureOptions.name) fn = captureOptions.name + (method ? '-' + method.replace('/', '-') : '') + '-' + fn;
        if (captureOptions && captureOptions.path) {
            fn = path.resolve(captureOptions.path, fn);
        }
        const req = `### request\r\n${request.raw.req.method} ${request.raw.req.url} HTTP/${request.raw.req.httpVersion}\r\n`;
        fs.writeFileSync(fn, req + request.raw.req.rawHeaders.map((h, i) => (i % 2) ? h + '\r\n' : h + ': ').join('') + '\r\n', {flag: 'ax'});
        if (request.payload) fs.writeFileSync(fn, request.payload, {flag: 'a'});
        let headers = true;
        if (Boom.isBoom(request.response)) {
            const responseHeaders = request.response.output.headers;
            headers = false;
            fs.writeFileSync(fn, `\r\n\r\n### response\r\nHTTP/${request.raw.req.httpVersion} ${request.response.output.statusCode}\r\n` +
                Object.entries(responseHeaders).map(([name, value]) => `${name}: ${value}\r\n`).join('') + '\r\n' +
                JSON.stringify({
                    statusCode: request.response.output.statusCode,
                    error: Http.STATUS_CODES[request.response.output.statusCode],
                    message: request.response.message
                })
            , {flag: 'a'});
        } else {
            request.response.events.on('peek', (chunk) => {
                if (headers) {
                    const responseHeaders = request.raw.res.getHeaders();
                    headers = false;
                    fs.writeFileSync(fn, `\r\n\r\n### response\r\nHTTP/${request.raw.req.httpVersion} ${request.response.statusCode}\r\n` +
                        Object.entries(responseHeaders).map(([name, value]) => `${name}: ${value}\r\n`).join('') + '\r\n'
                    , {flag: 'a'});
                }
                fs.writeFileSync(fn, chunk, {flag: 'a'});
            });
        }
        return h.continue;
    });
};

exports.name = 'ut-function.capture-hapi';
