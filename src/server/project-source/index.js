const codeParser = require('../code-parse/index');
const { getProjectFiles } = require('./file-system');
const { createWatcher } = require('./watcher');
const {
  addFileFlowsToCodeCrumbedFlows,
  mergeFileIntoNode,
  resetCodeCrumbedFlowsByFile
} = require('./utils');

const { search: traversalSearch } = require('../utils/traversal');

const parseProjectSourceFiles = ({ filesMap, projectDir, entryPoint, webpackConfigPath }) =>
  Promise.all(
    Object.keys(filesMap).map(itemPath =>
      codeParser
        .parseFile(itemPath, projectDir, {
          parseCodeCrumbs: true,
          parseImports: true,
          parseDependencies: itemPath === entryPoint,
          attachCode: itemPath === entryPoint
        })
        .then(item =>
          Object.keys(item).forEach(key => {
            filesMap[itemPath][key] = item[key];
          })
        )
    )
  );

const subscribeOnChange = (projectDir, entryPoint, webpackConfigPath, { onInit, onChange }) => {
  const fs = getProjectFiles(projectDir);
  const codeCrumbs = {
    flows: {}
  };

  parseProjectSourceFiles({
    filesMap: fs.filesMap,
    projectDir,
    entryPoint,
    webpackConfigPath
  }).then(() => {
    Object.entries(fs.filesMap).forEach(([path, file]) => {
      if (file.hasCodecrumbs) {
        addFileFlowsToCodeCrumbedFlows(codeCrumbs.flows, file);
      }
    });

    return onInit({
      sourceTree: fs.sourceTree,
      filesMap: fs.filesMap,
      foldersMap: fs.foldersMap,
      codeCrumbedFlowsMap: codeCrumbs.flows,
      dependenciesRootEntryName: entryPoint
    });
  });

  //use watcher.close(); to stop watching
  // TODO: path can be multiple if not save after fist change, fix
  return createWatcher(projectDir, path => {
    const file = fs.filesMap[path];
    if (!file) {
      return;
    }

    if (file.hasCodecrumbs) {
      resetCodeCrumbedFlowsByFile(codeCrumbs.flows, file);
    }

    parseProjectSourceFiles({
      filesMap: { [path]: file },
      projectDir,
      entryPoint: path,
      webpackConfigPath
    }).then(() => {
      traversalSearch(fs.sourceTree, node => {
        if (node.path === path) {
          mergeFileIntoNode(file, node);
          return true;
        }
      });

      if (file.hasCodecrumbs) {
        addFileFlowsToCodeCrumbedFlows(codeCrumbs.flows, file);
      }

      return onChange({
        sourceTree: fs.sourceTree,
        foldersMap: fs.foldersMap,
        filesMap: {
          ...fs.filesMap,
          [file.path]: fs.filesMap[file.path]
        },
        codeCrumbedFlowsMap: codeCrumbs.flows
      });
    });
  });
};

module.exports = {
  subscribeOnChange
};
