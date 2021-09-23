const cert = require('.');
const tap = require('tap');

tap.equal(cert(), undefined, 'no arguments returns undefined');
tap.equal(cert({}), undefined, 'no arguments.tls returns undefined');

const mockConfig = {
    tls: {}
};
const result = cert(mockConfig);
tap.equal(result?.minVersion, 'TLSv1.3', 'minVersion property match');
tap.equal(Object.entries(result).length, 1, 'only 1 key returned when no additional properties');

const mockConfigAdditionalProperties = {
    tls: {
        passphrase: 'foobarphrase'
    }
};
const resultWithAdditionalProperties = cert(mockConfigAdditionalProperties);
tap.equal(resultWithAdditionalProperties?.minVersion, 'TLSv1.3', 'minVersion property match');
tap.equal(Object.entries(resultWithAdditionalProperties).length, 2, '2 keys returned when additional properties are passed');
tap.equal(resultWithAdditionalProperties?.passphrase, mockConfigAdditionalProperties.tls.passphrase, 'the same additional prop is in the result');
