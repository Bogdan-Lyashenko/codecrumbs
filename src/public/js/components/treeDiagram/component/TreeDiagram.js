import React from 'react';
import Draggable from 'react-draggable';

import SourceTree from './Tree/SourceTree';
import { UnderLayer } from './UnderLayer';
import './TreeDiagram.scss';

import { buildShiftToPoint } from 'utils/geometry';

export const BOX_SIZE = { W: 1000, H: 800 };
export const DOT = {
  x: 20,
  y: 70
};

class TreeDiagram extends React.Component {
  render() {
    const { layoutSize } = this.props;
    const { width = BOX_SIZE.W, height = BOX_SIZE.H, padding } = layoutSize;

    const shiftToCenterPoint = buildShiftToPoint({
      x: DOT.x,
      y: (height - padding) / 2 + DOT.y
    });

    const { filesTreeLayoutNodes, onUnderLayerClick, ...otherProps } = this.props;

    return (
      <div className="TreeDiagram">
        <Draggable>
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
        </Draggable>
      </div>
    );
  }
}

export default TreeDiagram;
