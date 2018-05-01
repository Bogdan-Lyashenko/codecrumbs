const WebSocketServer = require('websocket').server;
const http = require('http');
const statics = require('./server/statics');
const sockets = require('./server/sockets');

const PORT = 2018;

const httpServer = http.createServer(statics.requestHandler);
httpServer.listen(PORT, () => {
    console.log(new Date() + `Server is listening localhost: ${PORT}.`);
});

const webSocketServer = new WebSocketServer({ httpServer });
webSocketServer.on('request', sockets.requestHandler);
