import React from 'react';
import { getFilesList } from 'utils/treeLayout';

import { DependenciesEdge } from 'components/tree-diagram/component/Edge/DepenenciesEdge';
import { FileName } from 'components/tree-diagram/component/Node/File';
import { DepEdgeGroups } from 'components/tree-diagram/store/constants';

//move to utils
export const findNodeByPathName = (list = [], pathName) => {
  return list.find(l => l.data.path === pathName);
};

export const getFilteredDependenciesList = ({
  dependenciesList,
  dependenciesEntryPoint,
  dependenciesShowOneModule
}) => {
  const entryPoint = dependenciesEntryPoint || {
    path: dependenciesList[0].moduleName
  };

  if (dependenciesShowOneModule) {
    return [dependenciesList.find(d => d.moduleName === entryPoint.path)];
  }

  return collectDependencies(entryPoint.path, dependenciesList);
};

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

export const collectDependencies = (entryModuleName, dependenciesList) => {
  let queue = [].concat(entryModuleName),
    store = [];

  while (queue.length) {
    let moduleName = queue.shift(),
      entryModule = dependenciesList.find(d => d.moduleName === moduleName);

    if (entryModule) {
      store.push(entryModule);

      const nodeBody = entryModule.importedModuleNames;
      if (nodeBody) {
        queue = [...queue, ...nodeBody];
      }
    } else {
      console.error('looks like ' + entryModuleName + 'is not imported anywhere');
    }
  }

  return store;
};

class DependenciesTree extends React.Component {
  render() {
    const { filesTreeLayoutNodes, shiftToCenterPoint, sourceDiagramOn } = this.props;

    const moduleFilesList = getFilesList(filesTreeLayoutNodes);
    const filteredDependenciesList = getFilteredDependenciesList(this.props);

    return (
      <React.Fragment>
        {filteredDependenciesList.map(({ moduleName, importedModuleNames }, i) => {
          const moduleNode = findNodeByPathName(moduleFilesList, moduleName);

          if (!moduleNode) return;

          const [mX, mY] = [moduleNode.y, moduleNode.x];
          const targetPosition = shiftToCenterPoint(mX, mY);

          const importedNodes = importedModuleNames
            .map(name => findNodeByPathName(moduleFilesList, name))
            .filter(node => !!node);

          const edges = [];
          Object.entries(getGroupsAroundNode(moduleNode, importedNodes)).forEach(
            ([groupName, groupNodes]) => {
              if (!groupNodes.length) {
                return;
              }

              // swap here as well
              const firstSourcePosition = shiftToCenterPoint(groupNodes[0].y, groupNodes[0].x);
              groupNodes.forEach((importedNode, i) => {
                const [iX, iY] = [importedNode.y, importedNode.x];
                const sourcePosition = shiftToCenterPoint(iX, iY);

                edges.push(
                  <DependenciesEdge
                    key={'edge' + i}
                    groupName={groupName}
                    sourcePosition={sourcePosition}
                    targetPosition={targetPosition}
                    firstSourcePosition={i ? firstSourcePosition : null}
                  />
                );
              });
            }
          );

          return (
            <React.Fragment key={moduleName + i}>
              {edges}
              {!sourceDiagramOn ? (
                <FileName position={targetPosition} name={moduleNode.data.name} dependency={true} />
              ) : null}
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}

export default DependenciesTree;
