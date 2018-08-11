import React from 'react';
import SourceTree from './SourceTree/SourceTree';
import DependenciesTree from './DependenciesTree/DependenciesTree';
import CodeCrumbsTree from './CodeCrumbsTree/CodeCrumbsTree';
import './TreeDiagram.css';

import { buildShiftToPoint } from '../../../utils/geometry';

export const BOX_SIZE = { W: 1000, H: 800 };
export const DOT = {
  x: 50,
  y: 500
};

class TreeDiagram extends React.Component {
  render() {
    const { width = BOX_SIZE.W, height = BOX_SIZE.H, dot = DOT } = this.props;
    const shiftToCenterPoint = buildShiftToPoint(dot);

    const {
      filesTreeLayoutNodes,
      dependenciesList,
      closedFolders,
      dependenciesEntryPoint,

      sourceDiagramOn,
      dependenciesDiagramOn,
      dependenciesShowOneModule,
      codeCrumbsDiagramOn,
      codeCrumbsMinimize,
      codeCrumbsDetails,

      onFileSelect,
      onFileIconClick,
      onFolderClick,
      onCodeCrumbSelect
    } = this.props;

    const sharedProps = {
      sourceDiagramOn,
      dependenciesDiagramOn,
      codeCrumbsDiagramOn,
      codeCrumbsMinimize,
      codeCrumbsDetails,
      shiftToCenterPoint
    };

    return (
      <div className="TreeDiagram-container">
        <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
          {filesTreeLayoutNodes &&
            sourceDiagramOn && (
              <SourceTree
                layoutNodes={filesTreeLayoutNodes}
                closedFolders={closedFolders}
                onFileSelect={onFileSelect}
                onFileIconClick={onFileIconClick}
                onFolderClick={onFolderClick}
                dependenciesList={dependenciesList}
                filesTreeLayoutNodes={filesTreeLayoutNodes}
                dependenciesEntryPoint={dependenciesEntryPoint}
                dependenciesShowOneModule={dependenciesShowOneModule}
                {...sharedProps}
              />
            )}

          {filesTreeLayoutNodes &&
            codeCrumbsDiagramOn && (
              <CodeCrumbsTree
                filesTreeLayoutNodes={filesTreeLayoutNodes}
                onCodeCrumbSelect={onCodeCrumbSelect}
                {...sharedProps}
              />
            )}
        </svg>
      </div>
    );
  }
}

export default TreeDiagram;
