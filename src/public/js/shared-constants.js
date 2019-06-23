const CC_NODE_TYPE = 'cc';
const FILE_NODE_TYPE = 'file';
const DIR_NODE_TYPE = 'directory';
const NO_TRAIL_FLOW = '*';

const SOCKET_MESSAGE_TYPE = {
  SOURCE_INIT_SOURCE_FILES_SYNC: 'source.init-source-files-sync',
  SOURCE_UPDATE_SOURCE_FILE_SYNC: 'source.update-source-file-sync',
  SOURCE_RESPONSE_FETCH_FILE: 'source.response-fetch-file',
  CLIENT_CONNECTED: 'client.connected',
  CLIENT_REQUEST_FETCH_FILE: 'client.request-fetch-file',
  CLIENT_OPEN_FILE_IN_EDITOR: 'client.open-file-in-editor'
};

const SERVER_PORT = 3018;

module.exports = {
  SERVER_PORT,
  SOCKET_MESSAGE_TYPE,
  CC_NODE_TYPE,
  FILE_NODE_TYPE,
  DIR_NODE_TYPE,
  NO_TRAIL_FLOW
};
