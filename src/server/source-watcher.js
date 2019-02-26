const WebSocketClient = require('websocket').client;

const { SOCKET_MSG_MAX_SIZE } = require('./config');
const logger = require('./utils/logger');
const { parseFiles } = require('./api/');
const { SOCKET_MESSAGE_TYPE } = require('../shared/constants');

const projectSourceWatcher = require('./project-source/');
const { detectLanguage } = require('./code-parse/language');

const run = (
  { mediatorEndPoint, namespace, projectName },
  { projectDir, entryPoint, webpackConfigPath, astParserFallback }
) => {
  const { language, extensions: fileExtensions } = detectLanguage(entryPoint, astParserFallback);

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
      `setup: dir - ${projectDir}, entry point - ${entryPoint}`
    );

    connection.on('message', ({ utf8Data }) => {
      const message = JSON.parse(utf8Data);

      switch (message.type) {
        case SOCKET_MESSAGE_TYPE.CLIENT_CONNECTED:
          projectSourceWatcher.subscribeOnChange(
            namespace,
            { projectName, projectDir, entryPoint, webpackConfigPath, language, fileExtensions },
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
            parseFiles(message.data, projectDir, language).then(files =>
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
