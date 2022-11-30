const tap = require('tap');
const transform = require('./');
const {data, config, result} = require('./testData.json');
const transformedData = transform(data, config);

tap.same(transformedData['General Info']['First name'], result['General Info']['First name'], 'Transformed successfully');
