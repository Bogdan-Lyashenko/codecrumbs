const fs = require('fs');

const read = (file, format) => {
    return new Promise((resolve, reject) => {
        const params = [
            file,
            format,
            (err, data) => {
                if (err) {
                    return reject(err);
                }

                return resolve(data);
            }
        ];

        fs.readFile.apply(fs, params.filter(p => p));
    });
};

module.exports = {
    read
};
