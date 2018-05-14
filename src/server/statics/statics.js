const file = require('../utils/file');
const mime = require('mime-types');
const path = require('path');

const PATH = {
    PUBLIC: 'src/public/dist/',
    PAGE: 'index.html'
};

const responseWithFile = (fileName, response) => {
    file.read(fileName).then(data => {
        response.writeHead(200, {
            'Content-Type': mime.lookup(path.extname(fileName)),
            'Content-Length': data.length
        });

        response.write(data);
        response.end();
    });
};

const requestHandler = (url, response) => {
    return responseWithFile(PATH.PUBLIC + (!url ? PATH.PAGE : url), response);
};

module.exports = {
    requestHandler
};
