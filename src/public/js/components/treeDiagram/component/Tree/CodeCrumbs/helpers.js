import { getCodeCrumbsUserChoice, getSourceLayout } from 'core/dataBus/selectors';
import { NO_TRAIL_FLOW } from 'core/constants';

export const isCodeCrumbsEqual = (cc, currentCc) =>
  cc.name === currentCc.name && cc.flowStep === currentCc.flowStep;

export const isCodeCrumbSelected = (selectedCcFlowEdgeNodes, cc) => {
  if (!selectedCcFlowEdgeNodes) return false;

  return (
    isCodeCrumbsEqual(selectedCcFlowEdgeNodes.source, cc) ||
    isCodeCrumbsEqual(selectedCcFlowEdgeNodes.target, cc)
  );
};

const stepSorter = (a, b) => a.step - b.step;

// TODO: this should be done in reducer ?
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
        ...data,
        namespace,
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

export const gatherFlowStepsData = ({ namespacesList, currentSelectedCrumbedFlowKey, state }) =>
  namespacesList.reduce(
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
        ccFilesLayoutMapNs: {
          ...acc.ccFilesLayoutMapNs,
          [ns]: codecrumbsLayoutMap
        }
      };
    },
    { ccFilesLayoutMapNs: {}, sortedFlowSteps: [] }
  );
