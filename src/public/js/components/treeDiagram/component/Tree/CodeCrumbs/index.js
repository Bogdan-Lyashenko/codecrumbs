import React from 'react';
import { connect } from 'react-redux';

import { selectCodeCrumb } from 'components/dataBus/store/actions';
import FlowEdge from './FlowEdge';
import Tree from './Tree';

const mapStateToProps = state => {
  const { checkedState } = state.viewSwitches;
  const { fileNodesMap, filesMap, selectedCrumbedFlowKey, codeCrumbedFlowsMap } = state.dataBus;

  return {
    fileNodesMap,
    filesMap,
    selectedCrumbedFlowKey,
    codeCrumbedFlowsMap,
    sourceDiagramOn: checkedState.source,
    dependenciesDiagramOn: checkedState.dependencies,
    codeCrumbsDiagramOn: checkedState.codeCrumbs,
    codeCrumbsMinimize: checkedState.codeCrumbsMinimize,
    codeCrumbsLineNumbers: checkedState.codeCrumbsLineNumbers
  };
};

const mapDispatchToProps = {
  onCodeCrumbSelect: selectCodeCrumb
};

export const CodeCrumbedFlowEdges = connect(mapStateToProps)(FlowEdge);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tree);
