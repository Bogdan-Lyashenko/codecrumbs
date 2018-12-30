import React from 'react';
import { connect } from 'react-redux';

import {
  DependenciesEdge,
  DependenciesArrow
} from 'components/treeDiagram/component/Edge/DepenenciesEdge';
import { FileName } from 'components/treeDiagram/component/Node/File';
import { selectDependencyEdge } from 'components/dataBus/store/actions';
import {
  getSourceLayout,
  getSourceUserChoice,
  getDependenciesUserChoice
} from 'components/dataBus/store/selectors';
import { getCheckedState } from 'components/controls/ViewSwitches/store/selectors';

import { getGroupsAroundNode, checkIsEdgeSelected } from './utils';

const DependenciesTree = props => {
  const {
    selectedNode,
    filesLayoutMap,
    shiftToCenterPoint,
    sourceDiagramOn,
    onDependencyEdgeClick,
    selectedDependencyEdgeNodes
  } = props;

  if (!selectedNode || !selectedNode.dependencies) {
    return null;
  }

  const selectedNodeDependencies = selectedNode.dependencies[selectedNode.path];
  return (
    <React.Fragment>
      {selectedNodeDependencies &&
        [selectedNodeDependencies].map(({ moduleName, importedModuleNames }) => {
          const moduleNode = filesLayoutMap[moduleName];
          if (!moduleNode) return null;

          const { name, path } = moduleNode.data;
          const [mX, mY] = [moduleNode.y, moduleNode.x];
          const targetPosition = shiftToCenterPoint(mX, mY);
          const sourceNodes = [];
          if (!sourceDiagramOn) {
            // TODO: un sync with FileName in SourceTree, duplication
            sourceNodes.push(
              <FileName key={path} position={targetPosition} name={name} dependency={true} />
            );
          }

          const importedNodes = importedModuleNames
            .map(name => filesLayoutMap[name])
            .filter(node => !!node);

          const edges = [];
          const selectedEdges = [];

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
                const { path: importedNodePath, name } = importedNode.data;

                const selected =
                  selectedDependencyEdgeNodes &&
                  checkIsEdgeSelected(selectedDependencyEdgeNodes, moduleName, importedNodePath);

                const edge = (
                  <DependenciesEdge
                    key={`dep-edge-${importedNodePath}`}
                    anyEdgeSelected={!!selectedDependencyEdgeNodes}
                    selected={selected}
                    groupName={groupName}
                    sourcePosition={sourcePosition}
                    targetPosition={targetPosition}
                    firstSourcePosition={i ? firstSourcePosition : null}
                    onClick={() => onDependencyEdgeClick(moduleName, [importedNodePath], groupName)}
                  />
                );
                selected ? selectedEdges.push(edge) : edges.push(edge);

                if (!i) {
                  const arrowSelected =
                    selectedDependencyEdgeNodes &&
                    groupName === selectedDependencyEdgeNodes.groupName &&
                    checkIsEdgeSelected(selectedDependencyEdgeNodes, moduleName);

                  const arrow = (
                    <DependenciesArrow
                      key={`dep-arrow-${importedNodePath}`}
                      selected={arrowSelected}
                      groupName={groupName}
                      targetPosition={targetPosition}
                    />
                  );
                  arrowSelected ? selectedEdges.push(arrow) : edges.push(arrow);
                }

                if (!sourceDiagramOn) {
                  sourceNodes.push(
                    <FileName
                      key={importedNodePath}
                      position={sourcePosition}
                      name={name}
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
              {sourceNodes}
            </React.Fragment>
          );
        })}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  const { sourceDiagramOn } = getCheckedState(state);

  const { filesLayoutMap } = getSourceLayout(state);
  const { selectedNode } = getSourceUserChoice(state);
  const { selectedDependencyEdgeNodes } = getDependenciesUserChoice(state);

  return {
    sourceDiagramOn,
    filesLayoutMap,
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
