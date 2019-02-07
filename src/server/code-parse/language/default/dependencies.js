const getImports = (fileCode, itemPath) => {
  const importedDependencies = [];

  return importedDependencies;
};

const getDependencies = (entryPoint, projectDir, webpackConfigPath) => {
  return Promise.resolve([]);
};

module.exports = {
  getImports,
  getDependencies
};
