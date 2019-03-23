export const isCodeCrumbsEqual = (cc, currentCc) =>
  cc.name === currentCc.name && cc.flowStep === currentCc.flowStep;

export const isCodeCrumbSelected = (selectedCcFlowEdgeNodes, cc) => {
  if (!selectedCcFlowEdgeNodes) return false;

  return (
    isCodeCrumbsEqual(selectedCcFlowEdgeNodes.source, cc) ||
    isCodeCrumbsEqual(selectedCcFlowEdgeNodes.target, cc)
  );
};
