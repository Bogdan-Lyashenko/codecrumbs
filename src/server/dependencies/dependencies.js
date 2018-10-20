const babylon = require('@babel/parser');
const babelTraverse = require('@babel/traverse');

const astParseConfig = require('../../shared/astParse').config;

const getImports = fileCode => {
  let ast = {};
  const importedDependencies = [];

  //TODO: move to one file in util, to keep config in one place
  try {
    ast = babylon.parse(fileCode, astParseConfig);
  } catch (e) {
    console.log(e);
    return importedDependencies;
  }

  babelTraverse.default(ast, {
    enter(path) {
      const node = path.node;

      if (node.type === 'ImportDeclaration') {
        importedDependencies.push({
          node,
          sourceFile: node.source && node.source.value,
          specifiers: node.specifiers.map(({ type, imported, local }) => ({
            type,
            name: (imported || local || {}).name
          }))
        });
      }
    }
  });

  return importedDependencies;
};

module.exports = {
  getImports
};
