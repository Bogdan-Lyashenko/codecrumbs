import React from 'react';
import { connect } from 'react-redux';
import { Collapse, Alert } from 'antd';

import Code from '../Code';
import { getNodeLines } from '../shared/utils';
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
              <Panel header={`[${stepFile.step}] ${stepFile.file.path}`} key={i}>
                <Code
                  limitedHeight={true}
                  code={stepFile.file.fileCode}
                  crumbedLines={[getNodeLines(stepFile.crumbNode)]}
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

const mapStateToProps = state => {
  const { selectedNode, fileNodesMap, selectedCrumbedFlowKey, codeCrumbedFlowsMap } = state.dataBus;

  return {
    selectedNode,
    flowStepsFiles: getFlowStepsFiles(selectedCrumbedFlowKey, codeCrumbedFlowsMap, fileNodesMap)
  };
};

const getFlowStepsFiles = (selectedCrumbedFlowKey, codeCrumbedFlowsMap, fileNodesMap) => {
  let sortedFlowSteps = [];
  const currentFlow = codeCrumbedFlowsMap[selectedCrumbedFlowKey];

  if (!currentFlow) {
    return sortedFlowSteps;
  }

  Object.keys(currentFlow).forEach(filePath => {
    const steps = ((fileNodesMap[filePath] && fileNodesMap[filePath].children) || [])
      .filter(({ data }) => data.params.flow === selectedCrumbedFlowKey)
      .map(({ data }) => ({
        crumbNode: data.crumbNode,
        file: fileNodesMap[filePath].data,
        step: data.params.flowStep
      }));

    sortedFlowSteps = sortedFlowSteps.concat(steps);
  });

  sortedFlowSteps.sort((a, b) => a.step - b.step);
  return sortedFlowSteps;
};

export default connect(mapStateToProps)(CrumbsTab);
