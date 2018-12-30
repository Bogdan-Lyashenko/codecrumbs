import React from 'react';
import { connect } from 'react-redux';
import { Menu, Dropdown, Button } from 'antd';

import { NO_TRAIL_FLOW } from 'utils/constants';
import { selectCodeCrumbedFlow } from 'components/dataBus/store/actions';
import { getCodeCrumbsUserChoice } from 'components/dataBus/store/selectors';
import { getCheckedState } from 'components/controls/ViewSwitches/store/selectors';
import './index.scss';

const FlowSelect = ({
  codeCrumbsDiagramOn,
  codeCrumbsMinimize,
  codeCrumbedFlowsMap,
  onCodeCrumbedFlowSelect,
  selectedCrumbedFlowKey
}) => {
  if (!codeCrumbsDiagramOn || !Object.keys(codeCrumbedFlowsMap).length || codeCrumbsMinimize) {
    return null;
  }

  const noTrailLabel = '- no trail -';

  const menu = (
    <Menu>
      {Object.keys(codeCrumbedFlowsMap)
        .filter(key => key !== selectedCrumbedFlowKey)
        .map(flow => (
          <Menu.Item key={flow}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onCodeCrumbedFlowSelect(flow)}
            >
              {flow === NO_TRAIL_FLOW ? noTrailLabel : `# ${flow}`}
            </a>
          </Menu.Item>
        ))}
    </Menu>
  );

  return (
    <div className={'FlowSelect'}>
      <Dropdown overlay={menu} placement="bottomLeft">
        <Button size={'small'}>
          {selectedCrumbedFlowKey === NO_TRAIL_FLOW ? (
            noTrailLabel
          ) : (
            <React.Fragment>
              trail
              <span className={'flow'}>{` #${selectedCrumbedFlowKey}`}</span>
            </React.Fragment>
          )}
        </Button>
      </Dropdown>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const { codeCrumbsDiagramOn, codeCrumbsMinimize } = getCheckedState(state);
  const { codeCrumbedFlowsMap, selectedCrumbedFlowKey } = getCodeCrumbsUserChoice(state, props);

  return {
    codeCrumbsDiagramOn,
    codeCrumbsMinimize,
    codeCrumbedFlowsMap,
    selectedCrumbedFlowKey
  };
};

const mapDispatchToProps = {
  onCodeCrumbedFlowSelect: selectCodeCrumbedFlow
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlowSelect);
