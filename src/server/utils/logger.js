const chalk = require('chalk');

const logAdapter = msg => console.log(msg);

module.exports = {
  getText: e => {
    try {
      if (typeof e === 'object') {
        const stringifiedError = JSON.stringify(e);
        return stringifiedError === '{}' ? e : stringifiedError;
      } else {
        return e;
      }
    } catch (e) {
      return `COULD NOT PARSE ERROR ${e}`;
    }
  },
  log: (...args) => logAdapter(chalk.blue.apply(chalk, args)),
  info: (...args) => logAdapter(chalk.green.apply(chalk, args)),
  warn: (...args) => logAdapter(chalk.yellow.apply(chalk, args)),
  error: (...args) => logAdapter(chalk.red.apply(chalk, args)),
  fun: (...args) => logAdapter(chalk.keyword('purple').apply(chalk, args))
};
