const WebSocketServer = require('websocket').server;
const http = require('http');

// instances should run on many ports but then send data to mediator and mediator to client
const run = ({ port }) => {
  const httpServer = http.createServer((request, response) => {
    console.log('http call to mediator', request.url);
  });

  httpServer.listen(port, () => {
    console.log(`Mediator server is listening: ${port}.`);
  });

  const webSocketServer = new WebSocketServer({ httpServer });
  webSocketServer.on('request', request => {
    const connection = request.accept(null, request.origin);

    console.log('some client connects to mediator');

    connection.on('message', message => {
      if (message.type === 'utf8') {
        //console.log('mediator received msg', message.utf8Data)
      }
    });

    connection.on('close', connection => {
      // close user connection
    });

    connection.sendUTF(
      JSON.stringify({
        type: 'connected!'
      })
    );
  });
};

module.exports = {
  run
};
