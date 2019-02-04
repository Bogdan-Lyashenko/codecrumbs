import React from 'react';
import { connect } from 'react-redux';

import { getCheckedState } from 'core/controlsBus/selectors';
import { getCodeCrumbsUserChoice, getSourceLayout } from 'core/dataBus/selectors';

import './index.scss';

const DetailsComponent = props => {
  const { name, details, position, singleCrumb } = props;

  // TODO: refactor
  const nameWidth = name ? name.length * 7.5 : 100;
  return (
    <div
      className={'CcDetailsContainer'}
      style={{
        left: position.x - (singleCrumb ? 20 : 0),
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
  codecrumbsLayoutMap,
  shiftToCenterPoint,
  selectedCrumbedFlowKey
}) => {
  if (!detailsEnabled) return null;

  const detailsPanels = [];

  Object.keys(codecrumbsLayoutMap).forEach(filePath => {
    const codecrumbs = (codecrumbsLayoutMap[filePath].children || [])
      .filter(({ data }) => data.params.flow === selectedCrumbedFlowKey)
      .map(({ data, x, y }) => ({
        name: data.name,
        details: data.params.details,
        filePath,
        x,
        y
      }));

    codecrumbs.forEach((ccNode, i) => {
      if (!ccNode || !ccNode.details) {
        return null;
      }

      const [nX, nY] = [ccNode.y, ccNode.x];
      const position = shiftToCenterPoint(nX, nY);

      detailsPanels.push(
        <DetailsComponent
          key={filePath + i}
          details={ccNode.details}
          name={ccNode.name}
          position={position}
          singleCrumb={codecrumbs.length === 1}
        />
      );
    });
  });

  return <React.Fragment>{detailsPanels}</React.Fragment>;
};

const mapStateToProps = (state, props) => {
  const { codeCrumbsMinimize, codeCrumbsDetails } = getCheckedState(state);
  const { namespace } = props;

  const namespaceProps = { namespace };
  const { codecrumbsLayoutMap } = getSourceLayout(state, namespaceProps);
  const { selectedCrumbedFlowKey } = getCodeCrumbsUserChoice(state, namespaceProps);

  return {
    codecrumbsLayoutMap,
    selectedCrumbedFlowKey,
    detailsEnabled: !codeCrumbsMinimize && codeCrumbsDetails
  };
};
export default connect(mapStateToProps)(DetailsSet);
