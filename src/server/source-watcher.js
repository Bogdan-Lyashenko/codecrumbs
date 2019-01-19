// test windows https://github.com/theturtle32/WebSocket-Node#note-for-windows-users
const WebSocketClient = require('websocket').client;
const api = require('./api/');
const projectSourceWatcher = require('./project-source/');
const { SOCKET_EVENT_TYPE } = require('../shared/constants');

// instances should run on many ports but then send data to mediator and mediator to client
const run = (
  { mediatorEndPoint, sourceProjectId, sourceProjectName },
  { projectDir, entryPoint, webpackConfigPath, clientPort }
) => {
  const webSocketClient = new WebSocketClient();

  webSocketClient.on('connectFailed', error => {
    console.log(`Connect error for ${sourceProjectId}, error: ${error} `);
  });

  webSocketClient.on('connect', connection => {
    console.log(
      `Source watcher: ${sourceProjectId} created for: ${sourceProjectName}; `,
      `setup: dir - ${projectDir}, entry point - ${entryPoint}`
    );

    connection.on('message', ({ utf8Data }) => {
      const message = JSON.parse(utf8Data);

      if (message.type === 'CLIENT_CONNECTED') {
        projectSourceWatcher.subscribeOnChange(
          sourceProjectId,
          { projectDir, entryPoint, webpackConfigPath },
          {
            onInit: data => {
              connection.sendUTF(
                JSON.stringify({
                  type: SOCKET_EVENT_TYPE.INIT_SOURCE_FILES_SYNC,
                  sourceProjectId,
                  sourceProjectName,
                  data
                })
              );
            },
            onChange: data =>
              connection.sendUTF(
                JSON.stringify({
                  type: SOCKET_EVENT_TYPE.UPDATE_SOURCE_FILE_SYNC,
                  sourceProjectId,
                  sourceProjectName,
                  data
                })
              )
          }
        );
      }
    });
  });

  webSocketClient.connect(`ws://${mediatorEndPoint}/`);
};

module.exports = {
  run
};
