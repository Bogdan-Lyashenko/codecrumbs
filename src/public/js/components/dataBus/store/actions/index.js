import {
  getTreeLayout,
  getFilesForCurrentCcFlow,
  getCodeCrumbsMapForCurrentCcFlow
} from 'utils/treeLayout';
import { fetchFile } from 'utils/connection';

import { getFoldersForPaths, downloadObjectAsJsonFile, uploadFileAsObject } from './utils';
import { ACTIONS } from '../constants';
import { ACTIONS as VIEW_SWITCHES_ACTIONS } from 'components/controls/ViewSwitches/store/constants';

export const setInitialSourceData = payload => ({
  type: ACTIONS.SET_INITIAL_SOURCE_DATA,
  payload
});

export const setChangedSourceData = payload => ({
  type: ACTIONS.SET_CHANGED_SOURCE_DATA,
  payload
});

export const selectNode = fileNode => dispatch => {
  fetchFile(fileNode.path, { parseDependencies: true }).then(data =>
    dispatch({
      type: ACTIONS.SELECT_NODE,
      payload: { ...fileNode, ...data }
    })
  );
};

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

export const selectDependencyEdge = (target, sources, groupName) => dispatch => {
  dispatch({
    type: ACTIONS.SELECT_DEPENDENCY_EDGE,
    payload: target ? { target, sources, groupName } : null
  });

  if (target && sources) {
    Promise.all(sources.map(fetchFile)).then(files => {
      dispatch({
        type: ACTIONS.UPDATE_FILES,
        payload: files
      });
    });
  }
};

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
  const {
    sourceTree,
    openedFolders,
    activeItemsMap,
    codeCrumbedFlowsMap,
    selectedCrumbedFlowKey,
    filesMap
  } = state.dataBus;
  const { checkedState } = state.viewSwitches;

  if (!sourceTree) return;

  let activeCodeCrumbs = undefined;
  if (checkedState.codeCrumbsKeepOnlySelectedFlow && codeCrumbedFlowsMap[selectedCrumbedFlowKey]) {
    activeCodeCrumbs = getCodeCrumbsMapForCurrentCcFlow({
      codeCrumbedFlowsMap,
      selectedCrumbedFlowKey,
      filesMap
    });
  }

  return dispatch({
    type: ACTIONS.UPDATE_FILES_TREE_LAYOUT_NODES,
    payload: getTreeLayout(sourceTree, {
      includeFileChildren: checkedState.codeCrumbs && !checkedState.codeCrumbsMinimize,
      openedFolders,
      activeItemsMap,
      activeCodeCrumbs
    })
  });
};

export const setActiveItems = (filesList, foldersMap = {}) => (dispatch, getState) => {
  const state = getState();

  return dispatch({
    type: ACTIONS.SET_ACTIVE_ITEMS,
    payload: {
      ...(!state.viewSwitches.checkedState.sourceKeepOnlyActiveItems
        ? state.dataBus.activeItemsMap
        : {}),
      ...filesList.reduce((acc, item) => {
        //TODO:move this to util!
        acc[item] = true;
        return acc;
      }, {}),
      ...foldersMap
    }
  });
};

// TODO: refactor too long does too much
export const updateFoldersByActiveChildren = () => (dispatch, getState) => {
  const state = getState();

  const {
    filesMap,
    openedFolders,
    selectedNode,
    codeCrumbedFlowsMap,
    selectedCrumbedFlowKey
  } = state.dataBus;

  const {
    dependencies,
    codeCrumbs,
    sourceKeepOnlyActiveItems,
    codeCrumbsKeepOnlySelectedFlow
  } = state.viewSwitches.checkedState;

  const depFilePaths = dependencies ? Object.keys(selectedNode.dependencies || {}) : [];
  let ccFilePaths = codeCrumbs
    ? Object.keys(filesMap).filter(path => filesMap[path].hasCodecrumbs)
    : [];

  if (codeCrumbsKeepOnlySelectedFlow && codeCrumbedFlowsMap[selectedCrumbedFlowKey]) {
    const currentFlowFiles = getFilesForCurrentCcFlow({
      codeCrumbedFlowsMap,
      selectedCrumbedFlowKey,
      filesMap
    });

    ccFilePaths = ccFilePaths.filter(path => currentFlowFiles.includes(path));
  }

  const filesList = [selectedNode.path].concat(depFilePaths, ccFilePaths);
  if (!filesList.length) {
    sourceKeepOnlyActiveItems && dispatch(setActiveItems(filesList));
    return sourceKeepOnlyActiveItems ? dispatch(closeAllFolders()) : undefined;
  }

  const foldersMap = getFoldersForPaths(filesList, openedFolders, sourceKeepOnlyActiveItems);
  dispatch(setActiveItems(filesList, foldersMap));

  dispatch({
    type: ACTIONS.SET_FOLDERS_STATE,
    payload: foldersMap
  });
};

// TODO: group and move actions to different files
export const downloadStore = () => (dispatch, getState) => {
  const { viewSwitches, dataBus } = getState();

  const partialStateToSave = {
    viewSwitches: {
      checkedState: viewSwitches.checkedState,
      disabledState: viewSwitches.disabledState,
      valuesState: viewSwitches.valuesState
    },
    dataBus: {
      sourceTree: dataBus.sourceTree,
      filesMap: dataBus.filesMap,
      foldersMap: dataBus.foldersMap,
      codeCrumbedFlowsMap: dataBus.codeCrumbedFlowsMap,
      dependenciesRootEntryName: dataBus.dependenciesRootEntryName
    }
  };

  downloadObjectAsJsonFile(partialStateToSave);
};

export const uploadStore = file => dispatch => {
  uploadFileAsObject(file).then(object => {
    dispatch({ type: VIEW_SWITCHES_ACTIONS.SET_FULL_STATE, payload: object.data.viewSwitches });
    dispatch(setInitialSourceData(object.data.dataBus));
  });
};