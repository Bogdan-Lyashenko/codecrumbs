const WebSocketClient = require('websocket').client;

const { SOCKET_MSG_MAX_SIZE } = require('./config');
const logger = require('./utils/logger');
const { parseFiles, openFileInEditor } = require('./api/');
const { SOCKET_MESSAGE_TYPE } = require('../shared/constants');

const projectSourceWatcher = require('./project-source/');
const { detectLanguage } = require('./code-parse/language');

const run = (
  { mediatorEndPoint, namespace, projectName },
  { projectDir, entryPoint, webpackConfigPath, tsConfigPath, excludeDir }
) => {
  const { language, extensions: fileExtensions } = detectLanguage(entryPoint);

  const webSocketClient = new WebSocketClient({
    maxReceivedFrameSize: SOCKET_MSG_MAX_SIZE,
    maxReceivedMessageSize: SOCKET_MSG_MAX_SIZE
  });

  webSocketClient.on('connectFailed', error => {
    logger.error(`Connect error for ${namespace}, error: ${error} `);
  });

  webSocketClient.on('connect', connection => {
    logger.info(
      `+ started: source watcher: ${namespace} for: ${projectName}; `,
      `setup: dir - ${projectDir}, entry point - ${entryPoint}`,
      `options: webPackConfig - ${webpackConfigPath}, tsConfig - ${tsConfigPath}`

    );

    connection.on('message', ({ utf8Data }) => {
      const message = JSON.parse(utf8Data);

      switch (message.type) {
        case SOCKET_MESSAGE_TYPE.CLIENT_CONNECTED:
          projectSourceWatcher.subscribeOnChange(
            namespace,
            {
              projectName,
              projectDir,
              entryPoint,
              excludeDir,
              webpackConfigPath,
              tsConfigPath,
              language,
              fileExtensions
            },
            {
              onInit: data => {
                logger.info(`> emit '${SOCKET_MESSAGE_TYPE.SOURCE_INIT_SOURCE_FILES_SYNC}'`);
                connection.sendUTF(
                  JSON.stringify({
                    type: SOCKET_MESSAGE_TYPE.SOURCE_INIT_SOURCE_FILES_SYNC,
                    namespace,
                    data
                  })
                );
              },
              onChange: data =>
                connection.sendUTF(
                  JSON.stringify({
                    type: SOCKET_MESSAGE_TYPE.SOURCE_UPDATE_SOURCE_FILE_SYNC,
                    namespace,
                    data
                  })
                )
            }
          );
          break;

        case SOCKET_MESSAGE_TYPE.CLIENT_REQUEST_FETCH_FILE:
          if (message.namespace === namespace) {
            parseFiles( message.data, {webpackConfigPath, tsConfigPath , projectDir, language}).then(files =>
              connection.sendUTF(
                JSON.stringify({
                  type: SOCKET_MESSAGE_TYPE.SOURCE_RESPONSE_FETCH_FILE,
                  namespace,
                  data: { files }
                })
              )
            );
          }
          break;

        case SOCKET_MESSAGE_TYPE.CLIENT_OPEN_FILE_IN_EDITOR:
          if (message.namespace === namespace) {
            openFileInEditor(message.data);
          }

          break;

        default:
          logger.warn(`Unhandled message: ${message}`);
      }
    });
  });

  webSocketClient.connect(`ws://${mediatorEndPoint}/`);
};

module.exports = {
  run
};
