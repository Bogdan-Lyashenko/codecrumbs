import { createSelector } from 'reselect';

import { DEFAULT_NAMESPACE } from './constants';

export const getNamespaceState = (state, props = { namespace: DEFAULT_NAMESPACE }) =>
  state.dataBus[props.namespace];

export const getSource = createSelector([getNamespaceState], namespaceState => {
  const { sourceTree, filesMap, foldersMap } = namespaceState;

  return {
    sourceTree,
    filesMap,
    foldersMap
  };
});

export const getSourceLayout = createSelector([getNamespaceState], namespaceState => {
  const { sourceLayoutTree, filesLayoutMap } = namespaceState;

  return {
    sourceLayoutTree,
    filesLayoutMap
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
  const {
    dependenciesRootEntryName,
    dependenciesEntryPoint,
    selectedDependencyEdgeNodes
  } = namespaceState;

  return {
    dependenciesRootEntryName,
    dependenciesEntryPoint,
    selectedDependencyEdgeNodes
  };
});

export const getCodeCrumbsUserChoice = createSelector([getNamespaceState], namespaceState => {
  const { selectedCodeCrumb, codeCrumbedFlowsMap, selectedCrumbedFlowKey } = namespaceState;

  return {
    selectedCodeCrumb,
    codeCrumbedFlowsMap,
    selectedCrumbedFlowKey
  };
});
