const mergeWith = require('lodash.mergewith');
const equals = require('ut-function.equals');
const mergeHandlers = {
    combine(targetVal, sourceVal) {
        return targetVal
            .concat(sourceVal)
            .filter((value, index, arr) => {
                return value && arr.findIndex(x => equals(x, value)) === index;
            });
    },
    override(targetVal, sourceVal) {
        return sourceVal;
    },
    index() { // lodash.merge default merge strategy

    }
};

const merge = (objects = [], {
    mergeStrategies = {},
    convert = false
} = {}) => {
    const stack = [];
    const keepStack = typeof mergeStrategies === 'object' && Object.keys(mergeStrategies).length > 0;
    const getMergeHandler = fallbackStrategy => {
        if (!keepStack) return mergeHandlers[fallbackStrategy];
        const path = stack[stack.length - 1].path.join('.');
        return mergeHandlers[mergeStrategies[path] || fallbackStrategy];
    };

    return mergeWith(...objects, (targetVal, sourceVal, key, target, source) => {
        if (keepStack) { // avoid looping every time in case it is not needed
            while (true) {
                if (!stack.length) stack.push({source, path: []});
                const prev = stack[stack.length - 1];
                if (source === prev.source) {
                    stack.push({source: sourceVal, path: prev.path.concat(key)});
                    break;
                }
                stack.pop();
            }
        }

        if (Array.isArray(targetVal) && sourceVal) {
            if (Array.isArray(sourceVal)) return getMergeHandler('override')(targetVal, sourceVal);
            if (sourceVal instanceof Set) return getMergeHandler('combine')(targetVal, Array.from(sourceVal));
        }

        if (convert && typeof sourceVal === 'string') {
            switch (sourceVal) {
                case 'true':
                    return true;
                case 'false':
                    return false;
                case 'null':
                    return null;
                default:
                    const float = parseFloat(sourceVal);
                    if (!isNaN(float) && (float + '') === sourceVal) return float;
            }
        }
    });
};

module.exports = (objects, options, ...rest) => {
    if (Array.isArray(objects) && !Array.isArray(options)) return merge(objects, options);
    return merge([objects, options, ...rest]);
};
