import React from 'react';
import { connect } from 'react-redux';

import { selectCodeCrumb } from 'core/dataBus/actions';
import { getSource, getSourceLayout, getCodeCrumbsUserChoice } from 'core/dataBus/selectors';
import { getCheckedState } from 'core/controlsBus/selectors';
import Tree from './Tree';

const mapStateToProps = (state, props) => {
  const { filesMap } = getSource(state, props);
  const { filesLayoutMap } = getSourceLayout(state, props);
  const { selectedCrumbedFlowKey } = getCodeCrumbsUserChoice(state, props);
  const {
    sourceDiagramOn,
    dependenciesDiagramOn,
    codeCrumbsDiagramOn,
    codeCrumbsMinimize,
    codeCrumbsLineNumbers
  } = getCheckedState(state);

  return {
    filesLayoutMap,
    filesMap,
    selectedCrumbedFlowKey,
    sourceDiagramOn,
    dependenciesDiagramOn,
    codeCrumbsDiagramOn,
    codeCrumbsMinimize,
    codeCrumbsLineNumbers
  };
};

const mapDispatchToProps = {
  onCodeCrumbSelect: selectCodeCrumb
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tree);
