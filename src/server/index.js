const portscanner = require('portscanner');
const httpServer = require('http-server');

const { SERVER_PORT } = require('../shared/constants');
const mediator = require('./mediator');
const sourceServer = require('./instance');

const PORT_IN_USE = 'open';
const HOST = '127.0.0.1';

const setup = ({ projectDir, entryFile, webpackConfigFile, clientPort }, isDev) => {
  Promise.all([
    portscanner.checkPortStatus(clientPort, HOST).then(status => {
      if (status !== PORT_IN_USE) {
        /**
         * socket+http server for data exchange between browser and source servers
         */
        mediator.run({ port: SERVER_PORT });
      }
    }),
    portscanner.checkPortStatus(clientPort, HOST).then(status => {
      if (status !== PORT_IN_USE) {
        /**
         * http server to host "codecrumbs" client source for browser
         */
        httpServer
          .createServer({ root: './src/public/dist/local', cache: isDev ? -1 : 3600 })
          .listen(clientPort, HOST, () => {
            console.log(`"Codecrumbs" client is served on http://localhost:${clientPort}`);
          });
      }
    })
  ]).then(() => {
    //sourceServer instances are same socket "client" as browser client
    //to communicate they need to send message to all, and filter by type

    /**
     * source server instance (one per source code project)
     */
    sourceServer.run(`${HOST}:${SERVER_PORT}`, {
      projectDir,
      entryFile,
      webpackConfigFile,
      clientPort
    });
  });
};

module.exports = {
  setup
};
