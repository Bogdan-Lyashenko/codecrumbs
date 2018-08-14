import React from 'react';

// TODO: add webpack resolve to not have these ../ .../ ../
import { FILE_NODE_TYPE, DIR_NODE_TYPE } from '../../../../../../shared/constants';
import { FolderName, FileName } from '../utils/NodeText/';
import { FolderIcon, FileIcon } from '../utils/NodeIcon/';
import { Dot } from '../utils/Dot/';
import { SourceEdge } from '../utils/Edge/SourceEdge';

import DependenciesTree from '../DependenciesTree/DependenciesTree';

class SourceTree extends React.Component {
  render() {
    const {
      layoutNodes,
      closedFolders,
      shiftToCenterPoint,
      dependenciesDiagramOn,
      codeCrumbsMinimize,
      onFileSelect,
      onFileIconClick,
      onFolderClick,
      dependenciesList,
      filesTreeLayoutNodes
    } = this.props;

    const sourceEdges = [];
    const sourceNodes = [];
    const sourceDotes = [];

    // TODO: add normal id generators for keys to not use i
    let i = 0;
    layoutNodes.each(node => {
      i++;

      const [nX, nY] = [node.y, node.x];
      const position = shiftToCenterPoint(nX, nY);
      const name = node.data.name;

      const parent = node.parent;
      if (parent && parent.data.type === DIR_NODE_TYPE) {
        const [pX, pY] = [parent.y, parent.x];
        const sourcePosition = shiftToCenterPoint(pX, pY);

        sourceEdges.push(
          <SourceEdge
            key={`edge-${i}`}
            targetPosition={position}
            sourcePosition={sourcePosition}
            disabled={dependenciesDiagramOn}
            singleChild={parent.children.length === 1}
          />
        );
      }

      sourceDotes.push(
        <Dot key={`dot-${i}`} position={position} disabled={dependenciesDiagramOn} />
      );

      sourceNodes.push(
        <React.Fragment key={name + i}>
          {node.data.type === FILE_NODE_TYPE ? (
            <React.Fragment>
              <FileName
                position={position}
                name={name}
                purple={node.children && codeCrumbsMinimize}
                onClick={() => onFileSelect(node.data)}
              />
              <FileIcon
                position={position}
                purple={node.children && codeCrumbsMinimize}
                onClick={() => dependenciesDiagramOn && onFileIconClick(node.data)}
              />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <FolderName position={position} name={name} disabled={dependenciesDiagramOn} />
              <FolderIcon
                position={position}
                disabled={dependenciesDiagramOn}
                closed={closedFolders[node.data.path]}
                onClick={() => onFolderClick(node.data)}
              />
            </React.Fragment>
          )}
        </React.Fragment>
      );
    });

    return (
      <React.Fragment>
        {sourceEdges}
        {sourceDotes}

        {dependenciesList &&
          filesTreeLayoutNodes &&
          dependenciesDiagramOn && <DependenciesTree {...this.props} />}

        {sourceNodes}
      </React.Fragment>
    );
  }
}

export default SourceTree;
