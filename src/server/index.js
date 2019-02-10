const path = require('path');

const portscanner = require('portscanner');
const httpServer = require('http-server');

const { SERVER_PORT } = require('../shared/constants');
const mediator = require('./mediator');
const sourceWatcher = require('./source-watcher');

const setup = (
  { projectNameAlias, projectDir, entryPoint, webpackConfigPath, clientPort, astParserFallback },
  isDev
) => {
  const PORT_IN_USE = 'open';
  const HOST = '127.0.0.1';

  Promise.all([
    portscanner.checkPortStatus(clientPort, HOST).then(status => {
      if (status !== PORT_IN_USE) {
        /**
         * socket+http server for data exchange between browser and source servers
         */
        mediator.run({ port: SERVER_PORT, clientPort });
      }
    }),
    portscanner.checkPortStatus(clientPort, HOST).then(status => {
      if (status !== PORT_IN_USE) {
        /**
         * http server to host "codecrumbs" client source for browser
         */
        httpServer
          .createServer({
            root: path.resolve(__dirname, '../public/dist/local'),
            cache: isDev ? -1 : 3600
          })
          .listen(clientPort, HOST, () => {
            console.log(`"Codecrumbs" client is served on http://localhost:${clientPort}`);
          });
      }
    })
  ]).then(() => {
    /**
     * source server instance (one per source code project)
     */
    sourceWatcher.run(
      {
        mediatorEndPoint: `${HOST}:${SERVER_PORT}`,
        namespace: `source-project-${Date.now()}`,
        projectName: `project:${projectNameAlias || projectDir}`
      },
      {
        projectDir,
        entryPoint,
        webpackConfigPath,
        astParserFallback
      }
    );
  });
};

module.exports = {
  setup
};
