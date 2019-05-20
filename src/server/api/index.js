const exec = require('child_process').exec;

const logger = require('../utils/logger');
const codeParser = require('../code-parse');

const parseFiles = ( {path, parseDependencies}, {webpackConfigPath, tsConfigPath , projectDir, language}) => 
  Promise.all(
    path.map(itemPath =>
      codeParser.parseFile(itemPath, projectDir, {
        attachCode: true,
        parseDependencies,
        language,
        webpackConfigPath,
        tsConfigPath
      })
    )
  );

const openFileInEditor = ({ path, line }, command = 'webstorm') => {
  exec(`${command} ${path}${line ? `:${line}` : ''}`, err => {
    if (err) {
      logger.error(`Failed to open file ${path}`, err);
    }
  });
};

module.exports = {
  parseFiles,
  openFileInEditor
};
