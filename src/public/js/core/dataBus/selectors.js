import { createSelector } from 'reselect';

export const getNamespacesList = state => Object.keys(state.dataBus).sort();

export const getNamespaceState = (state, props = {}) => {
  const { namespace } = props;
  return state.dataBus[namespace];
};

export const getProjectMetadata = createSelector([getNamespaceState], namespaceState => {
  const { projectName, language, platformPathSeparator, fullFeaturesSupport } = namespaceState;

  return { projectName, language, platformPathSeparator, fullFeaturesSupport };
});

export const getTreeDiagramContentId = createSelector([getNamespaceState], namespaceState => {
  const { treeDiagramContentId } = namespaceState;
  return { id: treeDiagramContentId };
});

export const getSource = createSelector([getNamespaceState], namespaceState => {
  const { sourceTree, filesMap, foldersMap } = namespaceState;

  return {
    sourceTree,
    filesMap,
    foldersMap
  };
});

export const getSourceLayout = createSelector([getNamespaceState], namespaceState => {
  const {
    sourceLayoutTree,
    layoutSize,
    ccAlightPoint,
    filesLayoutMap,
    codecrumbsLayoutMap
  } = namespaceState;

  return {
    sourceLayoutTree,
    layoutSize,
    filesLayoutMap,
    codecrumbsLayoutMap,
    ccAlightPoint
  };
});

export const getSourceUserChoice = createSelector([getNamespaceState], namespaceState => {
  const { openedFolders, activeItemsMap, selectedNode } = namespaceState;

  return {
    openedFolders,
    activeItemsMap,
    selectedNode
  };
});

export const getDependenciesUserChoice = createSelector([getNamespaceState], namespaceState => {
  const { dependenciesEntryName, selectedDependencyEdgeNodes } = namespaceState;

  return {
    dependenciesEntryName,
    selectedDependencyEdgeNodes
  };
});

export const getCodeCrumbsUserChoice = createSelector([getNamespaceState], namespaceState => {
  const {
    selectedCodeCrumb,
    codeCrumbedFlowsMap,
    selectedCrumbedFlowKey,
    selectedCcFlowEdgeNodes
  } = namespaceState;

  return {
    selectedCodeCrumb,
    codeCrumbedFlowsMap,
    selectedCrumbedFlowKey,
    selectedCcFlowEdgeNodes
  };
});
