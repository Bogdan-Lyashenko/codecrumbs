const path = require('path');
const fs = require('fs');

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

  validateProjectPath(projectDir, entryPoint);

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
        projectDir: alignPlatformPath(projectDir),
        entryPoint: alignPlatformPath(entryPoint),
        webpackConfigPath: alignPlatformPath(webpackConfigPath),
        astParserFallback
      }
    );
  });
};

const alignPlatformPath = (p = '') => p.replace(/\/$/, '').replace(/\//g, path.sep);

const validateProjectPath = (pDir, ePoint) => {
  const paths = [];
  if (!fs.existsSync(alignPlatformPath(pDir))) {
    paths.push(pDir);
  }

  if (!fs.existsSync(alignPlatformPath(ePoint))) {
    paths.push(ePoint);
  }

  if (paths.length) {
    console.error(`Please enter valid path, next path does not exist: ${paths.join(', ')}`);
    process.exit(1);
  }
};

module.exports = {
  setup
};
