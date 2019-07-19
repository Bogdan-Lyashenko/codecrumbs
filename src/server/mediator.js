const WebSocketServer = require('websocket').server;
const http = require('http');

const { SOCKET_MSG_MAX_SIZE } = require('./config');
const logger = require('./utils/logger');
const { SOCKET_MESSAGE_TYPE } = require('./shared-constants');

const connectedJSON = JSON.stringify({
  type: SOCKET_MESSAGE_TYPE.CLIENT_CONNECTED
})

// instances should run on many ports but then send data to mediator and mediator to client
const run = ({ port, clientPort }) => {
  const httpServer = http.createServer();

  httpServer.listen(port, () => logger.info(`+ started: mediator server, listening: ${port}`));

  let clientInstance = null;
  const sendToClient = event => clientInstance && clientInstance.sendUTF(event);
  const sourceWatcherInstances = [];
  const sendToSourceWatchers = event => sourceWatcherInstances.forEach(l => l.sendUTF(event));

  const webSocketServer = new WebSocketServer({
    httpServer,
    maxReceivedFrameSize: SOCKET_MSG_MAX_SIZE,
    maxReceivedMessageSize: SOCKET_MSG_MAX_SIZE
  });

  webSocketServer.on('request', request => {
    const connection = request.accept(null, request.origin);
    const isClient = request.origin && request.origin.includes(`:${clientPort}`);

    if (isClient) {
      clientInstance = connection;
      logger.info('> browser client connected');
      sendToSourceWatchers(connectedJSON);
    } else {
      sourceWatcherInstances.push(connection);
      initWatcherIfClientExist(client, connection)
    }

    connection.on('message', ({ utf8Data }) => {
      const sendAnswer = isClient ? sendToSourceWatchers : sendToClient;
      sendAnswer(utf8Data);
    });

    connection.on('close', () => {
      const sourceWatcherIndex = sourceWatcherInstances.findIndex(watcher => !watcher.connected);
      if (sourceWatcherIndex !== -1) {
        sourceWatcherInstances.splice(sourceWatcherIndex, 1);
      }
    });
  });
};

function initWatcherIfClientExist (client, connection) {
  if (client) {
    connection.sendUTF(connectedJSON)
  }
}

module.exports = {
  run
};
