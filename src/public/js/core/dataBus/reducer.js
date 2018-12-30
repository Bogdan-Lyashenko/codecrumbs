import { FOLDER_OPEN_STATE } from 'core/constants';

import { ACTIONS, DEFAULT_NAMESPACE } from './constants';
import { getFileNodesMap } from './utils/treeLayout';

const DefaultState = {
  [DEFAULT_NAMESPACE]: {
    sourceTree: null,
    filesMap: null,
    foldersMap: null,

    sourceLayoutTree: null,
    filesLayoutMap: {},

    openedFolders: {},
    activeItemsMap: {},
    selectedNode: null,

    dependenciesEntryName: undefined,
    selectedDependencyEdgeNodes: null,

    selectedCodeCrumb: null,
    codeCrumbedFlowsMap: {},
    selectedCrumbedFlowKey: undefined
  }
};

export const getMergeState = (state, namespace) => namespaceStateUpdate => ({
  ...state,
  [namespace]: {
    ...state[namespace],
    ...namespaceStateUpdate
  }
});

// TODO: add selectors?
export default (state = DefaultState, action) => {
  const namespace = action.namespace || DEFAULT_NAMESPACE;
  const namespaceState = state[namespace];
  const mergeState = getMergeState(state, namespace);

  switch (action.type) {
    case ACTIONS.SET_INITIAL_SOURCE_DATA: {
      const { dependenciesEntryName, filesMap, foldersMap } = action.payload;

      return mergeState({
        ...action.payload,
        selectedNode: filesMap[dependenciesEntryName],
        openedFolders: {
          ...Object.keys(foldersMap).reduce((res, item) => {
            res[item] = FOLDER_OPEN_STATE.CLOSED;
            return res;
          }, {})
        }
      });
    }

    case ACTIONS.SET_CHANGED_SOURCE_DATA:
      return mergeState(action.payload);

    case ACTIONS.UPDATE_FILES_TREE_LAYOUT_NODES: {
      const { payload } = action;

      return mergeState({
        sourceLayoutTree: payload,
        filesLayoutMap: getFileNodesMap(payload)
      });
    }

    case ACTIONS.SELECT_NODE: {
      const { payload } = action;

      return mergeState({
        selectedCodeCrumb: null,
        selectedNode: payload,
        dependenciesEntryName: payload.path,
        filesMap: {
          ...namespaceState.filesMap,
          [payload.path]: payload
        }
      });
    }

    case ACTIONS.TOGGLE_FOLDER: {
      const { openedFolders, activeItemsMap } = namespaceState;
      const folderPath = action.payload.path;

      const openedStateValue =
        activeItemsMap[folderPath] !== undefined
          ? openedFolders[folderPath] === FOLDER_OPEN_STATE.OPEN
            ? FOLDER_OPEN_STATE.CLOSED
            : openedFolders[folderPath] + 1
          : openedFolders[folderPath] === FOLDER_OPEN_STATE.OPEN
            ? FOLDER_OPEN_STATE.CLOSED
            : FOLDER_OPEN_STATE.OPEN;

      return mergeState({
        openedFolders: { ...openedFolders, [folderPath]: openedStateValue }
      });
    }

    case ACTIONS.SET_ACTIVE_ITEMS:
      return mergeState({
        activeItemsMap: action.payload
      });

    case ACTIONS.SET_FOLDERS_STATE:
      return mergeState({
        openedFolders: { ...namespaceState.openedFolders, ...action.payload }
      });

    case ACTIONS.OPEN_ALL_FOLDERS:
      return mergeState({
        openedFolders: {
          ...Object.keys(namespaceState.foldersMap).reduce((res, item) => {
            res[item] = FOLDER_OPEN_STATE.OPEN;
            return res;
          }, {})
        }
      });

    case ACTIONS.CLOSE_ALL_FOLDERS:
      return mergeState({
        openedFolders: {
          // TODO: move to method, duplication
          ...Object.keys(namespaceState.foldersMap).reduce((res, item) => {
            res[item] = FOLDER_OPEN_STATE.CLOSED;
            return res;
          }, {})
        }
      });

    case ACTIONS.SELECT_CODE_CRUMB:
      const { fileNode, codeCrumb } = action.payload;
      //TODO: fileNode also can be folder, maybe don't use SELECT_CODE_CRUMB at all and use selected node as well
      return mergeState({
        selectedNode: fileNode,
        selectedCodeCrumb: codeCrumb
      });

    case ACTIONS.SELECT_CODE_CRUMBED_FLOW:
      return mergeState({
        selectedCrumbedFlowKey: action.payload
      });

    case ACTIONS.SET_DEPENDENCIES_ENTRY_POINT: {
      const { fileNode } = action.payload;
      const dependenciesEntryName = fileNode ? fileNode.path : namespaceState.dependenciesEntryName;

      return mergeState({
        dependenciesEntryName,
        selectedDependencyEdgeNodes: null
      });
    }

    case ACTIONS.SELECT_DEPENDENCY_EDGE:
      return mergeState({
        selectedDependencyEdgeNodes: action.payload
      });

    case ACTIONS.UPDATE_FILES:
      return mergeState({
        filesMap: {
          ...namespaceState.filesMap,
          ...action.payload.reduce((acc, item) => {
            acc[item.path] = { ...namespaceState.filesMap[item.path], ...item };
            return acc;
          }, {})
        }
      });

    default:
      return state;
  }
};
