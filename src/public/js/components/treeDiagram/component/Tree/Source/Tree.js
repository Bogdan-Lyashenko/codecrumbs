import React from 'react';

import { FILE_NODE_TYPE, DIR_NODE_TYPE } from 'utils/constants';
import { FileName } from 'components/treeDiagram/component/Node/File';
import { FolderName } from 'components/treeDiagram/component/Node/Folder';
import { Dot } from 'components/treeDiagram/component/Dot/index';
import { SourceEdge } from 'components/treeDiagram/component/Edge/SourceEdge';

import DependenciesTree from '../Dependencies/index';
import CodeCrumbsTree, { CodeCrumbedFlowEdges } from '../CodeCrumbs/index';

const SourceTree = props => {
  const {
    sourceDiagramOn,
    dependenciesDiagramOn,
    sourceDimFolders,
    codeCrumbsDiagramOn,
    codeCrumbsMinimize,

    filesTreeLayoutNodes,
    openedFolders,
    filesMap,
    selectedNode,
    shiftToCenterPoint,
    onNodeTextClick,
    onFolderIconClick,
    dependenciesEntryPoint,
    selectedDependencyEdgeNodes
  } = props;

  const sourceEdges = [];
  const selectedSourceEdges = [];
  const sourceNodes = [];
  const sourceDotes = [];

  // TODO: add normal id generators for keys to not use i
  // TODO: refactor, too long render method
  let i = 0;
  sourceDiagramOn &&
    filesTreeLayoutNodes.each(node => {
      i++;

      const [nX, nY] = [node.y, node.x];
      const position = shiftToCenterPoint(nX, nY);
      const { name, path, type } = node.data;

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

      if (
        type === DIR_NODE_TYPE ||
        (type === FILE_NODE_TYPE &&
          !(dependenciesDiagramOn && selectedNode.dependencies && selectedNode.dependencies[path]))
      ) {
        sourceDotes.push(
          <Dot key={`dot-${path}`} position={position} disabled={false} selected={selected} />
        );
      }

      let nodeBasedOnType = null;
      if (type === FILE_NODE_TYPE) {
        const selectedNodeDependencies = selectedNode.dependencies;
        const fileNode = filesMap[path];
        nodeBasedOnType = (
          <FileName
            key={path}
            position={position}
            name={name}
            path={fileNode.path}
            codeCrumbs={codeCrumbsDiagramOn}
            purple={codeCrumbsDiagramOn && fileNode.hasCodecrumbs && codeCrumbsMinimize}
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
              onNodeTextClick(fileNode);
            }}
          />
        );
      } else if (type === DIR_NODE_TYPE) {
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

      {(codeCrumbsDiagramOn && <CodeCrumbedFlowEdges shiftToCenterPoint={shiftToCenterPoint} />) ||
        null}

      {(sourceDiagramOn && sourceNodes) || null}
      {(sourceDiagramOn && sourceDotes) || null}

      {(codeCrumbsDiagramOn && <CodeCrumbsTree shiftToCenterPoint={shiftToCenterPoint} />) || null}
    </React.Fragment>
  );
};

export default SourceTree;
