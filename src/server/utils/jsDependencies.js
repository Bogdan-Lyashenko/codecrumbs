const babylon = require('@babel/parser');
const babelTraverse = require('@babel/traverse');

const { convertRelativeToAbsolutePath } = require('../code-parse/path');

const getImports = (fileCode, itemPath, astParseConfig, getNodeLines ) => {
  let ast = {};
  const importedDependencies = [];
  //TODO: move to one file in util, to keep config in one place
  try {
    ast = babylon.parse(fileCode, astParseConfig);
    // TODO: combine with codecrumkbs babelTraverse, no need to do babelTraverse twice per file
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
    //console.log('Dependencies: getImports', itemPath, e);
    return importedDependencies;
  }
};

module.exports = { getImports };