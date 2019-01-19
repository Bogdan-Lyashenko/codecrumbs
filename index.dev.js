const server = require('./src/server');

const projectDir = `example-project/src`;
const entryFile = `example-project/src/index.js`;
const webpackConfigFile = `example-project/webpack.config.js`;
const clientPort = 2018;

const isDev = true;
server.setup({ projectDir, entryFile, webpackConfigFile, clientPort }, isDev);
