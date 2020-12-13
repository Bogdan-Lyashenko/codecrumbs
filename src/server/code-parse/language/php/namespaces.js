const readdirRecursive = require('fs-readdir-recursive')
const file = require('../../../utils/file')
const extensions = require('./extensions');
const path = require('path');
const parser = require('./parser')

const namespaces = {};

const parse = async (projectDir) => {
  const setNamespaces = (itemPath, parsed) =>
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

  const tasks = readdirRecursive(projectDir)
    .filter(f => extensions.test('.' + f.split('.').pop()))
    .map(async f => {
      const separator = path.sep;
      const itemPath = `${projectDir}${separator}${f.replace(/\//g, separator)}`
      const fileCode = await file.read(itemPath, 'utf8')
      setNamespaces(itemPath, parser.parseCode(fileCode, path.basename(f)))
    });

  await Promise.all(tasks)
}
const get = () => namespaces

module.exports = {
  parse,
  get
}
