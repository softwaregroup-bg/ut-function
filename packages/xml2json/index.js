const xmlParser = require('./xmlParser').parse;

module.exports = (xmlTemplate, maxDepth = 50) => {
    return async(xml, xmlTemplatePath) => {
        const result = await xmlParser(xmlTemplatePath, xml);
        return typeof result === 'object' ? result : JSON.parse(result);
    };
};
