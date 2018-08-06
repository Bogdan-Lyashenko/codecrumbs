import * as d3FlexTree from 'd3-flextree';
import { FILE_NODE_TYPE, DIR_NODE_TYPE } from '../../../shared/constants';
import { LAYOUT_CONFIG } from '../components/tree-diagram/store/constants';

export const getTreeLayout = (
  treeData,
  { includeFileChildren, config = LAYOUT_CONFIG, closedFolders }
) => {
  const layoutStructure = d3FlexTree.flextree({
    children: data => {
      if (data.type === DIR_NODE_TYPE) {
        return !closedFolders[data.path] ? data.children : [];
      }

      return includeFileChildren ? data.children : [];
    },
    nodeSize: node => {
      let nameLength = node.data.name.length;

      //cc: layout calc
      if (node.parent && node.data.type === DIR_NODE_TYPE) {
        const children = node.parent.children;
        nameLength = children.reduce((max, item) => {
          if (item.data.type === DIR_NODE_TYPE && item.data.name.length > max) {
            return item.data.name.length;
          }

          return max;
        }, 0);
      }

      return [config.nodeSizeX, nameLength * config.symbolWidth + config.nodeSizeY];
    },
    spacing: (nodeA, nodeB) => config.spacing
  });

  const tree = layoutStructure.hierarchy(treeData);
  return layoutStructure(tree);
};

export const getFilesList = layoutNodes => {
  const list = [];

  layoutNodes.each(node => {
    if (node.data && node.data.type === FILE_NODE_TYPE) {
      list.push(node);
    }
  });

  return list;
};
