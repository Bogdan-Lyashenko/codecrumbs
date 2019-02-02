const Watchpack = require('watchpack');

const createWatcher = (dir, fn) => {
  const watcher = new Watchpack({});

  watcher.watch([], [dir], Date.now() + 1000);
  watcher.on('change', fn);

  return watcher;
};

module.exports = {
  createWatcher
};
