const path = require('path');
const madge = require('madge');

const jsDependencies = require('../../../utils/jsDependencies');
const { config: astParseConfig, getNodeLines } = require('./astParse');

const getDependencies = (entryPoint, projectDir, {webpackConfigPath}) => {
  const rootPath = path.resolve();
  const separator = path.sep;

  return madge(entryPoint, {
    webpackConfig: webpackConfigPath,
    baseDir: projectDir,
    // TODO: this filter will be extended based on how much dependencies is needed
    dependencyFilter: (depPath, sourcePath) => sourcePath === `${rootPath}${separator}${entryPoint}`
  })
    .then(res => res.obj())
    .then(obj =>
      Object.entries(obj).reduce((tree, [key, value]) => {
        const moduleName = `${projectDir}${separator}${key.replace(/\//g, separator)}`;

        tree[moduleName] = {
          moduleName,
          importedModuleNames: value.map(
            v => `${projectDir}${separator}${v.replace(/\//g, separator)}`
          )
        };

        return tree;
      }, {})
    );
};

module.exports = {
  getImports: (fileCode, itemPath) => jsDependencies.getImports(fileCode, itemPath, astParseConfig, getNodeLines),
  getDependencies
};
