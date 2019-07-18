const directoryTree = require('directory-tree');

const { traversal: treeTraversal } = require('../utils/tree');
const { DIR_NODE_TYPE } = require('../shared-constants');

const DEFAULT_EXTENSION_REGEX = require('../code-parse/language/default/extensions')
const DEFAULT_CONFIG = { extensions: DEFAULT_EXTENSION_REGEX }
const NO_FILES_ERROR = 'There is not files found. Please check source dir and entry point configs.';

const getProjectFiles = (projectDir, config = DEFAULT_CONFIG) => {
  const filesMap = {};
  const foldersMap = {};

  const sourceTree = directoryTree(projectDir, config, item => {
    filesMap[item.path] = item;
  });

  if (!Object.keys(filesMap).length) {
    throw new Error(NO_FILES_ERROR);
  }

  treeTraversal(sourceTree, node => {
    if (node.type === DIR_NODE_TYPE && node.children) {
      foldersMap[node.path] = 1;
      node.children = node.children.sort(sortTreeChildren);
    }
  });

  return { sourceTree, filesMap, foldersMap };
};

const sortTreeChildren = (a, b) => {
  if (a.type !== DIR_NODE_TYPE && b.type === DIR_NODE_TYPE) {
    return 1;
  }

  if (a.type === DIR_NODE_TYPE && b.type !== DIR_NODE_TYPE) {
    return -1;
  }

  return 0;
};

module.exports = {
  getProjectFiles
};
