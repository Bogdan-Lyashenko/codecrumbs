import { ACTIONS } from './constants';
import { getTreeLayout } from 'utils/treeLayout';
import { DIR_NODE_TYPE } from 'utils/constants';

export const setInitialSourceData = payload => ({
  type: ACTIONS.SET_INITIAL_SOURCE_DATA,
  payload
});

export const setChangedSourceData = payload => ({
  type: ACTIONS.SET_CHANGED_SOURCE_DATA,
  payload
});

export const calcFilesTreeLayoutNodes = () => (dispatch, getState) => {
  const state = getState();
  const { filesTree, openedFolders } = state.dataBus;
  const { checkedState } = state.viewSwitches;

  if (!filesTree) return;

  return dispatch({
    type: ACTIONS.UPDATE_FILES_TREE_LAYOUT_NODES,
    payload: getTreeLayout(filesTree, {
      includeFileChildren: checkedState.codeCrumbs && !checkedState.codeCrumbsMinimize,
      openedFolders
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

export const setDependenciesEntryPoint = fileNode => (dispatch, getState) => {
  const state = getState();
  const { dependenciesShowDirectOnly } = state.viewSwitches.checkedState;

  return dispatch({
    type: ACTIONS.SET_DEPENDENCIES_ENTRY_POINT,
    payload: {
      fileNode,
      dependenciesShowDirectOnly
    }
  });
};

export const selectDependencyEdge = (target, sources) => ({
  type: ACTIONS.SELECT_DEPENDENCY_EDGE,
  payload: target ? { target, sources } : null
});

export const selectCodeCrumbedFlow = flow => (dispatch, getState) => {
  const state = getState();

  const { selectedCrumbedFlowKey, codeCrumbedFlowsMap } = state.dataBus;
  const firstFlow = Object.keys(codeCrumbedFlowsMap || {})[0];

  dispatch({
    type: ACTIONS.SELECT_CODE_CRUMBED_FLOW,
    payload: flow ? flow : selectedCrumbedFlowKey || firstFlow
  });
};

// TODO: call on dep entry point change as well
// TODO: mark somehow folder opened by user, to don't close it again!
// add check box to source tree so all this smart behaviour can be disabled
export const updateFoldersByActiveChildren = () => (dispatch, getState) => {
  const state = getState();
  const { filesMap, filteredDependenciesAllModulesMap } = state.dataBus;
  const { dependencies, codeCrumbs, sourceKeepOnlyActiveFolders } = state.viewSwitches.checkedState;

  const depFilePaths = dependencies ? Object.keys(filteredDependenciesAllModulesMap) : [];
  const ccFilePaths = codeCrumbs
    ? Object.keys(filesMap).filter(path => filesMap[path].hasCodecrumbs)
    : [];

  if (!depFilePaths.length && !ccFilePaths.length) {
    return sourceKeepOnlyActiveFolders ? dispatch(closeAllFolders()) : undefined;
  }

  dispatch({
    type: ACTIONS.SET_FOLDERS_STATE,
    payload: {
      folders: getFoldersForPaths(depFilePaths.concat(ccFilePaths)),
      override: sourceKeepOnlyActiveFolders
    }
  });
};

const getFoldersForPaths = paths =>
  paths.reduce((res, path) => {
    const folders = path.split('/');
    folders.pop(); //remove file

    folders.forEach((f, i, l) => {
      const key = l.slice(0, i + 1).join('/');
      res[key] = true;
    });

    return res;
  }, {});
