const directoryTree = require('directory-tree');
const madge = require('madge');
const chokidar = require('chokidar');
const debounce = require('lodash.debounce');

const codecrumbs = require('./codecrumbs/codecrumbs');
const dependencies = require('./dependencies/dependencies');
const file = require('./utils/file');
const traversalSearch = require('./utils/traversal').search;
const treeTraversal = require('../shared/utils/tree').traversal;
const DIR_NODE_TYPE = require('../shared/constants').DIR_NODE_TYPE;

const getDirFiles = projectDir => {
  const filesList = [];

  const filesTree = directoryTree(projectDir, { extensions: /\.jsx?$/ }, (item, PATH) => {
    filesList.push(item);
  });

  treeTraversal(filesTree, node => {
    if (node.type === DIR_NODE_TYPE && node.children) {
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

  return { list: filesList, tree: filesTree };
};

const getDependencies = (projectDir, entryPoint) => {
  return madge(entryPoint)
    .then(res => res.obj())
    .then(obj => {
      const map = {};
      const list = [];

      Object.entries(obj).forEach(([key, value]) => {
        const moduleName = `${projectDir}/${key}`;
        const node = {
          moduleName,
          importedModuleNames: value.map(v => `${projectDir}/${v}`)
        };

        list.push(node);
        map[moduleName] = node;
      });

      return {
        map,
        list
      };
    });
};

const grabProjectSourceState = ({ filesList, projectDir, entryPoint }) => {
  return Promise.all([
    getDependencies(projectDir, entryPoint),
    ...filesList.map(item =>
      file.read(item.path, 'utf8').then(code => {
        const codecrumbsList = codecrumbs.getCrumbs(code);
        const importedDependencies = dependencies.getImports(code);

        if (codecrumbsList.length) {
          item.children = codecrumbsList;
          item.hasCodecrumbs = true;
        }

        if (importedDependencies.length) {
          item.importedDependencies = importedDependencies;
          item.hasDependenciesImports = true;
        }

        // TODO: load on click
        item.fileCode = code;
      })
    )
  ]);
};

const createWatcher = (dir, fn) => {
  const DELAY = 100;

  const watcher = chokidar.watch(dir);
  watcher.on('change', debounce(fn, DELAY));

  return watcher;
};

const subscribeOnChange = (projectDir, entryPoint, { onInit, onChange }) => {
  const dirFiles = getDirFiles(projectDir);
  const dirDependencies = {};

  grabProjectSourceState({ filesList: dirFiles.list, projectDir, entryPoint }).then(
    ([dependencies]) => {
      dirDependencies.list = dependencies.list;
      dirDependencies.map = dependencies.map;

      return onInit({
        filesTree: dirFiles.tree,
        filesList: dirFiles.list,
        dependenciesList: dependencies.list,
        dependenciesMap: dependencies.map
      });
    }
  );

  //use watcher.close(); to stop watching
  return createWatcher(projectDir, path => {
    if (!dirDependencies.list) return;

    const file = { path };
    grabProjectSourceState({ filesList: [file], projectDir, entryPoint: path }).then(
      ([{ list, map }]) => {
        traversalSearch(dirFiles.tree, node => {
          if (node.path === path) {
            delete node.children;
            Object.keys(file).forEach(key => {
              node[key] = file[key];
            });

            return true;
          }
        });

        return onChange({
          filesTree: dirFiles.tree,
          filesList: dirFiles.list.map(node => {
            if (node.path === path) {
              delete node.children;
              Object.keys(file).forEach(key => {
                node[key] = file[key];
              });
            }

            return node;
          }),
          dependenciesList: dirDependencies.list.map(
            item => (item.moduleName === path ? { ...list[0] } : item)
          ),
          dependenciesMap: {
            ...dirDependencies.map,
            ...map
          }
        });
      }
    );
  });
};

module.exports = {
  subscribeOnChange
};
