const babylon = require('@babel/parser');
const babelTraverse = require('@babel/traverse');

const astParseConfig = require('../../../../../../shared/astParse').config;

export const filterImportedDependencies = (
  importedDependencies = [],
  selectedDependencyEdgeNodes
) => {
  if (!selectedDependencyEdgeNodes) {
    return [];
  }

  return importedDependencies.filter(dependency => {
    const { sources } = selectedDependencyEdgeNodes;
    return sources.find(source => {
      const pathIndexMath = /\w/.exec(dependency.sourceFile);
      const pathName = dependency.sourceFile.substr(pathIndexMath && pathIndexMath.index);
      return source.indexOf(pathName) !== -1;
    });
  });
};

export const findFileNode = (path, filesMap, foldersMap) => {
  if (foldersMap[path]) {
    path += '/index';
  }

  if (filesMap[path]) {
    return filesMap[path];
  }

  const completePath = Object.keys(filesMap).find(key => key.indexOf(path) === 0);
  return filesMap[completePath];
};

export const getNodeLines = node => [node.loc.start.line, node.loc.end.line];

export const extractExportsForImports = (fileCode, specifiers, path) => {
  let ast = {};
  const exports = [];

  try {
    ast = babylon.parse(fileCode, astParseConfig);

    const isDefaultImported = !!specifiers.find(({ type }) => type === 'ImportDefaultSpecifier');
    const namedImportsNames = specifiers
      .filter(({ type }) => type === 'ImportSpecifier')
      .map(({ name }) => name);

    babelTraverse.default(ast, {
      enter(path) {
        const node = path.node;

        if (isDefaultImported && node.type === 'ExportDefaultDeclaration') {
          exports.push(node);
        } else if (node.type === 'ExportNamedDeclaration') {
          const declaration =
            node.declaration &&
            node.declaration.declarations.find(d => namedImportsNames.includes(d.id.name));
          if (declaration) {
            exports.push(node);
          }
        }
      }
    });

    return exports;
  } catch (e) {
    console.log(path, e);
    return exports;
  }
};
