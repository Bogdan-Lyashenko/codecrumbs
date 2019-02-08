const file = require('../utils/file');
const { getLanguageParsers } = require('./language');

const parseFile = (
  itemPath,
  projectDir,
  { parseCodeCrumbs, parseImports, parseDependencies, attachCode, language } = {}
) => {
  const { codecrumbsParser, dependenciesParser } = getLanguageParsers(language);

  return Promise.all([
    parseDependencies && dependenciesParser.getDependencies(itemPath, projectDir),
    file.read(itemPath, 'utf8')
  ]).then(([dependencies, code]) => {
    const item = {
      path: itemPath,
      dependencies: parseDependencies && dependencies,
      fileCode: attachCode && code
    };

    if (parseCodeCrumbs) {
      const codecrumbsList = codecrumbsParser.getCrumbs(code, itemPath);
      if (codecrumbsList.length) {
        item.fileCode = code;
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
      const importedDependencies = dependenciesParser.getImports(code, itemPath);
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
};

module.exports = {
  parseFile
};
