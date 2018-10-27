import { ACTIONS } from './constants';
import { getTreeLayout } from 'utils/treeLayout';
import { DIR_NODE_TYPE, FOLDER_OPEN_STATE } from 'utils/constants';

export const setInitialSourceData = payload => ({
  type: ACTIONS.SET_INITIAL_SOURCE_DATA,
  payload
});

export const setChangedSourceData = payload => ({
  type: ACTIONS.SET_CHANGED_SOURCE_DATA,
  payload
});

export const selectNode = fileNode => ({
  type: ACTIONS.SELECT_NODE,
  payload: fileNode
});

/**
  TODO:
 openedFolders: { example-project/store: true }
 instead of true false use 0 - closed, 1 - opened but not active filtered, 2 - all opened

 */
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

export const selectDependencyEdge = (target, sources, groupName) => ({
  type: ACTIONS.SELECT_DEPENDENCY_EDGE,
  payload: target ? { target, sources, groupName } : null
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

export const calcFilesTreeLayoutNodes = () => (dispatch, getState) => {
  const state = getState();
  const { filesTree, openedFolders, activeItemsMap } = state.dataBus;
  const { checkedState } = state.viewSwitches;

  if (!filesTree) return;

  return dispatch({
    type: ACTIONS.UPDATE_FILES_TREE_LAYOUT_NODES,
    payload: getTreeLayout(filesTree, {
      includeFileChildren: checkedState.codeCrumbs && !checkedState.codeCrumbsMinimize,
      openedFolders,
      activeItemsMap
    })
  });
};

export const setActiveItems = (filesList, foldersMap = {}) => ({
  type: ACTIONS.SET_ACTIVE_ITEMS,
  payload: {
    ...filesList.reduce((acc, item) => {
      //TODO:move this to util!
      acc[item] = true;
      return acc;
    }, {}),
    ...foldersMap
  }
});

export const updateFoldersByActiveChildren = () => (dispatch, getState) => {
  const state = getState();
  const { filesMap, filteredDependenciesAllModulesMap, openedFolders } = state.dataBus;
  const { dependencies, codeCrumbs, sourceKeepOnlyActiveFolders } = state.viewSwitches.checkedState;

  const depFilePaths = dependencies ? Object.keys(filteredDependenciesAllModulesMap) : [];
  const ccFilePaths = codeCrumbs
    ? Object.keys(filesMap).filter(path => filesMap[path].hasCodecrumbs)
    : [];

  const filesList = depFilePaths.concat(ccFilePaths);
  if (!filesList.length) {
    sourceKeepOnlyActiveFolders && dispatch(setActiveItems(filesList));
    return sourceKeepOnlyActiveFolders ? dispatch(closeAllFolders()) : undefined;
  }

  const foldersMap = getFoldersForPaths(filesList, openedFolders, sourceKeepOnlyActiveFolders);
  dispatch(setActiveItems(filesList, foldersMap));

  dispatch({
    type: ACTIONS.SET_FOLDERS_STATE,
    payload: {
      folders: foldersMap,
      override: sourceKeepOnlyActiveFolders //TODO: refactor
    }
  });
};

const getFoldersForPaths = (paths, openedFolders, override) =>
  paths.reduce((res, path) => {
    const folders = path.split('/');
    folders.pop(); //remove file

    folders.forEach((f, i, l) => {
      const key = l.slice(0, i + 1).join('/');
      res[key] =
        override || !openedFolders[key]
          ? FOLDER_OPEN_STATE.OPEN_ACTIVE_CHILDREN_ONLY
          : openedFolders[key];
    });

    return res;
  }, {});
