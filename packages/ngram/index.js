const WORDS = /(\p{Letter}|\d)+/gu;
const LETTERS = /\p{Letter}|\d/gu;
module.exports = (str, {
    min = 3,
    max = 3,
    depth
} = {}) => {
    const unique = new Set();
    (str.match(WORDS) || []).forEach(word => {
        const letters = word.match(LETTERS);
        if (letters) {
            const len = letters.length;
            const maxDepth = depth || len - min;
            if (min >= len) {
                unique.add(letters.join(''));
            } else {
                for (let i = 0; i <= maxDepth && i <= len; i++) {
                    for (let j = min; j <= max && i + j <= len; j++) {
                        unique.add(letters.slice(i, i + j).join(''));
                    }
                }
            }
        }
    });
    return unique;
};
