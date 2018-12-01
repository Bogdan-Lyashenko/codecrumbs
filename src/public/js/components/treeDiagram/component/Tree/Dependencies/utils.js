import { DepEdgeGroups } from 'components/treeDiagram/store/constants';

export const getGroupsAroundNode = (moduleNode, importedNodes) => {
  const groups = {
    [DepEdgeGroups.TOP_LEFT]: [],
    [DepEdgeGroups.TOP_RIGHT]: [],
    [DepEdgeGroups.BOTTOM_LEFT]: [],
    [DepEdgeGroups.BOTTOM_RIGHT]: []
  };

  const [mX, mY] = [moduleNode.y, moduleNode.x];

  importedNodes
    .sort((a, b) => {
      const aDiff = Math.abs(mY - a.x); // swap coordinates
      const bDiff = Math.abs(mY - b.x); // swap coordinates

      if (aDiff < bDiff) {
        return -1;
      }

      if (aDiff > bDiff) {
        return 1;
      }

      return 0;
    })
    .forEach(importedNode => {
      const [iX, iY] = [importedNode.y, importedNode.x];

      if (iY < mY) {
        if (iX < mX) {
          groups[DepEdgeGroups.TOP_LEFT].push(importedNode);
        } else {
          groups[DepEdgeGroups.TOP_RIGHT].push(importedNode);
        }
      } else {
        if (iX < mX) {
          groups[DepEdgeGroups.BOTTOM_LEFT].push(importedNode);
        } else {
          groups[DepEdgeGroups.BOTTOM_RIGHT].push(importedNode);
        }
      }
    });

  return groups;
};

export const checkIsEdgeSelected = (selectedEdge, target, source) => {
  if (selectedEdge.target && selectedEdge.sources.length > 1) {
    return selectedEdge.target === target;
  }

  if (!source) {
    return selectedEdge.target === target;
  }

  return selectedEdge.target === target && selectedEdge.sources[0] === source;
};
