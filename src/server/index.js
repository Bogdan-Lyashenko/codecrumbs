const path = require('path');
const fs = require('fs');

const portscanner = require('portscanner');
const httpServer = require('http-server');

const logger = require('./utils/logger');
const { SERVER_PORT } = require('./shared-constants');
const mediator = require('./mediator');
const sourceWatcher = require('./source-watcher');

const setup = (options, devOptions) => {
  logger.fun(`>\n> Codecrumbs magic begins!\n>`);
  logger.info(`> started with options: ${JSON.stringify(options)}`);

  const {
    projectNameAlias,
    projectDir,
    entryPoint,
    webpackConfigPath,
    tsConfigPath,
    clientPort,
    excludeDir,
    ideCmd
  } = options;

  const PORT_IN_USE = 'open';
  const HOST = '127.0.0.1';

  validateProjectPath(projectDir, entryPoint);

  Promise.all([
    portscanner.checkPortStatus(clientPort, HOST).then(status => {
      if (status !== PORT_IN_USE) {
        /**
         * socket+http server for data exchange between browser and source servers
         */
        logger.log(`- starting: mediator server `);
        mediator.run({ port: SERVER_PORT, clientPort });
      }
    }),
    portscanner.checkPortStatus(clientPort, HOST).then(status => {
      if (status !== PORT_IN_USE) {
        /**
         * http server to host "codecrumbs" client source for browser
         */
        logger.log(`- starting: http server for client assets`);
        httpServer
          .createServer({
            root: devOptions.httpServerRoot || path.resolve(__dirname, '../public/dist/local'),
            cache: devOptions.isDev ? -1 : 3600
          })
          .listen(clientPort, HOST, () => {
            logger.info(
              `+ started: http server for client assets,`,
              ` codecrumbs client is served on http://localhost:${clientPort}`
            );
          });
      }
    })
  ])
    .then(() => {
      /**
       * source server instance (one per source code project)
       */
      logger.log(`- starting: source watcher`);
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
          tsConfigPath: alignPlatformPath(tsConfigPath),
          excludeDir: (excludeDir ? excludeDir.split(',') : []).map(alignPlatformPath),
          ideCmd
        }
      );
    })
    .catch(e => {
      logger.error(`index server setup failed: ${logger.getText(e)}`);
      process.exit(1);
    });
};

const alignPlatformPath = (p = '') =>
  p
    .replace(/^(\.?\/)/, '')
    .replace(/\/$/, '')
    .replace(/\//g, path.sep);

const validateProjectPath = (pDir, ePoint) => {
  const paths = [];
  if (!fs.existsSync(alignPlatformPath(pDir))) {
    paths.push(pDir);
  }

  if (!fs.existsSync(alignPlatformPath(ePoint))) {
    paths.push(ePoint);
  }

  if (paths.length) {
    logger.error(
      `Not valid paths. Please enter valid path, next path does not exist: ${paths.join(', ')}`
    );
    process.exit(1);
  }
};

module.exports = {
  setup
};
