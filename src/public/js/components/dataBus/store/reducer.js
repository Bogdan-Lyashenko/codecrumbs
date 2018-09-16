import safeGet from 'lodash/get';
import { DIR_NODE_TYPE } from 'utils/constants';
import { ACTIONS } from './constants';
import { getFileNodesMap } from 'utils/treeLayout';

const DefaultState = {
  filesTree: null,
  filesList: null,
  dependenciesList: null,
  dependenciesMap: null,

  filesTreeLayoutNodes: null,
  closedFolders: {},
  firstLevelFolders: {},
  fileNodesMap: {},
  filteredDependenciesList: []
};

export default (state = DefaultState, action) => {
  switch (action.type) {
    case ACTIONS.SET_INITIAL_SOURCE_DATA:
      const {
        dependenciesRootEntryName,
        dependenciesList,
        dependenciesShowDirectOnly
      } = action.payload;
      const dependenciesEntryPoint = { path: dependenciesRootEntryName };

      return {
        ...state,
        ...action.payload,
        dependenciesEntryPoint,
        filteredDependenciesList: getFilteredDependenciesList({
          dependenciesList,
          dependenciesEntryPoint,
          dependenciesShowDirectOnly
        }),
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
        filesTreeLayoutNodes: action.payload,
        fileNodesMap: getFileNodesMap(action.payload)
      };

    case ACTIONS.SELECT_NODE:
      return {
        ...state,
        selectedCodeCrumb: null,
        selectedNode: action.payload
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
      //TODO: fileNode also can be folder, maybe don't use SELECT_CODE_CRUMB at all and use selected node as well
      return {
        ...state,
        selectedNode: fileNode,
        selectedCodeCrumb: codeCrumb
      };

    case ACTIONS.SET_DEPENDENCIES_ENTRY_POINT:
      const depEntryPoint = action.payload.fileNode || state.dependenciesEntryPoint;
      return {
        ...state,
        dependenciesEntryPoint: depEntryPoint,
        filteredDependenciesList: getFilteredDependenciesList({
          dependenciesList: state.dependenciesList,
          dependenciesEntryPoint: depEntryPoint,
          dependenciesShowDirectOnly: action.payload.dependenciesShowDirectOnly
        }),
        selectedDependencyEdgeNodes: null
      };

    case ACTIONS.SELECT_DEPENDENCY_EDGE:
      const selectedDependencyEdgeNodes = action.payload;

      return {
        ...state,
        selectedDependencyEdgeNodes
      };

    default:
      return state;
  }
};

export const getFilteredDependenciesList = ({
  dependenciesList,
  dependenciesEntryPoint,
  dependenciesShowDirectOnly
}) => {
  if (!dependenciesEntryPoint) {
    return [];
  }

  if (dependenciesShowDirectOnly) {
    const dependency = dependenciesList.find(d => d.moduleName === dependenciesEntryPoint.path);
    return dependency ? [dependency] : [];
  }

  return collectDependencies(dependenciesEntryPoint.path, dependenciesList);
};

export const collectDependencies = (entryModuleName, dependenciesList) => {
  let queue = [].concat(entryModuleName),
    store = [];

  while (queue.length) {
    let moduleName = queue.shift(),
      entryModule = dependenciesList.find(d => d.moduleName === moduleName);

    if (entryModule) {
      store.push(entryModule);

      const nodeBody = entryModule.importedModuleNames;
      if (nodeBody) {
        queue = [...queue, ...nodeBody];
      }
    } else {
      console.error('looks like ' + entryModuleName + 'is not imported anywhere');
    }
  }

  return store;
};
