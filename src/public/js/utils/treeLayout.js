import * as d3FlexTree from 'd3-flextree';
import { FILE_NODE_TYPE, DIR_NODE_TYPE } from 'utils/constants';
import { LAYOUT_CONFIG } from 'components/treeDiagram/store/constants';

export const getTreeLayout = (
  treeData,
  { includeFileChildren, config = LAYOUT_CONFIG, openedFolders, activeItemsMap }
) => {
  const layoutStructure = d3FlexTree.flextree({
    children: data => {
      if (data.type === DIR_NODE_TYPE) {
        if (openedFolders[data.path] === 0) {
          return [];
        }

        if (openedFolders[data.path] === 1) {
          const filteredChildren = data.children.filter(child => activeItemsMap[child.path]);

          // TODO: hide .. for folders where it doesn't change anything
          data.childrenCollapsed = filteredChildren.length !== data.children.length;
          return filteredChildren;
        }

        return data.children;
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

export const getFileNodesMap = layoutNodes => {
  const map = {};

  layoutNodes.each(node => {
    if (node.data && node.data.type === FILE_NODE_TYPE) {
      map[node.data.path] = node;
    }
  });

  return map;
};
