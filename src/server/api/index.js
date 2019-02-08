const codeParser = require('../code-parse');

const parseFiles = ({ path, parseDependencies }, projectDir, language) =>
  Promise.all(
    path.map(itemPath =>
      codeParser.parseFile(itemPath, projectDir, {
        attachCode: true,
        parseDependencies,
        language
      })
    )
  );

module.exports = {
  parseFiles
};
