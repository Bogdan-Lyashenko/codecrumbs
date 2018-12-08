import React from 'react';
import { connect } from 'react-redux';

import { NO_TRAIL_FLOW } from 'utils/constants';
import { CodeCrumbedFlowEdge } from 'components/treeDiagram/component/Edge/CodeCrumbEdge';

const FlowEdge = props => {
  const { shiftToCenterPoint, sortedFlowSteps, fileNodesMap, codeCrumbsMinimize } = props;

  return (
    <React.Fragment>
      {!codeCrumbsMinimize &&
        sortedFlowSteps.map((toItem, i, list) => {
          if (!i) return null;

          const fromItem = list[i - 1];
          const fromFile = fileNodesMap[fromItem.filePath];
          const toFile = fileNodesMap[toItem.filePath];

          const edgePoints = [fromItem, toItem].map(crumb => {
            const [cX, cY] = [crumb.y, crumb.x];
            return shiftToCenterPoint(cX, cY);
          });

          return (
            <CodeCrumbedFlowEdge
              key={`cc-flow-edge-${fromItem.name}-${toItem.name}`}
              singleCrumbSource={fromFile.children.length === 1}
              singleCrumbTarget={toFile.children.length === 1}
              sourcePosition={edgePoints[0]}
              targetPosition={edgePoints[1]}
              sourceName={fromItem.name}
              targetName={toItem.name}
            />
          );
        })}
    </React.Fragment>
  );
};

const getSortedFlowSteps = ({ codeCrumbedFlowsMap, selectedCrumbedFlowKey, fileNodesMap }) => {
  const currentFlow = codeCrumbedFlowsMap[selectedCrumbedFlowKey] || {};
  let sortedFlowSteps = [];
  Object.keys(currentFlow).forEach(filePath => {
    const steps = ((fileNodesMap[filePath] && fileNodesMap[filePath].children) || [])
      .filter(({ data }) => data.params.flow === selectedCrumbedFlowKey)
      .map(({ data, x, y }) => ({
        name: data.name,
        filePath,
        step: data.params.flowStep,
        flow: selectedCrumbedFlowKey,
        x,
        y
      }));

    sortedFlowSteps = sortedFlowSteps.concat(steps);
  });

  sortedFlowSteps.sort((a, b) => a.step - b.step);

  return sortedFlowSteps;
};

const mapStateToProps = state => {
  const { checkedState } = state.viewSwitches;
  const { fileNodesMap, selectedCrumbedFlowKey, codeCrumbedFlowsMap } = state.dataBus;

  const sortedFlowSteps =
    selectedCrumbedFlowKey !== NO_TRAIL_FLOW
      ? getSortedFlowSteps({
          codeCrumbedFlowsMap,
          selectedCrumbedFlowKey,
          fileNodesMap
        })
      : [];

  return {
    sortedFlowSteps,
    fileNodesMap,
    codeCrumbsMinimize: checkedState.codeCrumbsMinimize
  };
};

export default connect(mapStateToProps)(FlowEdge);
