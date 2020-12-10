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
    const dependence = {
      importNodeLines: [],
      sourceFile: null,
      specifiers: [],
    }
    parsedChild.children?.forEach(c => {
      switch (c.kind) {
      case 'usegroup':
        c.items.forEach(item => {
          dependence.importNodeLines = [
            item.loc.start.line,
            item.loc.end.line,
          ]
          dependence.sourceFile = findSourceFile(item.name)
        })
        break
      case 'class':
        // dependence.sourceFile = `${parsedChild.name}\\${c.name.name}`
      }
    })
    dependencies.push(dependence)
  })
  return dependencies
}

// replace with own implementation if needed
module.exports = {
  getImports: getImports,
  getDependencies: getDependencies
};
