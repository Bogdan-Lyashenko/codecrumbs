const path = require('path');
const madge = require('madge');
const babylon = require('@babel/parser');
const babelTraverse = require('@babel/traverse');

const { config: astParseConfig, getNodeLines } = require('./astParse');
const { convertRelativeToAbsolutePath } = require('../../path');

const getImports = (fileCode, itemPath) => {
  let ast = {};
  const importedDependencies = [];

  //TODO: move to one file in util, to keep config in one place
  try {
    ast = babylon.parse(fileCode, astParseConfig);

    // TODO: combine with codecrumbs babelTraverse, no need to do babelTraverse twice per file
    babelTraverse.default(ast, {
      enter(path) {
        const node = path.node;

        if (node.type === 'ImportDeclaration') {
          importedDependencies.push({
            importNodeLines: getNodeLines(node),
            sourceFile: node.source && convertRelativeToAbsolutePath(itemPath, node.source.value),
            specifiers: node.specifiers.map(({ type, imported, local }) => ({
              type,
              name: (imported || local || {}).name
            }))
          });
        }
      }
    });

    return importedDependencies.filter(({ sourceFile }) => !!sourceFile);
  } catch (e) {
    console.log('Dependencies: getImports', itemPath, e);
    return importedDependencies;
  }
};

const getDependencies = (entryPoint, projectDir, webpackConfigPath) => {
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
  getImports,
  getDependencies
};
