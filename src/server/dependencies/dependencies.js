const babylon = require('@babel/parser');
const babelTraverse = require('@babel/traverse');

const getImports = fileCode => {
  let ast = {};
  const importedDependencies = [];

  try {
    ast = babylon.parse(fileCode, { sourceType: 'module' });
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
