import safeGet from 'lodash/get';
import { DIR_NODE_TYPE, FILE_NODE_TYPE } from 'utils/constants';
import { ACTIONS } from './constants';
import { getFileNodesMap } from 'utils/treeLayout';

const DefaultState = {
  filesTree: null,
  filesMap: null,
  dependenciesMap: null,

  filesTreeLayoutNodes: null,
  openedFolders: {},
  firstLevelFolders: {},
  fileNodesMap: {},
  filteredDependenciesList: [],
  filteredDependenciesMap: {},
  filteredDependenciesAllModulesMap: {},

  codeCrumbedFlowsMap: {}
};

export default (state = DefaultState, action) => {
  switch (action.type) {
    case ACTIONS.SET_INITIAL_SOURCE_DATA:
      const { dependenciesRootEntryName, filesMap, filesTree, foldersMap } = action.payload;

      return {
        ...state,
        ...action.payload,
        selectedNode: filesMap[dependenciesRootEntryName],
        dependenciesEntryPoint: filesMap[dependenciesRootEntryName],
        openedFolders: {
          ...Object.keys(foldersMap).reduce((res, item) => {
            res[item] = false;
            return res;
          }, {}),
          [filesTree.path]: true
        },
        firstLevelFolders: safeGet(action.payload, 'filesTree.children', [])
          .filter(item => item.type === DIR_NODE_TYPE)
          .reduce((res, item) => {
            res[item.path] = item;
            return res;
          }, {})
      };

    case ACTIONS.SET_CHANGED_SOURCE_DATA:
      return {
        ...state,
        ...action.payload
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
        selectedNode: action.payload,
        ...(action.payload && action.payload.type === FILE_NODE_TYPE
          ? {
              dependenciesEntryPoint: action.payload
            }
          : {})
      };

    case ACTIONS.TOGGLE_FOLDER:
      const { openedFolders } = state;
      const folderPath = action.payload.path;

      return {
        ...state,
        openedFolders: { ...openedFolders, [folderPath]: !openedFolders[folderPath] }
      };

    case ACTIONS.SET_FOLDERS_STATE:
      const { folders, override } = action.payload;
      return {
        ...state,
        openedFolders: override ? folders : { ...state.openedFolders, ...folders }
      };

    case ACTIONS.OPEN_ALL_FOLDERS:
      return {
        ...state,
        openedFolders: { ...state.foldersMap }
      };

    case ACTIONS.CLOSE_ALL_FOLDERS:
      return {
        ...state,
        openedFolders: {
          ...Object.keys(state.foldersMap).reduce((res, item) => {
            res[item] = false;
            return res;
          }, {}),
          [state.filesTree.path]: true
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

    case ACTIONS.SELECT_CODE_CRUMBED_FLOW:
      return {
        ...state,
        selectedCrumbedFlowKey: action.payload
      };

    case ACTIONS.SET_DEPENDENCIES_ENTRY_POINT:
      const depEntryPoint = action.payload.fileNode || state.dependenciesEntryPoint;
      return {
        ...state,
        dependenciesEntryPoint: depEntryPoint,
        ...getFilteredDependencies({
          //TODO: perf?
          dependenciesMap: state.dependenciesMap,
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

export const getFilteredDependencies = ({
  dependenciesMap,
  dependenciesEntryPoint,
  dependenciesShowDirectOnly
}) => {
  if (!dependenciesEntryPoint) {
    return {
      filteredDependenciesList: [],
      filteredDependenciesMap: {},
      filteredDependenciesAllModulesMap: {}
    };
  }

  let filteredDependenciesList, filteredDependenciesMap;

  if (dependenciesShowDirectOnly) {
    const depEntryNode = dependenciesMap[dependenciesEntryPoint.path];
    filteredDependenciesList = depEntryNode ? [depEntryNode] : [];
    filteredDependenciesMap = depEntryNode ? { [dependenciesEntryPoint.path]: depEntryNode } : {};
  } else {
    const { list, map } = collectDependencies(dependenciesEntryPoint.path, dependenciesMap);
    filteredDependenciesList = list;
    filteredDependenciesMap = map;
  }

  return {
    filteredDependenciesList,
    filteredDependenciesMap,
    filteredDependenciesAllModulesMap: getDependenciesAllModules(filteredDependenciesMap)
  };
};

export const collectDependencies = (entryModuleName, dependenciesMap) => {
  let queue = [].concat(entryModuleName),
    list = [],
    map = {};

  while (queue.length) {
    let moduleName = queue.shift(),
      entryModule = dependenciesMap[moduleName];

    if (entryModule) {
      list.push(entryModule);
      map[moduleName] = entryModule;

      const nodeBody = entryModule.importedModuleNames;
      if (nodeBody) {
        queue = [...queue, ...nodeBody];
      }
    } else {
      console.error('looks like ' + entryModuleName + 'is not imported anywhere');
    }
  }

  return {
    list,
    map
  };
};

export const getDependenciesAllModules = dependenciesMap => {
  const allNodes = {};

  Object.values(dependenciesMap).forEach(depModule => {
    allNodes[depModule.moduleName] = 1;
    (depModule.importedModuleNames || []).forEach(impModuleName => (allNodes[impModuleName] = 1));
  });

  return allNodes;
};
