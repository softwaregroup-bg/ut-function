module.exports = (data, config, sep = ',') => {
    const result = data || {};
    function getSigleValue(key, obj) {
        const keys = key.split(sep);
        const first = obj[keys.shift()];
        if (keys.length !== 0 && typeof first === 'object') {
            const value = Array.isArray(first) ? first[0] : first;
            return getSigleValue(keys.join(sep), value || {});
        } else {
            return first;
        }
    }
    function getValueByKeys(keys = [], obj) {
        const value = obj[keys.shift()];
        if (!obj) { return null; };
        if (keys.length) {
            return getValueByKeys(keys, value);
        } else {
            return value;
        }
    }
    const mappedData = {};
    for (const tabKey in config) {
        let obj = {};
        const keys = config[tabKey].keys; const isSingle = config[tabKey].single; const isCond = config[tabKey].conditional;
        const name = config[tabKey].name; const keyValue = config[tabKey].keyValue;
        if (isSingle) {
            for (let i = 0; i < keys.length; i++) {
                const value = getSigleValue(keys[i].key, result);
                const transform = keys[i].transform;
                obj[keys[i].title] = transform ? transform(value) : value;
            }
        } else {
            obj = [];
            const objectKeys = (keys || []).map(function(kt) {
                return kt.key.split(sep).slice(1).join(sep);
            });
            const arr = objectKeys.length > 0 ? (result[keys[0].key.split(sep)[0]] || []) : [];
            let newArray;
            if (isCond) {
                newArray = arr.filter((detail) => { return detail[name] === keyValue; });
            } else {
                newArray = arr;
            }
            newArray.map(function(current) {
                const iobj = {};
                objectKeys.forEach(function(k, idx) {
                    const value = getValueByKeys(k.split(sep), current);
                    const transform = keys[idx].transform;
                    iobj[keys[idx].title] = transform ? transform(value) : value;
                });
                obj.push(iobj);
            });
        };
        mappedData[tabKey] = obj;
    }
    return mappedData;
};
