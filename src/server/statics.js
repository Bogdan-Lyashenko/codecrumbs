const fs = require('fs');

const PATH = {
    PUBLIC: 'public/',
    PAGE: 'index.html',
    BUNDLE: 'bundle.js'
};

const responseWithFile = function(options, response) {
    fs.readFile(options.file, function(err, data) {
        response.writeHead(200, {
            'Content-Type': options.contentType,
            'Content-Length': data.length
        });

        response.write(data);
        response.end();
    });
};

const requestHandler = (request, response) => {
    switch (request.url) {
        case '/':
            return responseWithFile(
                {
                    file: PATH.PUBLIC + PATH.PAGE,
                    contentType: 'text/html'
                },
                response
            );
        case '/' + PATH.BUNDLE:
            return responseWithFile(
                {
                    file: PATH.PUBLIC + PATH.BUNDLE,
                    contentType: 'text/javascript'
                },
                response
            );

        default:
            return response.end();
    }
};

module.exports = {
    requestHandler
};
