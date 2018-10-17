import React from 'react';
import Draggable from 'react-draggable';
import { Spin } from 'antd';

import SourceTree from './Tree/SourceTree';
import { UnderLayer } from './UnderLayer';
import './TreeDiagram.scss';

import { buildShiftToPoint } from 'utils/geometry';

class TreeDiagram extends React.Component {
  render() {
    const { layoutSize, filesTreeLayoutNodes, onUnderLayerClick } = this.props;
    const { width, height, xShift, yShift } = layoutSize;

    if (!width && !height) {
      return (
        <div className={'MainLoader'}>
          <Spin />
          <Spin />
          <Spin />
        </div>
      );
    }

    const shiftToCenterPoint = buildShiftToPoint({
      x: xShift,
      y: yShift
    });

    return (
      <div className="TreeDiagram">
        <Draggable>
          <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
            {filesTreeLayoutNodes && (
              <React.Fragment>
                <UnderLayer width={width} height={height} onClick={onUnderLayerClick} />
                <SourceTree shiftToCenterPoint={shiftToCenterPoint} />
              </React.Fragment>
            )}
          </svg>
        </Draggable>
      </div>
    );
  }
}

export default TreeDiagram;
