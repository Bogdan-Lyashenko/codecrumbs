const FILE_NODE_TYPE = 'file';
const DIR_NODE_TYPE = 'directory';

const SOCKET_EVENT_TYPE = {
  INIT_SOURCE_FILES_SYNC: 'init-source-files-sync',
  UPDATE_SOURCE_FILE_SYNC: 'update-source-file-sync'
};

module.exports = {
  SOCKET_EVENT_TYPE,
  FILE_NODE_TYPE,
  DIR_NODE_TYPE
};
