const server = require('../src/server');

const projectNameAlias = 'react-todo-example';
const projectDir = `example-project/src`;
const entryPoint = `example-project/src/index.js`;
const webpackConfigPath = `example-project/webpack.config.js`;
const clientPort = 2018;

const isDev = true;
server.setup({ projectNameAlias, projectDir, entryPoint, webpackConfigPath, clientPort }, isDev);
