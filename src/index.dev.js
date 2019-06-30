const server = require('../src/server');

const namespaceOne = {
  projectNameAlias: 'todo-example-client',
  projectDir: `example-project/src-client`,
  entryPoint: `example-project/src-client/index.js`,
  webpackConfigPath: `example-project/webpack.config.js`,
  clientPort: 2018
};

const namespaceTwo = {
  projectNameAlias: 'todo-example-server',
  projectDir: `example-project/src-server`,
  entryPoint: `example-project/src-server/index.py`,
  clientPort: 2018
};

const namespaceTypeScriptExample = {
  projectNameAlias: 'ts-example-server',
  projectDir: `example-project/src-typescript`,
  entryPoint: `example-project/src-typescript/index.tsx`,
  tsConfigPath: `example-project/src-typescript/tsConfig.json`,
  clientPort: 2018
};

const namespaceDebug = {
  projectNameAlias: 'debug',
  projectDir: `example-project/debug`,
  entryPoint: `example-project/debug/index.js`,
  clientPort: 2018,
  excludeDir: 'example-project/debug/x1,example-project/debug/x2/x'
};

const namespaceLanguageTest = {
  projectDir: `example-project/languages`,
  entryPoint: `example-project/languages/ruby-lang.rb`,
  clientPort: 2018
};

const args = process.argv.slice(2);
const namespaces = {
  two: namespaceTwo,
  ts: namespaceTypeScriptExample
};
const namespace = namespaces[args[0]] !== undefined ? namespaces[args[0]] : namespaceOne;
server.setup(namespace, { isDev: true });
