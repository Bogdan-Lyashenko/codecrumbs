import safeGet from 'lodash/get';
import { DIR_NODE_TYPE } from 'utils/constants';
import { ACTIONS } from './constants';

const DefaultState = {
  filesTree: null,
  filesList: null,
  dependenciesList: null,

  filesTreeLayoutNodes: null,
  closedFolders: {},
  firstLevelFolders: {}
};

export default (state = DefaultState, action) => {
  switch (action.type) {
    case ACTIONS.SET_INITIAL_SOURCE_DATA:
      return {
        ...state,
        ...action.payload,
        dependenciesRootEntryPoint: action.payload.dependenciesList[0],
        isCurrentDependenciesEntryPointRoot: true,

        firstLevelFolders: safeGet(action.payload, 'filesTree.children', [])
          .filter(item => item.type === DIR_NODE_TYPE)
          .reduce((res, item) => {
            res[item.path] = item;
            return res;
          }, {})
      };

    case ACTIONS.UPDATE_FILES_TREE_LAYOUT_NODES:
      return {
        ...state,
        filesTreeLayoutNodes: action.payload
      };

    case ACTIONS.SELECT_FILE:
      return {
        ...state,
        selectedCodeCrumb: null,
        selectedFile: action.payload
      };

    case ACTIONS.TOGGLE_FOLDER:
      const { closedFolders } = state;
      const folderPath = action.payload.path;

      return {
        ...state,
        closedFolders: closedFolders[folderPath]
          ? { ...closedFolders, [folderPath]: null }
          : { ...closedFolders, [folderPath]: action.payload }
      };

    case ACTIONS.OPEN_ALL_FOLDERS:
      return {
        ...state,
        closedFolders: {}
      };

    case ACTIONS.CLOSE_ALL_FOLDERS:
      return {
        ...state,
        closedFolders: {
          ...state.closedFolders,
          ...state.firstLevelFolders
        }
      };

    case ACTIONS.SELECT_CODE_CRUMB:
      const { fileNode, codeCrumb } = action.payload;
      return {
        ...state,
        selectedFile: fileNode,
        selectedCodeCrumb: codeCrumb
      };

    case ACTIONS.SET_DEPENDENCIES_ENTRY_POINT:
      const entry = action.payload;
      const rootEntryPointModuleName = state.dependenciesRootEntryPoint.moduleName;

      return {
        ...state,
        dependenciesEntryPoint: entry,
        isCurrentDependenciesEntryPointRoot: entry && entry.path === rootEntryPointModuleName
      };

    default:
      return state;
  }
};
