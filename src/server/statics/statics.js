const file = require('../utils/file');

const PATH = {
    PUBLIC: 'src/public/dist/',
    PAGE: 'index.html'
};

const AVAILABLE_RESOURCES = ['bundle.js', 'bundle.js.map'];

const responseWithFile = function(options, response) {
    file.read(options.file).then(data => {
        response.writeHead(200, {
            'Content-Type': options.contentType,
            'Content-Length': data.length
        });

        response.write(data);
        response.end();
    });
};

const requestHandler = (url, response) => {
    if (!url) {
        return responseWithFile(
            {
                file: PATH.PUBLIC + PATH.PAGE,
                contentType: 'text/html'
            },
            response
        );
    }

    if (AVAILABLE_RESOURCES.indexOf(url) !== -1) {
        return responseWithFile(
            {
                file: PATH.PUBLIC + url,
                contentType: 'text/javascript'
            },
            response
        );
    }

    return response.end();
};

module.exports = {
    requestHandler
};
