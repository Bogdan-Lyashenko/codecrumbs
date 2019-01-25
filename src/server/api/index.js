const codeParser = require('../code-parse');

const parseFiles = ({ path, parseDependencies }, projectDir) =>
  Promise.all(
    path.map(itemPath =>
      codeParser.parseFile(itemPath, projectDir, {
        attachCode: true,
        parseDependencies
      })
    )
  );

module.exports = {
  parseFiles
};
