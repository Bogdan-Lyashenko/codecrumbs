const chalk = require('chalk');

let isDebugModeEnabled = false;
const logAdapter = (msg, force) => (isDebugModeEnabled || force) && console.log(msg);

module.exports = {
  getText: e => {
    try {
      return typeof e === 'object' ? JSON.stringify(e) : e;
    } catch (e) {
      return `COULD NOT PARSE ERROR ${e}`;
    }
  },
  log: (...args) => logAdapter(chalk.blue.apply(chalk, args)),
  info: (...args) => logAdapter(chalk.green.apply(chalk, args)),
  warn: (...args) => logAdapter(chalk.yellow.apply(chalk, args)),
  error: (...args) => logAdapter(chalk.red.apply(chalk, args), true),
  fun: (...args) => logAdapter(chalk.keyword('purple').apply(chalk, args), true),
  setDebugModeEnabled: (debugModeEnabled) => isDebugModeEnabled = debugModeEnabled
};
