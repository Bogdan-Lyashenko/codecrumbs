const url = require('url');
const codeParser = require('../code-parse');

const handleRequests = projectDir => (request, response) => {
  // TODO: move to config
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:2018');

  if (request.method === 'GET') {
    const { pathname, query } = url.parse(request.url, true);

    if (pathname === '/api') {
      const { file: itemPath } = query;

      codeParser
        .parseFile(itemPath, projectDir, { attachCode: true, parseDependencies: true })
        .then(item => {
          response.writeHead(200, {
            'Content-Type': 'application/json'
          });
          response.write(JSON.stringify(item));
          return response.end();
        });
    }
  }
};

module.exports = {
  handleRequests
};
