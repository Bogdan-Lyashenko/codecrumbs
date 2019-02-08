const directoryTree = require('directory-tree');

const { traversal: treeTraversal } = require('../../shared/utils/tree');
const DIR_NODE_TYPE = require('../../shared/constants').DIR_NODE_TYPE;

const getProjectFiles = (projectDir, config = { extensions: /(.*?)/ }) => {
  const filesMap = {};
  const foldersMap = {};

  const sourceTree = directoryTree(projectDir, config, item => {
    filesMap[item.path] = item;
  });

  if (!Object.keys(filesMap).length) {
    throw new Error('There is not files found. Please check source dir and entry point configs.');
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
