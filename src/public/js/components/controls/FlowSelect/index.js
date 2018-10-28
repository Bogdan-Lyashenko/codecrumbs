import React from 'react';
import { connect } from 'react-redux';
import { Menu, Dropdown, Button } from 'antd';

import { selectCodeCrumbedFlow } from 'components/dataBus/store/actions';
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
              {flow}
            </a>
          </Menu.Item>
        ))}
    </Menu>
  );

  return (
    <div className={'FlowSelect'}>
      <Dropdown overlay={menu} placement="bottomLeft">
        <Button size={'small'}>
          trail
          {selectedCrumbedFlowKey ? (
            <span className={'flow'}>{` #${selectedCrumbedFlowKey}`}</span>
          ) : null}
        </Button>
      </Dropdown>
    </div>
  );
};

const mapStateToProps = state => {
  const { checkedState } = state.viewSwitches;
  const { codeCrumbedFlowsMap, selectedCrumbedFlowKey } = state.dataBus;

  return {
    codeCrumbsDiagramOn: checkedState.codeCrumbs,
    codeCrumbsMinimize: checkedState.codeCrumbsMinimize,
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
