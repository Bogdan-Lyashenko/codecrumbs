const WebSocketServer = require('websocket').server;
const http = require('http');
const api = require('./api/');
const projectSourceWatcher = require('./project-source-watcher');
const { SERVER_PORT, SOCKET_EVENT_TYPE } = require('../shared/constants');

// TODO: should come as params
const ROOT_DIR = 'example-project';
const PROJECT_DIR = `${ROOT_DIR}/src`; //, src/public/js, example-project, get as param to server script
const ENTRY = `${PROJECT_DIR}/index.js`; //, index.js, get as param to server script
const WEBPACK_CONFIG_FILE_PATH = `${ROOT_DIR}/webpack.config.js`;
// -- end params --

const httpServer = http.createServer(api.handleRequests(PROJECT_DIR));
httpServer.listen(SERVER_PORT, () => {
  console.log(new Date() + `Server is listening localhost: ${SERVER_PORT}.`);
});

const webSocketServer = new WebSocketServer({ httpServer });
webSocketServer.on('request', request => {
  const connection = request.accept(null, request.origin);

  projectSourceWatcher.subscribeOnChange(PROJECT_DIR, ENTRY, WEBPACK_CONFIG_FILE_PATH, {
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
