import React from 'react';

import { FILE_NODE_TYPE, DIR_NODE_TYPE } from 'core/constants';
import { FileName } from 'components/treeDiagram/component/Node/File';
import { FolderName } from 'components/treeDiagram/component/Node/Folder';
import Dot from 'components/treeDiagram/component/Icons/Dot';
import { SourceEdge } from 'components/treeDiagram/component/Edge/SourceEdge';

import DependenciesTree from '../Dependencies/index';
import CodeCrumbsTree from '../CodeCrumbs/';

const SourceTree = props => {
  const {
    namespace,
    language,

    sourceDiagramOn,
    dependenciesDiagramOn,
    sourceDimFolders,
    codeCrumbsDiagramOn,
    codeCrumbsMinimize,
    ccAlightPoint,
    sortedFlowSteps,
    ccFilesLayoutMapNs,
    ccShiftIndexMap,

    areaHeight,
    sourceLayoutTree,
    openedFolders,
    filesMap,
    selectedNode,
    shiftToCenterPoint,
    onFileNodeClick,
    onFolderNodeClick,
    dependenciesEntryName,
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
    sourceLayoutTree.each(node => {
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
        sourceDotes.push(<Dot key={`dot-${path}`} position={position} selected={selected} />);
      }

      let nodeBasedOnType = null;
      if (type === FILE_NODE_TYPE) {
        const selectedNodeDependencies = selectedNode.dependencies;
        const fileNode = filesMap[path];
        nodeBasedOnType = (
          <FileName
            key={path}
            language={language}
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
            depEntryPoint={path === dependenciesEntryName}
            dependency={
              dependenciesDiagramOn && selectedNodeDependencies && selectedNodeDependencies[path]
            }
            dependencyImportedOnly={
              dependenciesDiagramOn &&
              selectedNodeDependencies &&
              selectedNodeDependencies[path] &&
              !selectedNodeDependencies[path].importedModuleNames.length
            }
            onNodeClick={e => onFileNodeClick(e, fileNode)}
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
            onNodeClick={() => onFolderNodeClick(node.data)}
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
        selectedNode.dependencies && (
          <DependenciesTree
            namespace={namespace}
            language={language}
            shiftToCenterPoint={shiftToCenterPoint}
          />
        )}

      {(sourceDiagramOn && sourceNodes) || null}
      {(sourceDiagramOn && sourceDotes) || null}

      {(codeCrumbsDiagramOn && (
        <CodeCrumbsTree
          namespace={namespace}
          language={language}
          shiftToCenterPoint={shiftToCenterPoint}
          ccAlightPoint={ccAlightPoint}
          sortedFlowSteps={sortedFlowSteps}
          ccFilesLayoutMapNs={ccFilesLayoutMapNs}
          ccShiftIndexMap={ccShiftIndexMap}
          areaHeight={areaHeight}
        />
      )) ||
        null}
    </React.Fragment>
  );
};

export default SourceTree;
