const path = require('path');
const fs = require('fs');
require('glob')
    .sync('packages/*')
    .forEach(name => {
        const link = path.resolve('../ut-function.' + path.basename(name));
        if (!fs.existsSync(link)) fs.symlinkSync(path.resolve(name), link, 'dir');
    });
