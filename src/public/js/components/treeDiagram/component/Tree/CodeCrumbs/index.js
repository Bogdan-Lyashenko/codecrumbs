import React from 'react';
import { connect } from 'react-redux';

import { selectCodeCrumb } from 'components/dataBus/store/actions';
import Tree from './Tree';

const mapStateToProps = state => {
  const { checkedState } = state.viewSwitches;
  const { fileNodesMap, filesMap, selectedCrumbedFlowKey } = state.dataBus;

  return {
    fileNodesMap,
    filesMap,
    selectedCrumbedFlowKey,
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tree);
