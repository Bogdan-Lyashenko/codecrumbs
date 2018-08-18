import React from 'react';
import SourceTree from './Tree/SourceTree';
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

    const { filesTreeLayoutNodes, ...otherProps } = this.props;

    return (
      <div className="TreeDiagram-container">
        <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
          {filesTreeLayoutNodes && (
            <SourceTree
              filesTreeLayoutNodes={filesTreeLayoutNodes}
              shiftToCenterPoint={shiftToCenterPoint}
              {...otherProps}
            />
          )}
        </svg>
      </div>
    );
  }
}

export default TreeDiagram;
