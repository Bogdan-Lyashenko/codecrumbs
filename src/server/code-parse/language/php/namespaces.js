const readdirRecursive = require('fs-readdir-recursive')
const file = require('../../../utils/file')
const extensions = require('./extensions');
const path = require('path');
const parser = require('./parser')

const namespaces = {};

const setNamespaces = async (projectDir) => {
  const separator = path.sep;
  const tasks = readdirRecursive(projectDir)
    .filter(f => extensions.test('.' + f.split('.').pop()))
    .map(async f => {
      const itemPath = `${projectDir}${separator}${f.replace(/\//g, separator)}`
      const fileCode = await file.read(itemPath, 'utf8')
      const parsed = parser.parseCode(fileCode, path.basename(f));

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

        namespaces[itemPath] = namespace
      })
    });

  await Promise.all(tasks)
}
const getNamespaces = () => namespaces

module.exports = {
  setNamespaces,
  getNamespaces
}
