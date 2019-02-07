const codeParser = require('../code-parse');

const parseFiles = ({ path, parseDependencies }, projectDir, prLang) =>
  Promise.all(
    path.map(itemPath =>
      codeParser.parseFile(itemPath, projectDir, {
        attachCode: true,
        parseDependencies,
        prLang
      })
    )
  );

module.exports = {
  parseFiles
};
