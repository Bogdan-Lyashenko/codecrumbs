const path = require('path');
const namespaces = require('./namespaces')
const parser = require('./parser')

const getDependencies = async (entryPoint, projectDir) => {
  await namespaces.setNamespaces(projectDir)
  const phpNamespaces = namespaces.getNamespaces()

  const dependencies = {
    [entryPoint]: phpNamespaces[entryPoint]
  }

  phpNamespaces[entryPoint]?.importedModuleNames.forEach((moduleName) => {
    Object.keys(phpNamespaces).forEach(itemPath => {
      if (phpNamespaces[itemPath].moduleName !== moduleName) {
        return
      }

      dependencies[itemPath] = phpNamespaces[itemPath]
    })
  })
  return dependencies
};

const getImports = (fileCode, itemPath) => {
  const phpNamespaces = namespaces.getNamespaces();
  const parsed = parser.parseCode(fileCode, path.basename(itemPath));
  const dependencies = [];

  const findSourceFile = (phpNamespace) => {
    return Object.keys(phpNamespaces).find(key => {
        return phpNamespaces[key].moduleName === phpNamespace
      }
    ) ?? null
  }

  parsed.children?.forEach(parsedChild => {
    parsedChild.children?.forEach(c => {
      if (c.kind !== 'usegroup') {
        return
      }
      const dependence = {
        importNodeLines: [
          c.loc.start.line,
          c.loc.end.line,
        ],
        sourceFile: null,
        specifiers: [],
      }
      c.items.forEach(item => {
        dependence.sourceFile = findSourceFile(item.name)
        const importSpecifierName = dependence?.sourceFile?.split('/').pop()
        if (importSpecifierName) {
          dependence.specifiers.push({
            type: 'ImportSpecifier',
            name: importSpecifierName
          })
        }
      })
      dependencies.push(dependence)
    })
  })
  return dependencies.filter(({sourceFile}) => !!sourceFile)
}

// replace with own implementation if needed
module.exports = {
  getImports: getImports,
  getDependencies: getDependencies
};
