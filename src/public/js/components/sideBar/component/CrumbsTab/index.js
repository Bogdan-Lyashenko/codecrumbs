import React from 'react';
import { connect } from 'react-redux';
import { Collapse, Alert } from 'antd';

import { NO_TRAIL_FLOW } from 'shared-with-server-src/constants';
import { getCodeCrumbsUserChoice } from 'core/dataBus/selectors';
import { getNamespacesList } from 'core/dataBus/selectors';
import { gatherFlowStepsData } from 'components/treeDiagram/component/Tree/CodeCrumbs/helpers';

import Code from '../Code';
import './index.scss';

const Panel = Collapse.Panel;

const CrumbsTab = props => {
  const { language, flowStepsFiles } = props;

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
                  language={language}
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
  const namespacesList = getNamespacesList(state);
  const { namespace } = props;

  const {
    selectedCrumbedFlowKey: currentSelectedCrumbedFlowKey,
    selectedCcFlowEdgeNodes,
    codeCrumbedFlowsMap
  } = getCodeCrumbsUserChoice(state, {
    namespace
  });

  const { ccFilesLayoutMapNs, sortedFlowSteps } = gatherFlowStepsData({
    currentSelectedCrumbedFlowKey,
    namespacesList,
    state
  });

  if (currentSelectedCrumbedFlowKey === NO_TRAIL_FLOW) {
    return {
      flowStepsFiles: getUnTrailedCodecrumbs(
        currentSelectedCrumbedFlowKey,
        codeCrumbedFlowsMap,
        ccFilesLayoutMapNs[namespace]
      )
    };
  }

  return {
    flowStepsFiles: (selectedCcFlowEdgeNodes
      ? [selectedCcFlowEdgeNodes.source, selectedCcFlowEdgeNodes.target]
      : sortedFlowSteps
    ).map(item => ({
      ...item,
      file: ccFilesLayoutMapNs[item.namespace][item.filePath].data
    }))
  };
};

const getUnTrailedCodecrumbs = (selectedCrumbedFlowKey, codeCrumbedFlowsMap, filesLayoutMap) => {
  let codecrumbs = [];
  const currentFlow = codeCrumbedFlowsMap[selectedCrumbedFlowKey];

  if (!currentFlow) {
    return codecrumbs;
  }

  Object.keys(currentFlow).forEach(filePath => {
    codecrumbs = codecrumbs.concat(
      ((filesLayoutMap[filePath] && filesLayoutMap[filePath].children) || [])
        .filter(({ data }) => data.params.flow === selectedCrumbedFlowKey)
        .map(({ data }) => ({
          crumbNodeLines: data.crumbNodeLines,
          file: filesLayoutMap[filePath].data
        }))
    );
  });

  return codecrumbs;
};

export default connect(mapStateToProps)(CrumbsTab);
