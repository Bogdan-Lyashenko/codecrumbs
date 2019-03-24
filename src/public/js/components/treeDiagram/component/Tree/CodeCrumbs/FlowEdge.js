import React from 'react';
import { connect } from 'react-redux';

import { NO_TRAIL_FLOW } from 'core/constants';
import {
  CodeCrumbedFlowEdge,
  ExternalEdge
} from 'components/treeDiagram/component/Edge/CodeCrumbEdge';

import { getCheckedState } from 'core/controlsBus/selectors';
import {
  getNamespacesList,
  getSourceLayout,
  getCodeCrumbsUserChoice
} from 'core/dataBus/selectors';
import { selectCcFlowEdge } from 'core/dataBus/actions';
import { isCodeCrumbsEqual } from './helpers';

const FlowEdge = props => {
  const {
    namespace,
    areaHeight,
    namespacesList,
    shiftToCenterPoint,
    sortedFlowSteps,
    ccfilesLayoutMapNs,
    codeCrumbsMinimize,
    onFlowEdgeClick,
    selectedCcFlowEdgeNodes
  } = props;

  const codecrumbsLayoutMap = ccfilesLayoutMapNs[namespace];
  const ccNamespacesKeys = Object.keys(ccfilesLayoutMapNs || {});

  return (
    <React.Fragment>
      {!codeCrumbsMinimize &&
        sortedFlowSteps.map((toItem, i, list) => {
          if (!i) return null;

          const fromItem = list[i - 1];
          if (fromItem.namespace !== namespace && toItem.namespace !== namespace) {
            return null;
          }

          const edgePoints = [fromItem, toItem].map(crumb => {
            const [cX, cY] = [crumb.y, crumb.x];
            return shiftToCenterPoint(cX, cY);
          });

          const edgeBaseProps = {
            key: `cc-external-edge-${fromItem.name}-${toItem.name}`,
            sourcePosition: edgePoints[0],
            targetPosition: edgePoints[1],
            onClick: () => onFlowEdgeClick(fromItem, toItem, ccNamespacesKeys),
            selected: isFlowEdgeSelected(selectedCcFlowEdgeNodes, fromItem, toItem)
          };

          const namespaceIndex = namespacesList.indexOf(namespace);

          if (fromItem.namespace === namespace && toItem.namespace !== namespace) {
            const fromFile = codecrumbsLayoutMap[fromItem.filePath];
            const toFile = ccfilesLayoutMapNs[toItem.namespace][toItem.filePath];

            return (
              <ExternalEdge
                {...edgeBaseProps}
                singleCrumbSource={fromFile.children.length === 1}
                singleCrumbTarget={toFile.children.length === 1}
                areaHeight={areaHeight}
                topBottom={namespaceIndex < namespacesList.indexOf(toItem.namespace)}
                firstPart={true}
              />
            );
          }

          if (fromItem.namespace !== namespace && toItem.namespace === namespace) {
            const fromFile = ccfilesLayoutMapNs[fromItem.namespace][fromItem.filePath];
            const toFile = codecrumbsLayoutMap[toItem.filePath];

            return (
              <ExternalEdge
                {...edgeBaseProps}
                singleCrumbSource={fromFile.children.length === 1}
                singleCrumbTarget={toFile.children.length === 1}
                areaHeight={areaHeight}
                topBottom={namespaceIndex < namespacesList.indexOf(fromItem.namespace)}
              />
            );
          }

          const fromFile = codecrumbsLayoutMap[fromItem.filePath];
          const toFile = codecrumbsLayoutMap[toItem.filePath];

          return (
            <CodeCrumbedFlowEdge
              {...edgeBaseProps}
              singleCrumbSource={fromFile.children.length === 1}
              singleCrumbTarget={toFile.children.length === 1}
              sourceName={fromItem.name}
              targetName={toItem.name}
            />
          );
        })}
    </React.Fragment>
  );
};

const isFlowEdgeSelected = (selectedCcFlowEdgeNodes, currentSource, currentTarget) => {
  if (!selectedCcFlowEdgeNodes) return false;

  const { source, target } = selectedCcFlowEdgeNodes;
  return isCodeCrumbsEqual(source, currentSource) && isCodeCrumbsEqual(target, currentTarget);
};

const stepSorter = (a, b) => a.step - b.step;

// TODO: this should be done in reducer
const getSortedFlowSteps = ({
  namespace,
  codeCrumbedFlowsMap,
  selectedCrumbedFlowKey,
  codecrumbsLayoutMap
}) => {
  const currentFlow = codeCrumbedFlowsMap[selectedCrumbedFlowKey] || {};
  let sortedFlowSteps = [];

  Object.keys(currentFlow).forEach(filePath => {
    const steps = ((codecrumbsLayoutMap[filePath] && codecrumbsLayoutMap[filePath].children) || [])
      .filter(({ data }) => data.params.flow === selectedCrumbedFlowKey)
      .map(({ data, x, y }) => ({
        namespace,
        name: data.name,
        filePath,
        step: data.params.flowStep,
        flow: selectedCrumbedFlowKey,
        x,
        y
      }));

    sortedFlowSteps = sortedFlowSteps.concat(steps);
  });

  sortedFlowSteps.sort(stepSorter);

  return sortedFlowSteps;
};

const mapStateToProps = (state, props) => {
  const { codeCrumbsMinimize } = getCheckedState(state);
  const namespacesList = getNamespacesList(state);
  const { namespace } = props;

  const {
    selectedCrumbedFlowKey: currentSelectedCrumbedFlowKey,
    selectedCcFlowEdgeNodes
  } = getCodeCrumbsUserChoice(state, {
    namespace
  });

  const gatheredFlowsData = namespacesList.reduce(
    (acc, ns) => {
      const namespaceProps = { namespace: ns };
      const { selectedCrumbedFlowKey, codeCrumbedFlowsMap } = getCodeCrumbsUserChoice(
        state,
        namespaceProps
      );

      if (currentSelectedCrumbedFlowKey !== selectedCrumbedFlowKey) {
        return acc;
      }

      const { codecrumbsLayoutMap } = getSourceLayout(state, namespaceProps);

      const sortedFlowSteps =
        selectedCrumbedFlowKey !== NO_TRAIL_FLOW
          ? getSortedFlowSteps({
              namespace: ns,
              codeCrumbedFlowsMap,
              selectedCrumbedFlowKey,
              codecrumbsLayoutMap
            })
          : [];

      return {
        sortedFlowSteps: [...acc.sortedFlowSteps, ...sortedFlowSteps].sort(stepSorter),
        ccfilesLayoutMapNs: {
          ...acc.ccfilesLayoutMapNs,
          [ns]: codecrumbsLayoutMap
        }
      };
    },
    { ccfilesLayoutMapNs: {}, sortedFlowSteps: [] }
  );

  return {
    namespacesList,
    codeCrumbsMinimize,
    selectedCcFlowEdgeNodes,
    ...gatheredFlowsData
  };
};

// TODO: can be moved to action
const mapDispatchToProps = dispatch => ({
  onFlowEdgeClick: (source, target, ccNamespacesKeys) => {
    dispatch(selectCcFlowEdge({ source, target }, source.namespace));

    // case with external edge
    if (source.namespace !== target.namespace) {
      dispatch(selectCcFlowEdge({ source, target }, target.namespace));
    }

    ccNamespacesKeys.forEach(ns => {
      if (ns !== source.namespace && ns !== target.namespace) {
        dispatch(selectCcFlowEdge(undefined, ns));
      }
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlowEdge);
