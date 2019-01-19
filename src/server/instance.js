// test windows https://github.com/theturtle32/WebSocket-Node#note-for-windows-users
const WebSocketClient = require('websocket').client;
const api = require('./api/');
const projectSourceWatcher = require('./project-source/');
const { SOCKET_EVENT_TYPE } = require('../shared/constants');

// instances should run on many ports but then send data to mediator and mediator to client
const run = (mediatorEndPoint, { projectDir, entryFile, webpackConfigFile, clientPort }) => {
  const webSocketClient = new WebSocketClient();

  webSocketClient.on('connectFailed', error => {
    console.log('Connect Error: ' + error);
  });

  webSocketClient.on('connect', connection => {
    console.log(`Source server created for: ${projectDir}, entry point: ${entryFile}`);

    connection.on('message', message => {
      if (message.type === 'utf8') {
        //console.log('mediator received msg', message.utf8Data)
      }
    });

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

  webSocketClient.connect(`ws://${mediatorEndPoint}/`);
};

module.exports = {
  run
};
