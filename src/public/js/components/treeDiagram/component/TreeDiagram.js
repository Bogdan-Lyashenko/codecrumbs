import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import SourceTree from './Tree/Source/';
import CodeCrumbsExtraInfo from './Tree/CodeCrumbs/ExtraInfo';
import { UnderLayer } from './UnderLayer';
import './TreeDiagram.less';

import { buildShiftToPoint } from '../../../core/dataBus/utils/geometry';
import {
  getProjectMetadata,
  getSourceLayout,
  getCodeCrumbsUserChoice,
  getNamespacesList
} from '../../../core/dataBus/selectors';
import { getCheckedState, getValuesState } from '../../../core/controlsBus/selectors';
import {
  selectDependencyEdge,
  selectCcFlowEdge,
  saveTreeDiagramContentId
} from '../../../core/dataBus/actions';
import { setActiveNamespace } from '../../../core/namespaceIntegration/actions';
import { gatherFlowStepsData, getMaxWidthForNs } from './Tree/CodeCrumbs/helpers';

class TreeDiagram extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.layoutSize && this.props.layoutSize) {
      this.props.saveContentId(this.treeDiagramContent.getAttribute('id'));
    }
  }

  render() {
    // TODO: fix diagramZoom
    const {
      namespace,
      projectName,
      codeCrumbsDiagramOn,
      multiple,
      active,
      diagramZoom,
      layoutSize,
      maxWidth,
      sourceLayoutTree,
      onUnderLayerClick,
      flowSteps,
      sortedFlowSteps,
      involvedNsData,
      ccShiftIndexMap
    } = this.props;

    if (!layoutSize) {
      return null;
    }

    const { width, height, xShift, yShift } = layoutSize;
    const shiftToCenterPoint = buildShiftToPoint({
      x: xShift,
      y: yShift
    });

    return (
      <div className={classNames('TreeDiagram', { border: multiple })}>
        {multiple ? (
          <p
            className={classNames('namespaceTitle', {
              activeTreeDiagram: multiple && active
            })}
          >
            {projectName}
          </p>
        ) : null}
        <div
          id={`TreeDiagram-${namespace}-content`}
          className={'content'}
          ref={el => (this.treeDiagramContent = el)}
        >
          <svg
            width={maxWidth || width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="optimizeSpeed"
          >
            {sourceLayoutTree && (
              <React.Fragment>
                <UnderLayer width={maxWidth || width} height={height} onClick={onUnderLayerClick} />
                <SourceTree
                  namespace={namespace}
                  shiftToCenterPoint={shiftToCenterPoint}
                  areaHeight={height}
                  sortedFlowSteps={sortedFlowSteps}
                  involvedNsData={involvedNsData}
                  ccShiftIndexMap={ccShiftIndexMap}
                />
              </React.Fragment>
            )}
          </svg>
          {codeCrumbsDiagramOn ? (
            <CodeCrumbsExtraInfo
              namespace={namespace}
              shiftToCenterPoint={shiftToCenterPoint}
              ccShiftIndexMap={ccShiftIndexMap}
              sortedFlowSteps={sortedFlowSteps}
              flowSteps={flowSteps}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { namespace } = props;
  const { sourceLayoutTree, layoutSize } = getSourceLayout(state, { namespace });
  if (!sourceLayoutTree) {
    return {};
  }

  const { projectName } = getProjectMetadata(state, { namespace });
  const { diagramZoom } = getValuesState(state);
  const { codeCrumbsDiagramOn } = getCheckedState(state);

  let extendedCcProps = {};
  if (codeCrumbsDiagramOn) {
    const codeCrumbsUserChoice = getCodeCrumbsUserChoice(state, {
      namespace
    });

    const namespacesList = getNamespacesList(state);
    const { flowSteps, sortedFlowSteps, involvedNsData, ccShiftIndexMap } = gatherFlowStepsData(
      state,
      {
        currentSelectedCrumbedFlowKey: codeCrumbsUserChoice.selectedCrumbedFlowKey,
        namespacesList
      }
    );

    const maxWidth = getMaxWidthForNs(state, { namespacesList });

    extendedCcProps = {
      flowSteps,
      sortedFlowSteps,
      involvedNsData,
      ccShiftIndexMap,
      maxWidth
    };
  }

  return {
    namespace,
    projectName,
    codeCrumbsDiagramOn,
    diagramZoom,
    sourceLayoutTree,
    layoutSize,
    ...extendedCcProps
  };
};

const mapDispatchToProps = (dispatch, props) => {
  const { namespace } = props;
  return {
    onUnderLayerClick: () => {
      dispatch(setActiveNamespace(namespace));
      dispatch(selectDependencyEdge(undefined, namespace));
      dispatch(selectCcFlowEdge(undefined, namespace));
    },
    saveContentId: ref => dispatch(saveTreeDiagramContentId(ref, namespace))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TreeDiagram);
