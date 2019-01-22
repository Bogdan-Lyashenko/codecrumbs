import React from 'react';
import { connect } from 'react-redux';
import { Menu, Dropdown, Button } from 'antd';

import { NO_TRAIL_FLOW } from 'core/constants';
import { selectCodeCrumbedFlow } from 'core/dataBus/actions';
import { getCodeCrumbsUserChoice } from 'core/dataBus/selectors';
import { getCheckedState } from 'core/controlsBus/selectors';
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

const mapDispatchToProps = (dispatch, props) => {
  const { namespace } = props;

  return {
    onCodeCrumbedFlowSelect: flow => dispatch(selectCodeCrumbedFlow(flow, namespace))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlowSelect);
