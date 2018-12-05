const url = require('url');
const codeParser = require('../code-parse');

const handleRequests = (projectDir, clientPort) => (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', `http://localhost:${clientPort}`);

  if (request.method === 'GET') {
    const { pathname, query } = url.parse(request.url, true);

    if (pathname === '/api') {
      const { file: itemPath, config: configJson } = query;
      const config = JSON.parse(configJson);

      codeParser
        .parseFile(itemPath, projectDir, {
          attachCode: true,
          parseDependencies: config.parseDependencies
        })
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
