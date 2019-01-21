import React from 'react';
import { connect } from 'react-redux';

import { selectNode, toggleFolder } from 'core/dataBus/actions';
import {
  getSource,
  getSourceLayout,
  getSourceUserChoice,
  getDependenciesUserChoice
} from 'core/dataBus/selectors';
import { getCheckedState } from 'core/controlsBus/selectors';
import SourceTree from './Tree';

const mapStateToProps = (state, props) => {
  const {
    sourceDiagramOn,
    dependenciesDiagramOn,
    sourceDimFolders,
    codeCrumbsDiagramOn,
    codeCrumbsMinimize
  } = getCheckedState(state);

  const { namespace } = props;
  const namespaceProps = { namespace };
  const { filesMap } = getSource(state, namespaceProps);
  const { sourceLayoutTree } = getSourceLayout(state, namespaceProps);
  const { selectedNode, openedFolders } = getSourceUserChoice(state, namespaceProps);
  const { dependenciesEntryName, selectedDependencyEdgeNodes } = getDependenciesUserChoice(
    state,
    namespaceProps
  );

  return {
    namespace,
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

const mapDispatchToProps = (dispatch, ownProps) => {
  const { namespace } = ownProps;
  return {
    onFileNodeClick: fileNode => dispatch(selectNode(fileNode, namespace)),
    onFolderNodeClick: folderNode => dispatch(toggleFolder(folderNode, namespace))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SourceTree);
