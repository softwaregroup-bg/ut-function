module.exports = (data, maxDepth) => {
    const result = {};
    function recurse(cur, prop, depth) {
        if (!depth) {
            throw new Error('Object exceeds max depth: ' + prop);
        }
        if (Object(cur) !== cur) {
            result[prop] = cur;
        } else if (Array.isArray(cur) || typeof cur === 'function') {
            result[prop] = cur;
        } else {
            let isEmpty = true;
            Object.keys(cur).forEach(function(p) {
                isEmpty = false;
                recurse(cur[p], prop ? prop + '.' + p : p, depth - 1);
            });
            if (isEmpty && prop) {
                result[prop] = {};
            }
        }
    }
    recurse(data, '', maxDepth);
    return result;
};
