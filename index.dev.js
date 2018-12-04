const httpServer = require('http-server');
const apiServer = require('./src/server');

const projectDir = `example-project/src`;
const entryFile = `example-project/src/index.js`;
const webpackConfigFile = `example-project/webpack.config.js`;
const clientPort = 2018;

apiServer.run({ projectDir, entryFile, webpackConfigFile, clientPort });
httpServer
  .createServer({ root: './src/public/dist', cache: -1 })
  .listen(clientPort, '127.0.0.1', () => {
    console.log(`"Codecrumbs" is served on http://localhost:${clientPort}`);
  });
