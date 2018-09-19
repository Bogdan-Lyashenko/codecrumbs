import React from 'react';
import SourceTree from './Tree/SourceTree';
import { UnderLayer } from './UnderLayer';
import './TreeDiagram.scss';

import { buildShiftToPoint } from 'utils/geometry';

export const BOX_SIZE = { W: 1000, H: 800 };
export const DOT = {
  x: 50,
  y: 500
};

class TreeDiagram extends React.Component {
  render() {
    const { width = BOX_SIZE.W, height = BOX_SIZE.H, dot = DOT } = this.props;
    const shiftToCenterPoint = buildShiftToPoint(dot);

    const { filesTreeLayoutNodes, onUnderLayerClick, ...otherProps } = this.props;

    return (
      <div className="TreeDiagram">
        <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
          {filesTreeLayoutNodes && (
            <React.Fragment>
              <UnderLayer width={width} height={height} onClick={onUnderLayerClick} />
              <SourceTree
                filesTreeLayoutNodes={filesTreeLayoutNodes}
                shiftToCenterPoint={shiftToCenterPoint}
                {...otherProps}
              />
            </React.Fragment>
          )}
        </svg>
      </div>
    );
  }
}

export default TreeDiagram;
