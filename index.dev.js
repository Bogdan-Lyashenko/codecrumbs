const httpServer = require('http-server');
const apiServer = require('./src/server');

const projectDir = `example-project/src`;
const entryFile = `example-project/src/index.js`;
const webpackConfigFile = `example-project/webpack.config.js`;

apiServer.run({ projectDir, entryFile, webpackConfigFile });
httpServer.createServer({ root: './src/public/dist', cache: -1 }).listen(2018, '127.0.0.1', () => {
  console.log('"Codecrumbs" is served on port:2018. Go to http://localhost:2018. Enjoy ;)');
});
