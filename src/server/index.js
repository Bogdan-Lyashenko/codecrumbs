const WebSocketServer = require('websocket').server;
const http = require('http');
const api = require('./api/');
const projectSourceWatcher = require('./project-source/');
const { SERVER_PORT, SOCKET_EVENT_TYPE } = require('../shared/constants');

const run = ({ projectDir, entryFile, webpackConfigFile }) => {
  const httpServer = http.createServer(api.handleRequests(projectDir));
  httpServer.listen(SERVER_PORT, () => {
    console.log(`API server is listening: ${SERVER_PORT}.`);
  });

  const webSocketServer = new WebSocketServer({ httpServer });
  webSocketServer.on('request', request => {
    const connection = request.accept(null, request.origin);

    projectSourceWatcher.subscribeOnChange(projectDir, entryFile, webpackConfigFile, {
      onInit: data =>
        connection.sendUTF(
          JSON.stringify({
            type: SOCKET_EVENT_TYPE.INIT_SOURCE_FILES_SYNC,
            data
          })
        ),
      onChange: data =>
        connection.sendUTF(
          JSON.stringify({
            type: SOCKET_EVENT_TYPE.UPDATE_SOURCE_FILE_SYNC,
            data
          })
        )
    });
  });
};

module.exports = {
  run
};
