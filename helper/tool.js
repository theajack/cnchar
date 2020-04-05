let fs = require('fs');
module.exports = {
    write: function (file, txt, cb) {
        fs.writeFile(file, txt, 'utf8', (err) => {
            if (err) throw err;
            if (cb)cb();
        });
    }
};