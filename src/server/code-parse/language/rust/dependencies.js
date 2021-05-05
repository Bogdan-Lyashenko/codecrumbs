const defaultDependencies = require('../default/dependencies');

// replace with own implementation if needed
module.exports = {
  getImports: defaultDependencies.getImports,
  getDependencies: defaultDependencies.getDependencies
};
