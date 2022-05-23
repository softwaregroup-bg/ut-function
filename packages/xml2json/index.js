const flatten = require('ut-function.flatten');
const template = require('ut-function.template');
const set = require('lodash.set');
const get = require('lodash.get');
const xml2js = require('xml2js');
const xmlParser = new xml2js.Parser({
    charkey: 'text',
    mergeAttrs: true,
    explicitArray: false,
    tagNameProcessors: [xml2js.processors.stripPrefix]
});

module.exports = (xmlTemplate, maxDepth = 50) => {
    const fn = (async() => template(
        JSON.stringify(
            Object
                .entries(flatten(await xmlParser.parseStringPromise(xmlTemplate), maxDepth))
                .reduce((prev, [name, value]) => {
                    const path = (typeof value.match === 'function') && value.match(/^\${(.*)}$/);
                    if (path) set(prev, path[1], '$' + `{ut.get(xml, '${name}')}`);
                    return prev;
                }, {})
        ), ['xml'], {get}, 'json'))();
    return async(xml, json) => {
        const result = (await fn)(typeof xml === 'string' ? await xmlParser.parseStringPromise(xml) : await xml);
        return json ? result : JSON.parse(result);
    };
};
