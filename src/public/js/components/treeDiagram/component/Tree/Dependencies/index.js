import React from 'react';
import { connect } from 'react-redux';

import {
  DependenciesEdge,
  DependenciesOverlappingEdge
} from 'components/treeDiagram/component/Edge/DepenenciesEdge';
import { FileName } from 'components/treeDiagram/component/Node/File';
import { selectDependencyEdge } from 'components/dataBus/store/actions';
import { getGroupsAroundNode, checkIsEdgeSelected } from './utils';

const DependenciesTree = props => {
  const {
    selectedNode,
    fileNodesMap,
    shiftToCenterPoint,
    sourceDiagramOn,
    onDependencyEdgeClick,
    selectedDependencyEdgeNodes
  } = props;

  if (!selectedNode || !selectedNode.dependencies) {
    return null;
  }

  const selectedNodeDependencies = selectedNode.dependencies[selectedNode.path];
  console.log(selectedNode.path);
  return (
    <React.Fragment>
      {selectedNodeDependencies &&
        [selectedNodeDependencies].map(({ moduleName, importedModuleNames }) => {
          const moduleNode = fileNodesMap[moduleName];

          if (!moduleNode) return;

          const [mX, mY] = [moduleNode.y, moduleNode.x];
          const targetPosition = shiftToCenterPoint(mX, mY);
          const sourceNodes = [];
          if (!sourceDiagramOn) {
            // TODO: un sync with FileName in SourceTree, duplication
            sourceNodes.push(
              <FileName
                key={moduleNode.data.path}
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
                    key={`dep-edge-${importedNodeName}`}
                    isAnyDependencyEdgesSelected={!!selectedDependencyEdgeNodes}
                    groupName={groupName}
                    sourcePosition={sourcePosition}
                    targetPosition={targetPosition}
                    firstSourcePosition={i ? firstSourcePosition : null}
                    onClick={() => onDependencyEdgeClick(moduleName, [importedNodeName], groupName)}
                    selected={selected}
                  />
                );

                selected ? selectedEdges.push(edge) : edges.push(edge);

                if (!i && groupNodes.length > 1) {
                  const overlappingEdgeSelected =
                    selectedDependencyEdgeNodes &&
                    groupName === selectedDependencyEdgeNodes.groupName &&
                    checkIsEdgeSelected(selectedDependencyEdgeNodes, moduleName);

                  overlappingEdges.push(
                    <DependenciesOverlappingEdge
                      key={`overlap-edge-${importedNodeName}`}
                      groupName={groupName}
                      sourcePosition={sourcePosition}
                      targetPosition={targetPosition}
                      onClick={() => onDependencyEdgeClick(moduleName, importedModuleNames)}
                      selected={overlappingEdgeSelected}
                    />
                  );
                }

                if (!sourceDiagramOn) {
                  sourceNodes.push(
                    <FileName
                      key={importedNode.data.path}
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
            <React.Fragment key={moduleName}>
              {edges}
              {selectedEdges}
              {overlappingEdges}
              {!sourceDiagramOn ? sourceNodes : null}
            </React.Fragment>
          );
        })}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  const { checkedState } = state.viewSwitches;
  const { fileNodesMap, selectedDependencyEdgeNodes, selectedNode } = state.dataBus;

  return {
    sourceDiagramOn: checkedState.source,
    fileNodesMap,
    selectedNode,
    selectedDependencyEdgeNodes
  };
};

const mapDispatchToProps = {
  onDependencyEdgeClick: selectDependencyEdge
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DependenciesTree);
