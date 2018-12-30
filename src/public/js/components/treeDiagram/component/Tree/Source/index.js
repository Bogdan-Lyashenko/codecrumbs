import React from 'react';
import { connect } from 'react-redux';

import { selectNode, toggleFolder } from 'components/dataBus/store/actions';
import {
  getSource,
  getSourceLayout,
  getSourceUserChoice,
  getDependenciesUserChoice
} from 'components/dataBus/store/selectors';
import { getCheckedState } from 'components/controls/ViewSwitches/store/selectors';
import SourceTree from './Tree';

const mapStateToProps = (state, props) => {
  const {
    sourceDiagramOn,
    dependenciesDiagramOn,
    sourceDimFolders,
    codeCrumbsDiagramOn,
    codeCrumbsMinimize
  } = getCheckedState(state);

  const { filesMap } = getSource(state, props);
  const { sourceLayoutTree } = getSourceLayout(state, props);
  const { selectedNode, openedFolders } = getSourceUserChoice(state, props);
  const { dependenciesEntryName, selectedDependencyEdgeNodes } = getDependenciesUserChoice(
    state,
    props
  );

  return {
    sourceDiagramOn,
    dependenciesDiagramOn,
    sourceDimFolders,
    codeCrumbsDiagramOn,
    codeCrumbsMinimize,
    sourceLayoutTree,
    selectedNode,
    openedFolders,
    filesMap,
    dependenciesEntryName,
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
