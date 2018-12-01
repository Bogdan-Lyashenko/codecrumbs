import React from 'react';
import { connect } from 'react-redux';

import { FILE_NODE_TYPE, DIR_NODE_TYPE } from 'utils/constants';
import { FileName } from 'components/treeDiagram/component/Node/File';
import { FolderName } from 'components/treeDiagram/component/Node/Folder';
import { Dot } from 'components/treeDiagram/component/Dot/';
import { SourceEdge } from 'components/treeDiagram/component/Edge/SourceEdge';

import DependenciesTree from './Dependencies/';
import CodeCrumbsTree, { CodeCrumbedFlowEdges } from './CodeCrumbsTree';
import { selectNode, toggleFolder } from 'components/dataBus/store/actions';

class SourceTree extends React.Component {
  render() {
    const {
      sourceDiagramOn,
      dependenciesDiagramOn,
      sourceDimFolders,
      codeCrumbsDiagramOn,
      codeCrumbsMinimize,

      filesTreeLayoutNodes,
      openedFolders,
      selectedNode,
      shiftToCenterPoint,
      onNodeTextClick,
      onFolderIconClick,
      dependenciesEntryPoint,
      selectedDependencyEdgeNodes
    } = this.props;

    const sourceEdges = [];
    const selectedSourceEdges = [];
    const sourceNodes = [];
    const sourceDotes = [];

    // TODO: add normal id generators for keys to not use i
    let i = 0;
    sourceDiagramOn &&
      filesTreeLayoutNodes.each(node => {
        i++;

        const [nX, nY] = [node.y, node.x];
        const position = shiftToCenterPoint(nX, nY);
        const { name, path } = node.data;

        const parent = node.parent;
        const selected = selectedNode && selectedNode.path.indexOf(path) !== -1;

        if (parent && parent.data.type === DIR_NODE_TYPE) {
          const [pX, pY] = [parent.y, parent.x];
          const sourcePosition = shiftToCenterPoint(pX, pY);

          const edge = (
            <SourceEdge
              key={`source-edge-${path}`}
              targetPosition={position}
              sourcePosition={sourcePosition}
              disabled={sourceDimFolders}
              singleChild={parent.children.length === 1}
              selected={selected}
            />
          );

          selected ? selectedSourceEdges.push(edge) : sourceEdges.push(edge);
        }

        const type = node.data.type;
        if (
          type === DIR_NODE_TYPE ||
          (type === FILE_NODE_TYPE &&
            !(
              dependenciesDiagramOn &&
              selectedNode.dependencies &&
              selectedNode.dependencies[path]
            ))
        ) {
          sourceDotes.push(
            <Dot key={`dot-${path}`} position={position} disabled={false} selected={selected} />
          );
        }

        let nodeBasedOnType = null;
        if (node.data.type === FILE_NODE_TYPE) {
          const selectedNodeDependencies = selectedNode.dependencies;
          nodeBasedOnType = (
            <FileName
              key={path}
              position={position}
              name={name}
              path={node.data.path}
              codeCrumbs={codeCrumbsDiagramOn}
              purple={codeCrumbsDiagramOn && node.data.hasCodecrumbs && codeCrumbsMinimize}
              selected={
                selectedDependencyEdgeNodes &&
                (selectedDependencyEdgeNodes.target === path ||
                  selectedDependencyEdgeNodes.sources.includes(path))
              }
              depEntryPoint={path === dependenciesEntryPoint.path}
              dependency={
                dependenciesDiagramOn && selectedNodeDependencies && selectedNodeDependencies[path]
              }
              dependencyImportedOnly={
                dependenciesDiagramOn &&
                selectedNodeDependencies &&
                selectedNodeDependencies[path] &&
                !selectedNodeDependencies[path].importedModuleNames.length
              }
              onNodeClick={() => {
                onNodeTextClick(node.data);
              }}
            />
          );
        } else if (node.data.type === DIR_NODE_TYPE) {
          nodeBasedOnType = (
            <FolderName
              key={path}
              position={position}
              name={name}
              cover={dependenciesDiagramOn || codeCrumbsDiagramOn}
              disabled={sourceDimFolders}
              openedState={openedFolders[node.data.path]}
              onTextClick={() => onFolderIconClick(node.data)}
              onIconClick={() => onFolderIconClick(node.data)}
            />
          );
        }

        sourceNodes.push(nodeBasedOnType);
      });

    return (
      <React.Fragment>
        {(sourceDiagramOn && sourceEdges) || null}
        {(sourceDiagramOn && selectedSourceEdges) || null}

        {dependenciesDiagramOn &&
          selectedNode.dependencies && <DependenciesTree shiftToCenterPoint={shiftToCenterPoint} />}

        {(codeCrumbsDiagramOn && (
          <CodeCrumbedFlowEdges shiftToCenterPoint={shiftToCenterPoint} />
        )) ||
          null}

        {(sourceDiagramOn && sourceNodes) || null}
        {(sourceDiagramOn && sourceDotes) || null}

        {(codeCrumbsDiagramOn && <CodeCrumbsTree shiftToCenterPoint={shiftToCenterPoint} />) ||
          null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { checkedState } = state.viewSwitches;
  const {
    selectedNode,
    filesTreeLayoutNodes,
    openedFolders,
    dependenciesEntryPoint,
    selectedDependencyEdgeNodes
  } = state.dataBus;

  return {
    sourceDiagramOn: checkedState.source,
    dependenciesDiagramOn: checkedState.dependencies,
    sourceDimFolders: checkedState.sourceDimFolders,
    codeCrumbsDiagramOn: checkedState.codeCrumbs,
    codeCrumbsMinimize: checkedState.codeCrumbsMinimize,
    filesTreeLayoutNodes,
    selectedNode,
    openedFolders,
    dependenciesEntryPoint,
    selectedDependencyEdgeNodes
  };
};

const mapDispatchToProps = {
  onNodeTextClick: selectNode,
  onFolderIconClick: toggleFolder
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SourceTree);
