const path = require('path');
const xml2json = require('ut-function.xml2json');
const json2xml = require('ut-function.template');

module.exports = (vfs, dir) => new Promise((resolve, reject) => {
    vfs.readdir(dir, (error, files) => {
        if (error) return reject(error);
        resolve(() => files.reduce((prev, file) => {
            const match = file.match(/^(.*)\.(parse|render)\.xml$/);
            if (match) {
                const template = vfs.readFileSync(path.join(dir, file)).toString();
                prev[match[1]] = {
                    parse: ({payload}) => xml2json(template)(payload.toString()),
                    render: (params, $meta) => {
                        const result = json2xml(template, ['params'], {}, 'xml')(params);
                        if ($meta?.mtid === 'error') {
                            params.response = result;
                            params.httpResponse = {type: 'application/xml'};
                            return params;
                        } else {
                            if ($meta) $meta.httpResponse = {type: 'application/xml'};
                            return result;
                        }
                    }
                }[match[2]];
            }
            return prev;
        }, {}));
    });
});
