import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { getCheckedState } from 'core/controlsBus/selectors';
import { getCodeCrumbsUserChoice, getSourceLayout } from 'core/dataBus/selectors';
import { getCcPosition, isCodeCrumbSelected } from '../helpers';

import './index.scss';

const DetailsComponent = props => {
  const { name, details, position, selected } = props;

  // TODO: refactor
  const nameWidth = name ? name.length * 7.5 : 100;
  return (
    <div
      className={classNames('CcDetailsContainer', { CcDetailsSelected: selected })}
      style={{
        left: position.x,
        top: position.y + 8,
        width: nameWidth + 'px'
      }}
    >
      {details}
    </div>
  );
};

const DetailsSet = ({
  detailsEnabled,
  shiftToCenterPoint,
  ccAlightPoint,
  selectedCcFlowEdgeNodes,
  sortedFlowSteps,
  ccShiftIndexMap,
  namespace
}) => {
  if (!detailsEnabled) return null;

  const detailsPanels = [];

  sortedFlowSteps.forEach(crumb => {
    if (crumb.namespace !== namespace || !crumb.params || !crumb.params.details) {
      return null;
    }

    const [_, nY] = [crumb.y, crumb.x];
    const position = shiftToCenterPoint(
      getCcPosition(ccAlightPoint, ccShiftIndexMap[crumb.id]),
      nY
    );

    detailsPanels.push(
      <DetailsComponent
        key={crumb.id}
        details={crumb.params.details}
        name={crumb.name}
        position={position}
        selected={isCodeCrumbSelected(selectedCcFlowEdgeNodes, crumb)}
      />
    );
  });

  return <React.Fragment>{detailsPanels}</React.Fragment>;
};

const mapStateToProps = (state, props) => {
  const { codeCrumbsMinimize, codeCrumbsDetails } = getCheckedState(state);
  const { namespace } = props;

  const namespaceProps = { namespace };
  const { selectedCcFlowEdgeNodes } = getCodeCrumbsUserChoice(state, namespaceProps);
  const { ccAlightPoint } = getSourceLayout(state, namespaceProps);

  return {
    detailsEnabled: !codeCrumbsMinimize && codeCrumbsDetails,
    selectedCcFlowEdgeNodes,
    ccAlightPoint
  };
};

export default connect(mapStateToProps)(DetailsSet);
