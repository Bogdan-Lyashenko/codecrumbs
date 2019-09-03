import { getCodeCrumbsUserChoice, getSourceLayout } from '../../dataBus/selectors';
import { NO_TRAIL_FLOW } from '../../../shared-constants';

export const gatherFlowStepsData = (state, { namespacesList, currentSelectedCrumbedFlowKey }) => {
  const flowStepsData = namespacesList.reduce(
    (acc, ns) => {
      const namespaceProps = { namespace: ns };
      const { selectedCrumbedFlowKey, codeCrumbedFlowsMap } = getCodeCrumbsUserChoice(
        state,
        namespaceProps
      );

      if (currentSelectedCrumbedFlowKey !== selectedCrumbedFlowKey) {
        return acc;
      }

      const { codecrumbsLayoutMap, ccAlightPoint } = getSourceLayout(state, namespaceProps);

      const flowSteps = getFlowSteps({
        namespace: ns,
        codeCrumbedFlowsMap,
        selectedCrumbedFlowKey,
        codecrumbsLayoutMap
      });

      return {
        flowSteps,
        sortedFlowSteps:
          selectedCrumbedFlowKey !== NO_TRAIL_FLOW
            ? [...acc.sortedFlowSteps, ...flowSteps].sort(stepSorter)
            : [],
        involvedNsData: {
          ...acc.involvedNsData,
          [ns]: { codecrumbsLayoutMap, ccAlightPoint }
        }
      };
    },
    { involvedNsData: {}, flowSteps: [], sortedFlowSteps: [] }
  );

  return {
    ...flowStepsData,
    ccShiftIndexMap: createCcShiftIndexMap(flowStepsData.sortedFlowSteps),
    maxWidth: getMaxWidthForNs(state, { namespacesList })
  };
};

const stepSorter = (a, b) => a.step - b.step;

const getFlowSteps = ({
  namespace,
  codeCrumbedFlowsMap,
  selectedCrumbedFlowKey,
  codecrumbsLayoutMap
}) => {
  const currentFlow = codeCrumbedFlowsMap[selectedCrumbedFlowKey] || {};

  return Object.keys(currentFlow).reduce((flowSteps, filePath) => {
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

    return [...flowSteps, ...steps];
  }, []);
};

const createCcShiftIndexMap = sortedFlowSteps => {
  const ccMap = {};
  let shiftOrderIndex = 0;

  sortedFlowSteps.forEach((crumb, i, list) => {
    if (!i) {
      ccMap[crumb.id] = shiftOrderIndex;
      return;
    }

    if (crumb.x < list[i - 1].x) {
      shiftOrderIndex++;
    }

    ccMap[crumb.id] = shiftOrderIndex;
  });

  return ccMap;
};

const getMaxWidthForNs = (state, { namespacesList }) =>
  namespacesList.reduce((maxWidth, namespace) => {
    const { layoutSize } = getSourceLayout(state, { namespace }); // TODO: double select for getSourceLayout, use from above
    return layoutSize && layoutSize.width > maxWidth ? layoutSize.width : maxWidth;
  }, 0);
