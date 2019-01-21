import React from 'react';
import { connect } from 'react-redux';

import Draggable from 'react-draggable';
import { Spin } from 'antd';

import SourceTree from './Tree/Source/';
import { UnderLayer } from './UnderLayer';
import './TreeDiagram.scss';

import { buildShiftToPoint } from 'core/dataBus/utils/geometry';
import { getSourceLayout } from 'core/dataBus/selectors';
import { getValuesState } from 'core/controlsBus/selectors';
import { calculateLayoutSize } from 'core/dataBus/utils/geometry';
import { selectDependencyEdge } from 'core/dataBus/actions';

class TreeDiagram extends React.Component {
  render() {
    // TODO: fix diagramZoom
    const { namespace, diagramZoom, layoutSize, sourceLayoutTree, onUnderLayerClick } = this.props;
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
                <SourceTree namespace={namespace} shiftToCenterPoint={shiftToCenterPoint} />
              </React.Fragment>
            )}
          </svg>
        </Draggable>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { namespace } = props;
  const { sourceLayoutTree } = getSourceLayout(state, { namespace });
  const { diagramZoom } = getValuesState(state);

  return {
    namespace,
    diagramZoom,
    sourceLayoutTree,
    layoutSize: calculateLayoutSize(sourceLayoutTree)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { namespace } = ownProps;
  return {
    onUnderLayerClick: () => dispatch(selectDependencyEdge(undefined, namespace))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TreeDiagram);
