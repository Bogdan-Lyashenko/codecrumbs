import React from 'react';

import {
  DependenciesEdge,
  DependenciesOverlappingEdge
} from 'components/treeDiagram/component/Edge/DepenenciesEdge';
import { FileName } from 'components/treeDiagram/component/Node/File';
import { DepEdgeGroups } from 'components/treeDiagram/store/constants';

export const getFilteredDependenciesList = ({
  dependenciesList,
  dependenciesEntryPoint,
  dependenciesShowDirectOnly
}) => {
  if (!dependenciesEntryPoint) {
    return [];
  }

  if (dependenciesShowDirectOnly) {
    const dependency = dependenciesList.find(d => d.moduleName === dependenciesEntryPoint.path);
    return dependency ? [dependency] : [];
  }

  return collectDependencies(dependenciesEntryPoint.path, dependenciesList);
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

const checkIsEdgeSelected = (selectedEdge, target, source) => {
  if (selectedEdge.target && selectedEdge.sources.length > 1) {
    return selectedEdge.target === target;
  }

  if (!source) {
    return selectedEdge.target === target;
  }

  return selectedEdge.target === target && selectedEdge.sources[0] === source;
};

class DependenciesTree extends React.Component {
  render() {
    const {
      fileNodesMap,
      shiftToCenterPoint,
      sourceDiagramOn,
      onDependencyEdgeClick,
      selectedDependencyEdgeNodes
    } = this.props;

    const filteredDependenciesList = getFilteredDependenciesList(this.props);

    return (
      <React.Fragment>
        {filteredDependenciesList.map(({ moduleName, importedModuleNames }, i) => {
          const moduleNode = fileNodesMap[moduleName];

          if (!moduleNode) return;

          const [mX, mY] = [moduleNode.y, moduleNode.x];
          const targetPosition = shiftToCenterPoint(mX, mY);
          const sourceNodes = [];
          if (!sourceDiagramOn) {
            sourceNodes.push(
              <FileName
                key={`module-file-${i}`}
                position={targetPosition}
                name={moduleNode.data.name}
                dependency={true}
              />
            );
          }

          const importedNodes = importedModuleNames
            .map(name => fileNodesMap[name])
            .filter(node => !!node);

          const edges = [];
          const selectedEdges = [];
          const overlappingEdges = [];

          Object.entries(getGroupsAroundNode(moduleNode, importedNodes)).forEach(
            ([groupName, groupNodes]) => {
              if (!groupNodes.length) {
                return;
              }

              // swap here as well
              const firstSourceNode = groupNodes[0];
              const firstSourcePosition = shiftToCenterPoint(firstSourceNode.y, firstSourceNode.x);
              groupNodes.forEach((importedNode, i) => {
                const [iX, iY] = [importedNode.y, importedNode.x];
                const sourcePosition = shiftToCenterPoint(iX, iY);
                const importedNodeName = importedNode.data.path;

                const selected =
                  selectedDependencyEdgeNodes &&
                  checkIsEdgeSelected(selectedDependencyEdgeNodes, moduleName, importedNodeName);

                const edge = (
                  <DependenciesEdge
                    key={'edge' + i}
                    groupName={groupName}
                    sourcePosition={sourcePosition}
                    targetPosition={targetPosition}
                    firstSourcePosition={i ? firstSourcePosition : null}
                    onClick={() => onDependencyEdgeClick(moduleName, [importedNodeName])}
                    selected={selected}
                  />
                );

                selected ? selectedEdges.push(edge) : edges.push(edge);

                if (!i && groupNodes.length > 1) {
                  overlappingEdges.push(
                    <DependenciesOverlappingEdge
                      key={'overlap-edge' + i}
                      groupName={groupName}
                      sourcePosition={sourcePosition}
                      targetPosition={targetPosition}
                      onClick={() => onDependencyEdgeClick(moduleName, importedModuleNames)}
                      selected={
                        selectedDependencyEdgeNodes &&
                        checkIsEdgeSelected(selectedDependencyEdgeNodes, moduleName)
                      }
                    />
                  );
                }

                if (!sourceDiagramOn) {
                  sourceNodes.push(
                    <FileName
                      key={`imported-node-${i}`}
                      position={sourcePosition}
                      name={importedNode.data.name}
                      dependency={true}
                    />
                  );
                }
              });
            }
          );

          return (
            <React.Fragment key={moduleName + i}>
              {edges}
              {selectedEdges}
              {overlappingEdges}
              {!sourceDiagramOn ? sourceNodes : null}
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}

export default DependenciesTree;
