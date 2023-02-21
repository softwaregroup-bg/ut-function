module.exports = function table(params, {maxWidth = 190, maxColWidth = 20} = {}) {
    let name, rows;
    if (Array.isArray(params)) {
        rows = params;
        name = '';
    } else {
        name = params?.name;
        rows = params?.rows;
    }
    const widths = rows.reduce((prev, row) => {
        Object.entries(row).forEach(([name, value]) => {
            const length = Math.max(value !== undefined ? JSON.stringify(value).length + 3 : 0, name.length + 3);
            prev[name] = prev[name] && (prev[name] > length) ? prev[name] : length;
        });
        return prev;
    }, {});
    const total = () => Object.values(widths).reduce((prev, current) => prev + current, 1);
    while (total() > maxWidth && Object.values(widths).some(value => value > maxColWidth)) {
        const [long] = Object.entries(widths).reverse().find(([, value]) => value > maxColWidth);
        if (long) widths[long] = maxColWidth; else break;
    }
    let width = 1;
    const columns = Object.entries(widths).map(([name, value]) => {
        if (width + value <= maxWidth) {
            width += value;
            return [name, value];
        } else return false;
    }).filter(Boolean);
    const trim = (value, length) => {
        if (value == null) return value;
        const result = JSON.stringify(value);
        return result.length > length - 3 ? String(value).substring(0, length - 6) + '…' : value;
    };
    process.stdout.clearLine(0);
    name && console.log(name); // eslint-disable-line no-console
    console.table(rows.map(row => Object.fromEntries(columns.map(([name, length]) => // eslint-disable-line no-console
        (name in row) && [name, trim(row[name], length)]
    ).filter(Boolean))));
};
