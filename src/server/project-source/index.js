const path = require('path');

const logger = require('../utils/logger');
const codeParser = require('../code-parse/index');
const { getProjectFiles } = require('./file-system');
const { createWatcher } = require('./watcher');
const {
  addFileFlowsToCodeCrumbedFlows,
  mergeFileIntoNode,
  resetCodeCrumbedFlowsByFile
} = require('./utils');

const { search: traversalSearch } = require('../utils/traversal');

const parseProjectSourceFiles = ({
  filesMap,
  projectDir,
  entryPoint,
  webpackConfigPath,
  language
}) =>
  Promise.all(
    Object.keys(filesMap).map(itemPath =>
      codeParser
        .parseFile(itemPath, projectDir, {
          parseCodeCrumbs: true,
          parseImports: true,
          parseDependencies: itemPath === entryPoint,
          attachCode: itemPath === entryPoint,
          language
        })
        .then(item =>
          Object.keys(item).forEach(key => {
            filesMap[itemPath][key] = item[key];
          })
        )
    )
  );

const watchers = [];
const closePreviousSubscription = id => {
  const watcherIndex = watchers.findIndex(({ namespace }) => namespace === id);

  if (watcherIndex !== -1) {
    watchers[watcherIndex].watcher.close();
    watchers.splice(watcherIndex, 1);
  }
};

const subscribeOnChange = (
  namespace,
  { projectName, projectDir, entryPoint, excludeDir, webpackConfigPath, language, fileExtensions },
  { onInit, onChange }
) => {
  logger.info(`> source watcher subscribing for changes`);
  // TODO: refactor function, too long
  closePreviousSubscription(namespace);

  logger.log(`- getting: project files. ${excludeDir.length ? `Excluding: ${excludeDir}` : ''}`);

  const fs = getProjectFiles(projectDir, {
    extensions: fileExtensions, //TODO: add deps folder per language
    exclude: new RegExp(`node_modules${excludeDir.length ? `|${excludeDir.join('|')}` : ''}`)
  });

  logger.info(
    `+ got: project files.`,
    ` Number of files: ${Object.keys(fs.filesMap).length},`,
    ` Number of folders: ${Object.keys(fs.foldersMap).length}.`
  );
  const codeCrumbs = {
    flows: {}
  };

  logger.log(`- parsing: project files`);
  parseProjectSourceFiles({
    filesMap: fs.filesMap,
    projectDir,
    entryPoint,
    webpackConfigPath,
    language
  })
    .then(() => {
      logger.info(`+ parsed: project files.`);

      Object.entries(fs.filesMap).forEach(([path, file]) => {
        if (file.hasCodecrumbs) {
          addFileFlowsToCodeCrumbedFlows(codeCrumbs.flows, file);
        }
      });

      return onInit({
        namespace,
        projectName,
        language,
        platformPathSeparator: path.sep,
        sourceTree: fs.sourceTree,
        filesMap: fs.filesMap,
        foldersMap: fs.foldersMap,
        codeCrumbedFlowsMap: codeCrumbs.flows,
        dependenciesEntryName: entryPoint
      });
    })
    .catch(e => {
      logger.error(`! parsed: project files. Error: ${logger.getText(e)}`);
    });

  const watcher = createWatcher(projectDir, path => {
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
      webpackConfigPath,
      language
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

      logger.info('> code state change was parsed and sent to client.');

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

  watchers.push({
    watcher,
    namespace
  });
};

module.exports = {
  subscribeOnChange
};
