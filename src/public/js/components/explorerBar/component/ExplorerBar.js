import React from 'react';

import Tree from 'antd/es/tree'
import 'antd/es/tree/style'

import { FILE_NODE_TYPE } from '../../../core/constants';
import './ExplorerBar.less';

const DirectoryTree = Tree.DirectoryTree;
const TreeNode = Tree.TreeNode;

const buildNodes = tree =>
  (!tree ? [] : tree).filter(n => !!n).map(node => {
    if (node.data.type === FILE_NODE_TYPE) {
      return <TreeNode title={node.data.name} key={node.data.path} isLeaf />;
    }

    return (
      <TreeNode title={node.data.name} key={node.data.path}>
        {buildNodes(node.children)}
      </TreeNode>
    );
  });

export default ({ nodesTree, onFileClick, onFolderClick, filesMap, foldersMap }) => {
  if (!nodesTree || !nodesTree.length || !nodesTree[0]) {
    return null;
  }

  const rootPath = nodesTree[0].data.path;
  return (
    <div className="ExplorerBar">
      <div className="body">
        <DirectoryTree
          showIcon
          defaultExpandedKeys={[rootPath]}
          onSelect={path => filesMap[path] && onFileClick(filesMap[path])}
          onExpand={path => foldersMap[path] && onFolderClick(foldersMap[path])}
        >
          {buildNodes(nodesTree)}
        </DirectoryTree>
      </div>
    </div>
  );
};
