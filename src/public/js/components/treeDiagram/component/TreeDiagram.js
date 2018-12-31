import React from 'react';
import Draggable from 'react-draggable';
import { Spin } from 'antd';

import SourceTree from './Tree/Source/';
import { UnderLayer } from './UnderLayer';
import './TreeDiagram.scss';

import { buildShiftToPoint } from 'core/dataBus/utils/geometry';

class TreeDiagram extends React.Component {
  render() {
    // TODO: fix diagramZoom
    const { diagramZoom, layoutSize, sourceLayoutTree, onUnderLayerClick } = this.props;
    const { width, height, xShift, yShift, bounds } = layoutSize;

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
        <Draggable bounds={bounds}>
          <svg
            id={'MainTreeSVG'}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="optimizeSpeed"
          >
            {sourceLayoutTree && (
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
