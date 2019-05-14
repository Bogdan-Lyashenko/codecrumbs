import { requestFetchFile, openFileInEditor } from 'core/dataBus/connection';
import { ACTIONS as VIEW_SWITCHES_ACTIONS } from 'core/controlsBus/constants';
import { ACTIONS as NAMESPACE_INTEGRATION_ACTIONS } from 'core/namespaceIntegration/constants';
import { getCheckedState, getValuesState, getDisabledState } from 'core/controlsBus/selectors';

import { getFoldersForPaths, downloadObjectAsJsonFile, uploadFileAsObject } from './utils';
import {
  getTreeLayout,
  getFilesForCurrentCcFlow,
  getCodeCrumbsMapForCurrentCcFlow
} from './utils/treeLayout';

import { ACTIONS } from './constants';
import {
  getNamespacesList,
  getSource,
  getSourceUserChoice,
  getCodeCrumbsUserChoice,
  getDependenciesUserChoice,
  getProjectMetadata
} from './selectors';

export const setInitialSourceData = (payload, namespace) => ({
  type: ACTIONS.SET_INITIAL_SOURCE_DATA,
  payload,
  namespace
});

export const setChangedSourceData = ({ newlyAddedFlow, ...payload }, namespace) => dispatch => {
  dispatch({
    type: ACTIONS.SET_CHANGED_SOURCE_DATA,
    payload,
    namespace
  });

  if (newlyAddedFlow) {
    dispatch(selectCodeCrumbedFlow(newlyAddedFlow, namespace));
  }
};

export const selectNode = (fileNode, namespace) => dispatch => {
  dispatch({
    type: ACTIONS.SELECT_NODE,
    payload: fileNode,
    namespace
  });

  if (process.env.STANDALONE) {
    return;
  }

  requestFetchFile({ path: [fileNode.path], parseDependencies: true }, namespace);
};

export const selectNodeToOpenInEditor = ({ path, line }, namespace) => () => {
  if (process.env.STANDALONE) {
    return;
  }

  openFileInEditor({ path, line }, namespace);
};

export const updateFiles = ({ files }, namespace) => ({
  type: ACTIONS.UPDATE_FILES,
  payload: files,
  namespace
});

export const toggleFolder = (folderNode, namespace) => ({
  type: ACTIONS.TOGGLE_FOLDER,
  payload: folderNode,
  namespace
});

export const openAllFolders = namespace => ({
  type: ACTIONS.OPEN_ALL_FOLDERS,
  namespace
});

export const closeAllFolders = namespace => ({
  type: ACTIONS.CLOSE_ALL_FOLDERS,
  namespace
});

export const selectCodeCrumb = (payload, namespace) => ({
  type: ACTIONS.SELECT_CODE_CRUMB,
  payload,
  namespace
});

export const setDependenciesEntryPoint = (fileNode, namespace) => (dispatch, getState) => {
  const state = getState();
  const { dependenciesShowDirectOnly } = getCheckedState(state);

  return dispatch({
    type: ACTIONS.SET_DEPENDENCIES_ENTRY_POINT,
    payload: {
      fileNode,
      dependenciesShowDirectOnly
    },
    namespace
  });
};

export const selectDependencyEdge = (options, namespace) => dispatch => {
  const { target, sources, groupName } = options || {};

  dispatch({
    type: ACTIONS.SELECT_DEPENDENCY_EDGE,
    payload: target ? { target, sources, groupName } : null,
    namespace
  });

  if (target && sources) {
    requestFetchFile(
      {
        path: [target].concat(sources)
      },
      namespace
    );
  }
};

export const selectCodeCrumbedFlow = (flow, namespace) => (dispatch, getState) => {
  const state = getState();

  const { selectedCrumbedFlowKey, codeCrumbedFlowsMap } = getCodeCrumbsUserChoice(state, {
    namespace
  });

  dispatch({
    type: ACTIONS.SELECT_CODE_CRUMBED_FLOW,
    payload: flow ? flow : selectedCrumbedFlowKey || Object.keys(codeCrumbedFlowsMap || {})[0],
    namespace
  });
};

export const selectCcFlowEdge = (payload, namespace) => dispatch => {
  dispatch({
    type: ACTIONS.SELECT_CC_FLOW_EDGE,
    payload,
    namespace
  });
};

export const calcFilesTreeLayoutNodes = namespace => (dispatch, getState) => {
  const state = getState();

  const namespaceConfig = { namespace };
  const { sourceTree, filesMap } = getSource(state, namespaceConfig);
  const { openedFolders, activeItemsMap } = getSourceUserChoice(state, namespaceConfig);
  const { codeCrumbedFlowsMap, selectedCrumbedFlowKey } = getCodeCrumbsUserChoice(
    state,
    namespaceConfig
  );

  const { codeCrumbsDiagramOn, codeCrumbsMinimize, codeCrumbsDetails, codeCrumbsCodePreview } = getCheckedState(state);

  if (!sourceTree) return;

  let activeCodeCrumbs = undefined;
  if (codeCrumbedFlowsMap[selectedCrumbedFlowKey]) {
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
      extraSpaceForDetails: codeCrumbsDetails,
      extraSpaceForCodePreview: codeCrumbsCodePreview,
      openedFolders,
      activeItemsMap,
      activeCodeCrumbs
    }),
    namespace
  });
};

export const setActiveItems = ({ filesList, foldersMap = {} }, namespace) => (
  dispatch,
  getState
) => {
  const state = getState();
  const { activeItemsMap } = getSourceUserChoice(state, { namespace });
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
    },
    namespace
  });
};

// TODO: refactor too long does too much
export const updateFoldersByActiveChildren = namespace => (dispatch, getState) => {
  const state = getState();

  const namespaceConfig = { namespace };
  const { filesMap } = getSource(state, namespaceConfig);
  const { openedFolders, selectedNode } = getSourceUserChoice(state, namespaceConfig);
  const { codeCrumbedFlowsMap, selectedCrumbedFlowKey } = getCodeCrumbsUserChoice(
    state,
    namespaceConfig
  );
  const { platformPathSeparator } = getProjectMetadata(state, namespaceConfig);

  const { dependenciesDiagramOn, codeCrumbsDiagramOn, sourceKeepOnlyActiveItems } = getCheckedState(
    state
  );

  const depFilePaths = dependenciesDiagramOn ? Object.keys(selectedNode.dependencies || {}) : [];
  let ccFilePaths = codeCrumbsDiagramOn
    ? Object.keys(filesMap).filter(path => filesMap[path].hasCodecrumbs)
    : [];

  if (codeCrumbedFlowsMap[selectedCrumbedFlowKey]) {
    const currentFlowFiles = getFilesForCurrentCcFlow({
      codeCrumbedFlowsMap,
      selectedCrumbedFlowKey,
      filesMap
    });

    ccFilePaths = ccFilePaths.filter(path => currentFlowFiles.includes(path));
  }

  const filesList = [selectedNode.path].concat(depFilePaths, ccFilePaths);
  if (!filesList.length) {
    sourceKeepOnlyActiveItems && dispatch(setActiveItems({ filesList }, namespace));
    return sourceKeepOnlyActiveItems ? dispatch(closeAllFolders(namespace)) : undefined;
  }

  const foldersMap = getFoldersForPaths(
    filesList,
    openedFolders,
    sourceKeepOnlyActiveItems,
    platformPathSeparator
  );

  dispatch(setActiveItems({ filesList, foldersMap }, namespace));

  dispatch({
    type: ACTIONS.SET_FOLDERS_STATE,
    payload: foldersMap,
    namespace
  });
};

// TODO: group and move actions to different files
export const downloadStore = () => (dispatch, getState) => {
  const state = getState();

  const namespacesList = getNamespacesList(state);
  const partialStateToSave = namespacesList.reduce(
    (acc, namespace) => {
      const namespaceConfig = { namespace };
      const { sourceTree, filesMap, foldersMap } = getSource(state, namespaceConfig);
      const { dependenciesEntryName } = getDependenciesUserChoice(state, namespaceConfig);
      const { codeCrumbedFlowsMap, selectedCrumbedFlowKey } = getCodeCrumbsUserChoice(
        state,
        namespaceConfig
      );
      const { projectName, language, platformPathSeparator } = getProjectMetadata(
        state,
        namespaceConfig
      );

      return {
        ...acc,
        dataBus: {
          ...acc.dataBus,
          [namespace]: {
            sourceTree,
            filesMap,
            foldersMap,
            codeCrumbedFlowsMap,
            selectedCrumbedFlowKey,
            dependenciesEntryName,
            projectName,
            language,
            platformPathSeparator
          }
        }
      };
    },
    {
      controlsBus: {
        checkedState: getCheckedState(state),
        valuesState: getValuesState(state),
        disabledState: getDisabledState(state)
      },
      dataBus: {}
    }
  );

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

  //TODO: add flag on UI to not reset previous state
  dispatch({
    type: NAMESPACE_INTEGRATION_ACTIONS.RESET_ALL
  });

  dispatch({
    type: ACTIONS.RESET_ALL
  });

  Object.keys(predefinedState.dataBus).forEach((namespace, i) => {
    // TODO: test  performance here
    setTimeout(() => {
      dispatch(setInitialSourceData(predefinedState.dataBus[namespace], namespace));
    }, 100 * i);
  });
};
