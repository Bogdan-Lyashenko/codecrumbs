import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Draggable from 'react-draggable';
import { Spin } from 'antd';

import SourceTree from './Tree/Source/';
import { UnderLayer } from './UnderLayer';
import './TreeDiagram.scss';

import { buildShiftToPoint } from 'core/dataBus/utils/geometry';
import { getSourceLayout, getProjectMetadata } from 'core/dataBus/selectors';
import { getValuesState } from 'core/controlsBus/selectors';
import { calculateLayoutSize } from 'core/dataBus/utils/geometry';
import { selectDependencyEdge } from 'core/dataBus/actions';
import { setActiveNamespace } from 'core/namespaceIntegration/actions';

class TreeDiagram extends React.Component {
  render() {
    // TODO: fix diagramZoom
    const {
      namespace,
      projectName,
      multiple,
      active,
      diagramZoom,
      layoutSize,
      sourceLayoutTree,
      onUnderLayerClick
    } = this.props;
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
      <div className={'TreeDiagram'}>
        {multiple ? (
          <p
            className={classNames('namespaceTitle', {
              activeTreeDiagram: multiple && active
            })}
          >
            {projectName}
          </p>
        ) : null}
        <Draggable bounds={bounds}>
          <svg
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="optimizeSpeed"
          >
            {sourceLayoutTree && (
              <React.Fragment>
                <UnderLayer width={width} height={height} onClick={onUnderLayerClick} />
                <SourceTree
                  namespace={namespace}
                  shiftToCenterPoint={shiftToCenterPoint}
                  areaHeight={height}
                />
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
  const { projectName } = getProjectMetadata(state, { namespace });
  const { diagramZoom } = getValuesState(state);

  return {
    namespace,
    projectName,
    diagramZoom,
    sourceLayoutTree,
    layoutSize: calculateLayoutSize(sourceLayoutTree)
  };
};

const mapDispatchToProps = (dispatch, props) => {
  const { namespace } = props;
  return {
    onUnderLayerClick: () => {
      dispatch(setActiveNamespace(namespace));
      dispatch(selectDependencyEdge(undefined, namespace));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TreeDiagram);
