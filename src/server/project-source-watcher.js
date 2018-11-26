const directoryTree = require('directory-tree');
const madge = require('madge');
const chokidar = require('chokidar');
const debounce = require('lodash.debounce');

const codeParser = require('./code-parse');
const traversalSearch = require('./utils/traversal').search;
const treeTraversal = require('../shared/utils/tree').traversal;
const DIR_NODE_TYPE = require('../shared/constants').DIR_NODE_TYPE;

const getDirFiles = projectDir => {
  const filesMap = {};
  const foldersMap = {};

  const filesTree = directoryTree(projectDir, { extensions: /\.jsx?$/ }, (item, PATH) => {
    filesMap[item.path] = item;
  });

  if (!Object.keys(filesMap).length) {
    throw new Error('There is not files found. Please check source dir and entry point configs.');
  }

  treeTraversal(filesTree, node => {
    if (node.type === DIR_NODE_TYPE && node.children) {
      foldersMap[node.path] = 1;

      node.children = node.children.sort((a, b) => {
        if (a.type !== DIR_NODE_TYPE && b.type === DIR_NODE_TYPE) {
          return 1;
        }

        if (a.type === DIR_NODE_TYPE && b.type !== DIR_NODE_TYPE) {
          return -1;
        }

        return 0;
      });
    }
  });

  return { tree: filesTree, map: filesMap, foldersMap };
};

const getDependencies = (projectDir, entryPoint, webpackConfigPath) => {
  return madge(entryPoint, { webpackConfig: webpackConfigPath })
    .then(res => res.obj())
    .then(obj => {
      const map = {};

      Object.entries(obj).forEach(([key, value]) => {
        const moduleName = `${projectDir}/${key}`;

        map[moduleName] = {
          moduleName,
          importedModuleNames: value.map(v => `${projectDir}/${v}`)
        };
      });

      return {
        map
      };
    });
};

const grabProjectSourceState = ({ filesMap, projectDir, entryPoint, webpackConfigPath }) => {
  return Promise.all([
    getDependencies(projectDir, entryPoint, webpackConfigPath),
    ...Object.keys(filesMap).map(itemPath =>
      codeParser.parseFile(itemPath).then(item =>
        Object.keys(item).forEach(key => {
          // don't send fileCode to client, too big
          if (itemPath !== entryPoint && ['fileCode'].includes(key)) {
            return;
          }

          filesMap[itemPath][key] = item[key];
        })
      )
    )
  ]);
};

const createWatcher = (dir, fn) => {
  const DELAY = 100;

  const watcher = chokidar.watch(dir);
  watcher.on('change', debounce(fn, DELAY));

  return watcher;
};

//TODO: refactor mess, method does too much spaghetti
const subscribeOnChange = (projectDir, entryPoint, webpackConfigPath, { onInit, onChange }) => {
  const dirFiles = getDirFiles(projectDir);
  const dirDependencies = {};
  const codeCrumbs = {
    flows: {}
  };

  grabProjectSourceState({
    filesMap: dirFiles.map,
    projectDir,
    entryPoint,
    webpackConfigPath
  }).then(([dependencies]) => {
    dirDependencies.map = dependencies.map;
    Object.entries(dirFiles.map).forEach(([path, file]) => {
      if (file.hasCodecrumbs) {
        addFileFlowsToCodeCrumbedFlows(codeCrumbs.flows, file);
      }
    });

    return onInit({
      filesTree: dirFiles.tree,
      filesMap: dirFiles.map,
      foldersMap: dirFiles.foldersMap,
      dependenciesMap: dependencies.map,
      codeCrumbedFlowsMap: codeCrumbs.flows,
      dependenciesRootEntryName: entryPoint
    });
  });

  //use watcher.close(); to stop watching
  // TODO: path can be multiple if not save after fist change, fix
  return createWatcher(projectDir, path => {
    const file = dirFiles.map[path];
    if (!file) {
      return;
    }

    if (file.hasCodecrumbs) {
      resetCodeCrumbedFlowsByFile(codeCrumbs.flows, file);
    }

    grabProjectSourceState({
      filesMap: { [path]: file },
      projectDir,
      entryPoint: path,
      webpackConfigPath
    }).then(([{ list, map }]) => {
      traversalSearch(dirFiles.tree, node => {
        if (node.path === path) {
          mergeFileIntoNode(file, node);
          return true;
        }
      });

      if (file.hasCodecrumbs) {
        addFileFlowsToCodeCrumbedFlows(codeCrumbs.flows, file);
      }

      return onChange({
        filesTree: dirFiles.tree,
        foldersMap: dirFiles.foldersMap,
        filesMap: {
          ...dirFiles.map,
          [file.path]: dirFiles.map[file.path]
        },
        dependenciesMap: {
          ...dirDependencies.map,
          ...map
        },
        codeCrumbedFlowsMap: codeCrumbs.flows
      });
    });
  });
};

const addFileFlowsToCodeCrumbedFlows = (codeCrumbedFlows, file) => {
  Object.keys(file.flows).forEach(key => {
    if (!codeCrumbedFlows[key]) {
      codeCrumbedFlows[key] = {};
    }
    codeCrumbedFlows[key][file.path] = key;
  });
};

const resetCodeCrumbedFlowsByFile = (codeCrumbedFlows, file) => {
  Object.keys(file.flows).forEach(key => {
    if (Object.keys(codeCrumbedFlows[key]).length === 1) {
      delete codeCrumbedFlows[key];
    } else {
      delete codeCrumbedFlows[key][file.path];
    }
  });
};

const mergeFileIntoNode = (file, node) => {
  Object.keys(file).forEach(key => {
    node[key] = file[key];
  });

  return node;
};

module.exports = {
  subscribeOnChange
};
