const WebSocketServer = require('websocket').server;
const http = require('http');
const statics = require('./statics');
const projectSourceWatcher = require('./project-source-watcher');

const PORT = 2018;
const PROJECT_DIR = 'example-project'; //get as param to server script

const httpServer = http.createServer(statics.requestHandler);
httpServer.listen(PORT, () => {
    console.log(new Date() + `Server is listening localhost: ${PORT}.`);
});

const webSocketServer = new WebSocketServer({ httpServer });
webSocketServer.on('request', request => {
    const connection = request.accept(null, request.origin);

    projectSourceWatcher.subscribeOnChange(PROJECT_DIR, body =>
        connection.sendUTF(
            JSON.stringify({
                type: 'sync',
                data: { projectDir: PROJECT_DIR, body }
            })
        )
    );
});
