const codecrumbs = require('./codecrumbs/');
const dependencies = require('./dependencies/');
const file = require('../utils/file');

const parseFile = (itemPath, { parseCodeCrumbs, parseDependencies } = {}) =>
  file.read(itemPath, 'utf8').then(code => {
    const item = {};

    // TODO: if parseCodeCrumbs
    const codecrumbsList = codecrumbs.getCrumbs(code, itemPath);
    if (codecrumbsList.length) {
      item.children = codecrumbsList;
      item.hasCodecrumbs = true;
      item.flows = codecrumbsList
        .filter(cc => cc.params.flow)
        .map(cc => cc.params)
        .reduce((acc, { flow }) => {
          acc[flow] = true;
          return acc;
        }, {});
    } else {
      item.children = undefined;
      item.hasCodecrumbs = false;
      item.flows = undefined;
    }

    // TODO: if parseDependencies
    // TODO: same here add parsing to build dependencies tree
    const importedDependencies = dependencies.getImports(code, itemPath);
    if (importedDependencies.length) {
      item.importedDependencies = importedDependencies;
      item.hasDependenciesImports = true;
    } else {
      item.importedDependencies = undefined;
      item.hasDependenciesImports = false;
    }

    // TODO: load on click
    item.fileCode = code;
    return item;
  });

module.exports = {
  parseFile
};
