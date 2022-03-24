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
                    const path = (typeof value.match === 'function') && value.match(/^\${([^[]+)(\[.?\])?}$/);
                    if (path) {
                        switch (path[2]) { // modifier
                            case '[]':
                                set(prev, path[1], '$' + `{ut.list(xml, '${name}')?.join(', ')}`);
                                break;
                            default:
                                set(prev, path[1], '$' + `{ut.get(xml, '${name}')}`);
                        }
                    };
                    return prev;
                }, {})
        ), ['xml'], {
            get,
            list(obj, path) {
                return path
                    .split('.')
                    .reduce((o, p) => {
                        return Array.isArray(o?.[p])
                            ? o[p].reduce((all, r) => {
                                return typeof r === 'object'
                                    ? Object.entries(r)
                                        .reduce((all, [k, v]) => {
                                            if (!all[k]) all[k] = [];
                                            all[k].push(v);
                                            return all;
                                        }, Array.isArray(all) ? {} : all)
                                    : [...all, r];
                            }, [])
                            : o?.[p];
                    }, obj);
            }
        }))();
    return async(xml, json) => {
        const result = (await fn)(typeof xml === 'string' ? await xmlParser.parseStringPromise(xml) : await xml);
        return json ? result : JSON.parse(result);
    };
};
