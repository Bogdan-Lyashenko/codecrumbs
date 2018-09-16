import { ACTIONS } from './constants';
import { getTreeLayout } from 'utils/treeLayout';

export const setInitialSourceData = data => ({
  type: ACTIONS.SET_INITIAL_SOURCE_DATA,
  payload: data
});

export const calcFilesTreeLayoutNodes = () => (dispatch, getState) => {
  const state = getState();
  const { filesTree, closedFolders } = state.dataBus;
  const { checkedState } = state.viewSwitches;

  if (!filesTree) return;

  return dispatch({
    type: ACTIONS.UPDATE_FILES_TREE_LAYOUT_NODES,
    payload: getTreeLayout(filesTree, {
      includeFileChildren: checkedState.codeCrumbs,
      closedFolders
    })
  });
};

export const selectNode = fileNode => ({
  type: ACTIONS.SELECT_NODE,
  payload: fileNode
});

export const toggleFolder = folderNode => ({
  type: ACTIONS.TOGGLE_FOLDER,
  payload: folderNode
});

export const openAllFolders = () => ({
  type: ACTIONS.OPEN_ALL_FOLDERS
});

export const closeAllFolders = () => ({
  type: ACTIONS.CLOSE_ALL_FOLDERS
});

export const selectCodeCrumb = (fileNode, codeCrumb) => ({
  type: ACTIONS.SELECT_CODE_CRUMB,
  payload: { fileNode, codeCrumb }
});

export const setDependenciesEntryPoint = fileNode => ({
  type: ACTIONS.SET_DEPENDENCIES_ENTRY_POINT,
  payload: fileNode
});

export const selectDependencyEdge = (target, sources) => ({
  type: ACTIONS.SELECT_DEPENDENCY_EDGE,
  payload: target ? { target, sources } : null
});
