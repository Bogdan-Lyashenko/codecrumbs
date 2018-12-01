const { getCrumbs } = require('./codecrumbs/');
const { getImports, getDependencies } = require('./dependencies/');
const file = require('../utils/file');

const parseFile = (
  itemPath,
  projectDir,
  { parseCodeCrumbs, parseImports, parseDependencies, attachCode } = {}
) =>
  Promise.all([
    parseDependencies && getDependencies(itemPath, projectDir),
    file.read(itemPath, 'utf8')
  ]).then(([dependencies, code]) => {
    const item = {
      dependencies: parseDependencies && dependencies,
      fileCode: attachCode && code
    };

    if (parseCodeCrumbs) {
      const codecrumbsList = getCrumbs(code, itemPath);
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
    }

    if (parseImports) {
      const importedDependencies = getImports(code, itemPath);
      if (importedDependencies.length) {
        item.importedDependencies = importedDependencies;
        item.hasDependenciesImports = true;
      } else {
        item.importedDependencies = undefined;
        item.hasDependenciesImports = false;
      }
    }

    return item;
  });

module.exports = {
  parseFile
};
