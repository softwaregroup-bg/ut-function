const fs = require('fs');

module.exports = function tls(config) {
    if (config && config.tls) {
        return {
            minVersion: 'TLSv1.3',
            ...config.tls,
            ...config.tls.ca && {ca: fs.readFileSync(config.tls.ca)},
            ...config.tls.key && {key: fs.readFileSync(config.tls.key)},
            ...config.tls.cert && {cert: fs.readFileSync(config.tls.cert)},
            ...config.tls.crl && {crl: fs.readFileSync(config.tls.crl)}
        };
    }
};
