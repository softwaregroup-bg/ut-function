# ut-function.cert

Producing ready to be used object with loaded TLS certificate files from filepaths

## Installation

```sh
npm i ut-function.cert
```

## Usage examples

```js
const config = {
    tls: {
        cert: './the-cert.crt',
        ca: './the-ca.crt'
    }
};
const result = cert(config);
```
