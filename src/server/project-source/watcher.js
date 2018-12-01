const chokidar = require('chokidar');
const debounce = require('lodash.debounce');

const createWatcher = (dir, fn) => {
  const DELAY = 100;

  const watcher = chokidar.watch(dir);
  watcher.on('change', debounce(fn, DELAY));

  return watcher;
};

module.exports = {
  createWatcher
};
