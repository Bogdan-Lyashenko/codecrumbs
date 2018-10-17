const WebSocketServer = require('websocket').server;
const http = require('http');
const statics = require('./statics/statics');
const api = require('./api/api');
const projectSourceWatcher = require('./project-source-watcher');
const SOCKET_EVENT_TYPE = require('../shared/constants').SOCKET_EVENT_TYPE;

const PORT = 2018;
const PROJECT_DIR = 'example-project'; //, src/public/js, example-project, get as param to server script
const ENTRY = `${PROJECT_DIR}/index.js`; //, index.js, get as param to server script

const httpServer = http.createServer((request, response) => {
  const url = request.url.substr(1);

  if (url.startsWith('api/')) {
    return api.requestHandler(url, response);
  }

  statics.requestHandler(url, response);
});

httpServer.listen(PORT, () => {
  console.log(new Date() + `Server is listening localhost: ${PORT}.`);
});

const webSocketServer = new WebSocketServer({ httpServer });
webSocketServer.on('request', request => {
  const connection = request.accept(null, request.origin);

  projectSourceWatcher.subscribeOnChange(PROJECT_DIR, ENTRY, {
    onInit: data =>
      connection.sendUTF(
        JSON.stringify({
          type: SOCKET_EVENT_TYPE.INIT_SOURCE_FILES_SYNC,
          data
        })
      ),
    onChange: data => connection.sendUTF(
      JSON.stringify({
        type: SOCKET_EVENT_TYPE.UPDATE_SOURCE_FILE_SYNC,
        data
      })
    ),
  });
});
