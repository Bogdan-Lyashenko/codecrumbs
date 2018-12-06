import React from 'react';
import { connect } from 'react-redux';

import { selectNode, toggleFolder } from 'components/dataBus/store/actions';
import SourceTree from './Tree';

const mapStateToProps = state => {
  const { checkedState } = state.viewSwitches;
  const {
    selectedNode,
    filesTreeLayoutNodes,
    openedFolders,
    filesMap,
    dependenciesEntryPoint,
    selectedDependencyEdgeNodes
  } = state.dataBus;

  return {
    sourceDiagramOn: checkedState.source,
    dependenciesDiagramOn: checkedState.dependencies,
    sourceDimFolders: checkedState.sourceDimFolders,
    codeCrumbsDiagramOn: checkedState.codeCrumbs,
    codeCrumbsMinimize: checkedState.codeCrumbsMinimize,
    filesTreeLayoutNodes,
    selectedNode,
    openedFolders,
    filesMap,
    dependenciesEntryPoint,
    selectedDependencyEdgeNodes
  };
};

const mapDispatchToProps = {
  onNodeTextClick: selectNode,
  onFolderIconClick: toggleFolder
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SourceTree);
