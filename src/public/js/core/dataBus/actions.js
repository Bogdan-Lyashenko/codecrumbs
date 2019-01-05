import { fetchFile } from 'core/dataBus/connection';
import { ACTIONS as VIEW_SWITCHES_ACTIONS } from 'core/controlsBus/constants';
import { getCheckedState, getValuesState, getDisabledState } from 'core/controlsBus/selectors';

import { getFoldersForPaths, downloadObjectAsJsonFile, uploadFileAsObject } from './utils';
import {
  getTreeLayout,
  getFilesForCurrentCcFlow,
  getCodeCrumbsMapForCurrentCcFlow
} from './utils/treeLayout';

import { ACTIONS, DEFAULT_NAMESPACE } from './constants';
import {
  getSource,
  getSourceUserChoice,
  getCodeCrumbsUserChoice,
  getDependenciesUserChoice
} from './selectors';

export const setInitialSourceData = payload => ({
  type: ACTIONS.SET_INITIAL_SOURCE_DATA,
  payload
});

export const setChangedSourceData = payload => ({
  type: ACTIONS.SET_CHANGED_SOURCE_DATA,
  payload
});

export const selectNode = fileNode => dispatch => {
  if (process.env.STANDALONE) {
    return dispatch({
      type: ACTIONS.SELECT_NODE,
      payload: fileNode
    });
  }

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
  const { dependenciesShowDirectOnly } = getCheckedState(state);

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

export const selectCodeCrumbedFlow = (flow, props) => (dispatch, getState) => {
  const state = getState();

  const { selectedCrumbedFlowKey, codeCrumbedFlowsMap } = getCodeCrumbsUserChoice(state, props);
  const firstFlow = Object.keys(codeCrumbedFlowsMap || {})[0];

  dispatch({
    type: ACTIONS.SELECT_CODE_CRUMBED_FLOW,
    payload: flow ? flow : selectedCrumbedFlowKey || firstFlow
  });
};

export const calcFilesTreeLayoutNodes = props => (dispatch, getState) => {
  const state = getState();

  const { sourceTree, filesMap } = getSource(state, props);
  const { openedFolders, activeItemsMap } = getSourceUserChoice(state, props);
  const { codeCrumbedFlowsMap, selectedCrumbedFlowKey } = getCodeCrumbsUserChoice(state, props);

  const { codeCrumbsDiagramOn, codeCrumbsMinimize, codeCrumbsFilterFlow } = getCheckedState(state);

  if (!sourceTree) return;

  let activeCodeCrumbs = undefined;
  if (codeCrumbsFilterFlow && codeCrumbedFlowsMap[selectedCrumbedFlowKey]) {
    activeCodeCrumbs = getCodeCrumbsMapForCurrentCcFlow({
      codeCrumbedFlowsMap,
      selectedCrumbedFlowKey,
      filesMap
    });
  }

  return dispatch({
    type: ACTIONS.UPDATE_FILES_TREE_LAYOUT_NODES,
    payload: getTreeLayout(sourceTree, {
      includeFileChildren: codeCrumbsDiagramOn && !codeCrumbsMinimize,
      openedFolders,
      activeItemsMap,
      activeCodeCrumbs
    })
  });
};

export const setActiveItems = (filesList, foldersMap = {}, props) => (dispatch, getState) => {
  const state = getState();
  const { activeItemsMap } = getSourceUserChoice(state, props);
  const { sourceKeepOnlyActiveItems } = getCheckedState(state);

  return dispatch({
    type: ACTIONS.SET_ACTIVE_ITEMS,
    payload: {
      ...(!sourceKeepOnlyActiveItems ? activeItemsMap : {}),
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
export const updateFoldersByActiveChildren = props => (dispatch, getState) => {
  const state = getState();

  const { filesMap } = getSource(state, props);
  const { openedFolders, selectedNode } = getSourceUserChoice(state, props);
  const { codeCrumbedFlowsMap, selectedCrumbedFlowKey } = getCodeCrumbsUserChoice(state, props);

  const {
    dependenciesDiagramOn,
    codeCrumbsDiagramOn,
    sourceKeepOnlyActiveItems,
    codeCrumbsFilterFlow
  } = getCheckedState(state);

  const depFilePaths = dependenciesDiagramOn ? Object.keys(selectedNode.dependencies || {}) : [];
  let ccFilePaths = codeCrumbsDiagramOn
    ? Object.keys(filesMap).filter(path => filesMap[path].hasCodecrumbs)
    : [];

  if (codeCrumbsFilterFlow && codeCrumbedFlowsMap[selectedCrumbedFlowKey]) {
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
export const downloadStore = props => (dispatch, getState) => {
  const state = getState();

  const { sourceTree, filesMap, foldersMap } = getSource(state, props);
  const { dependenciesEntryName } = getDependenciesUserChoice(state, props);
  const { codeCrumbedFlowsMap } = getCodeCrumbsUserChoice(state, props);

  const partialStateToSave = {
    controlsBus: {
      checkedState: getCheckedState(state),
      valuesState: getValuesState(state),
      disabledState: getDisabledState(state)
    },
    dataBus: {
      [DEFAULT_NAMESPACE]: {
        sourceTree,
        filesMap,
        foldersMap,
        codeCrumbedFlowsMap,
        dependenciesEntryName
      }
    }
  };

  downloadObjectAsJsonFile(partialStateToSave);
};

export const uploadStore = file => dispatch => {
  uploadFileAsObject(file).then(object => dispatch(setPredefinedState(object.data)));
};

export const setPredefinedState = predefinedState => dispatch => {
  dispatch({
    type: VIEW_SWITCHES_ACTIONS.SET_FULL_STATE,
    payload: predefinedState.controlsBus
  });

  dispatch(setInitialSourceData(predefinedState.dataBus[DEFAULT_NAMESPACE]));
};
