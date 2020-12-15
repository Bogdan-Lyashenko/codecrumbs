const readdirRecursive = require('fs-readdir-recursive')
const file = require('../../../utils/file')
const extensions = require('./extensions');
const path = require('path');
const parser = require('./parser')

let cache = {}

const addNamespaces = (namespaces, itemPath, parsed) =>
  parsed.children
    ?.filter(parsedChild => parsedChild.name)
    .forEach(parsedChild => {
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
        case 'trait':
        case 'interface':
          namespace.moduleName = `${parsedChild.name}\\${c.name.name}`
        }
      })

      namespaces[itemPath] = namespace
    })

const parse = async (projectDir) => {
  const namespaces = {}
  const tasks = readdirRecursive(projectDir)
    .filter(f => extensions.test('.' + f.split('.').pop()))
    .map(async f => {
      const separator = path.sep;
      const itemPath = `${projectDir}${separator}${f.replace(/\//g, separator)}`
      const fileCode = await file.read(itemPath, 'utf8')
      addNamespaces(namespaces, itemPath, parser.parseCode(fileCode, path.basename(f)))
    });

  await Promise.all(tasks)
  cache = namespaces

  return namespaces
}
const getCache = () => cache

module.exports = {
  parse,
  getCache
}
