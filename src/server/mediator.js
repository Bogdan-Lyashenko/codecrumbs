const WebSocketServer = require('websocket').server;
const http = require('http');

// instances should run on many ports but then send data to mediator and mediator to client
const run = ({ port, clientPort }) => {
  const httpServer = http.createServer((request, response) => {
    // TODO: refactor this to work with sockets instead
  });

  httpServer.listen(port, () => console.log(`Mediator server is listening: ${port}.`));

  let clientInstance = null;
  const sendToClient = event => clientInstance && clientInstance.sendUTF(event);
  const sourceWatcherInstances = [];
  const sendToSourceWatchers = event => sourceWatcherInstances.forEach(l => l.sendUTF(event));

  const webSocketServer = new WebSocketServer({ httpServer });
  webSocketServer.on('request', request => {
    const connection = request.accept(null, request.origin);
    const isClient = request.origin && request.origin.includes(`:${clientPort}`);

    if (isClient) {
      clientInstance = connection;
      console.log('Client connected. Sending source...');
      sendToSourceWatchers(
        JSON.stringify({
          type: 'CLIENT_CONNECTED'
        })
      );
    } else {
      sourceWatcherInstances.push(connection);
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

module.exports = {
  run
};
