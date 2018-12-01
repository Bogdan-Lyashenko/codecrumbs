const addFileFlowsToCodeCrumbedFlows = (codeCrumbedFlows, file) => {
  Object.keys(file.flows).forEach(key => {
    if (!codeCrumbedFlows[key]) {
      codeCrumbedFlows[key] = {};
    }
    codeCrumbedFlows[key][file.path] = key;
  });
};

const resetCodeCrumbedFlowsByFile = (codeCrumbedFlows, file) => {
  Object.keys(file.flows).forEach(key => {
    if (Object.keys(codeCrumbedFlows[key]).length === 1) {
      delete codeCrumbedFlows[key];
    } else {
      delete codeCrumbedFlows[key][file.path];
    }
  });
};

const mergeFileIntoNode = (file, node) => {
  Object.keys(file).forEach(key => {
    node[key] = file[key];
  });

  return node;
};

module.exports = {
  addFileFlowsToCodeCrumbedFlows,
  resetCodeCrumbedFlowsByFile,
  mergeFileIntoNode
};
