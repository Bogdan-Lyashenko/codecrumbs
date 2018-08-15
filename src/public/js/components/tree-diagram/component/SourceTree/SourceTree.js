import React from 'react';

// TODO: add webpack resolve to not have these ../ .../ ../
import { FILE_NODE_TYPE, DIR_NODE_TYPE } from '../../../../../../shared/constants';
import { FolderName, FileName } from '../utils/NodeText/';
import { FolderIcon, FileIcon } from '../utils/NodeIcon/';
import { Dot } from '../utils/Dot/';
import { SourceEdge } from '../utils/Edge/SourceEdge';

import DependenciesTree from '../DependenciesTree/DependenciesTree';
import CodeCrumbsTree from '../CodeCrumbsTree/CodeCrumbsTree';

class SourceTree extends React.Component {
  render() {
    const {
      sourceDiagramOn,
      dependenciesDiagramOn,
      codeCrumbsDiagramOn,

      filesTreeLayoutNodes,
      closedFolders,
      shiftToCenterPoint,
      codeCrumbsMinimize,
      onFileSelect,
      onFileIconClick,
      onFolderClick,
      dependenciesList
    } = this.props;

    const sourceEdges = [];
    const sourceNodes = [];
    const sourceDotes = [];

    // TODO: add normal id generators for keys to not use i
    let i = 0;
    filesTreeLayoutNodes.each(node => {
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

      if ([FILE_NODE_TYPE, DIR_NODE_TYPE].includes(node.data.type)) {
        sourceDotes.push(
          <Dot key={`dot-${i}`} position={position} disabled={dependenciesDiagramOn}/>
        );
      }

      let nodeBasedOnType = null;
      if (node.data.type === FILE_NODE_TYPE) {
        nodeBasedOnType = (
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
        );
      } else if (node.data.type === DIR_NODE_TYPE) {
        nodeBasedOnType = (
          <React.Fragment>
            <FolderName position={position} name={name} disabled={dependenciesDiagramOn}/>
            <FolderIcon
              position={position}
              disabled={dependenciesDiagramOn}
              closed={closedFolders[node.data.path]}
              onClick={() => onFolderClick(node.data)}
            />
          </React.Fragment>
        );
      }

      sourceNodes.push(
        <React.Fragment key={name + i}>
          {nodeBasedOnType}
        </React.Fragment>
      );
    });

    return (
      <React.Fragment>
        { sourceDiagramOn && sourceEdges || null }
        { sourceDiagramOn && sourceDotes || null}

        {dependenciesList &&
          dependenciesDiagramOn && <DependenciesTree {...this.props} />}

        { sourceDiagramOn && sourceNodes || null }

        { codeCrumbsDiagramOn && <CodeCrumbsTree {...this.props}/> || null }

      </React.Fragment>
    );
  }
}

export default SourceTree;
