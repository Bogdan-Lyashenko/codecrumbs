import React from 'react';
import { connect } from 'react-redux';
import { Collapse, Alert } from 'antd';

import {
  getSourceLayout,
  getSourceUserChoice,
  getCodeCrumbsUserChoice
} from 'components/dataBus/store/selectors';

import Code from '../Code';
import './index.scss';

const Panel = Collapse.Panel;

const CrumbsTab = props => {
  const { flowStepsFiles } = props;

  return (
    <div className={'CrumbsTab'}>
      {flowStepsFiles.length ? (
        <Collapse
          bordered={false}
          defaultActiveKey={Array(flowStepsFiles.length)
            .fill()
            .map((item, index) => `${index}`)}
        >
          {flowStepsFiles.map((stepFile, i) => {
            return (
              <Panel
                header={`[${typeof stepFile.step !== 'undefined' ? stepFile.step : '*'}] ${
                  stepFile.file.path
                }`}
                key={i}
              >
                <Code
                  limitedHeight={true}
                  code={stepFile.file.fileCode || ''}
                  crumbedLines={[stepFile.crumbNodeLines]}
                />
              </Panel>
            );
          })}
        </Collapse>
      ) : (
        <Alert
          message="C-mon, my dear friend, select crumbs trail, what are you waiting for?"
          type="info"
          showIcon
        />
      )}
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const { selectedNode } = getSourceUserChoice(state, props);
  const { filesLayoutMap } = getSourceLayout(state, props);
  const { selectedCrumbedFlowKey, codeCrumbedFlowsMap } = getCodeCrumbsUserChoice(state, props);

  return {
    selectedNode,
    flowStepsFiles: getFlowStepsFiles(selectedCrumbedFlowKey, codeCrumbedFlowsMap, filesLayoutMap)
  };
};

const getFlowStepsFiles = (selectedCrumbedFlowKey, codeCrumbedFlowsMap, filesLayoutMap) => {
  let sortedFlowSteps = [];
  const currentFlow = codeCrumbedFlowsMap[selectedCrumbedFlowKey];

  if (!currentFlow) {
    return sortedFlowSteps;
  }

  Object.keys(currentFlow).forEach(filePath => {
    const steps = ((filesLayoutMap[filePath] && filesLayoutMap[filePath].children) || [])
      .filter(({ data }) => data.params.flow === selectedCrumbedFlowKey)
      .map(({ data }) => ({
        crumbNodeLines: data.crumbNodeLines,
        file: filesLayoutMap[filePath].data,
        step: data.params.flowStep
      }));

    sortedFlowSteps = sortedFlowSteps.concat(steps);
  });

  sortedFlowSteps.sort((a, b) => a.step - b.step);
  return sortedFlowSteps;
};

export default connect(mapStateToProps)(CrumbsTab);
