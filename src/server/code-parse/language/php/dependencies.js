const defaultDependencies = require('../default/dependencies');
const readdirRecursive = require('fs-readdir-recursive')
const file = require('../../../utils/file')

const engine = require('php-parser');
const path = require('path');

// initialize a new parser instance
var parser = new engine({
  // some options :
  parser: {
    extractDoc: true,
    php7: true
  },
  ast: {
    withPositions: true
  }
});


const getDependencies = (entryPoint, projectDir) => {
  // const rootPath = path.resolve()
  const separator = path.sep;

  const phpFileNamespaces = {};

  const tasks = readdirRecursive(projectDir).map(async f => {
    const filePath = `${projectDir}${separator}${f.replace(/\//g, separator)}`

    phpFile = await file.read(filePath, 'utf8')

    const parsed = parser.parseCode(phpFile);

    parsed.children?.forEach(parsedChild => {
      const namespace = {
        moduleName: parsedChild.name,
        importedModuleNames: []
      }
      parsedChild.children?.forEach(c => {
        switch (c.kind) {
        case 'usegroup':
          c.items.forEach(item => {
            namespace.importedModuleNames.push(item.name)
          })
          break
        case 'class':
          namespace.moduleName = `${parsedChild.name}\\${c.name.name}`
        }
      })

      phpFileNamespaces[filePath] = namespace
    })
  })
  return Promise.all(tasks).then(() => {
    const dependencies = {}
    dependencies[entryPoint] = phpFileNamespaces[entryPoint]

    phpFileNamespaces[entryPoint]?.importedModuleNames.forEach((moduleName) => {
      Object.keys(phpFileNamespaces).forEach(filePath => {
        if (phpFileNamespaces[filePath].moduleName !== moduleName) {
          return
        }

        dependencies[filePath] = phpFileNamespaces[filePath]
      })
    })

    return dependencies
  })
};

// replace with own implementation if needed
module.exports = {
  getImports: defaultDependencies.getImports,
  getDependencies: getDependencies
};
