import React from 'react';
import { connect } from 'react-redux';

import { selectNode, selectNodeToOpenInEditor, toggleFolder } from 'core/dataBus/actions';
import {
  getSource,
  getSourceLayout,
  getSourceUserChoice,
  getDependenciesUserChoice,
  getProjectMetadata
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
  const { language } = getProjectMetadata(state, namespaceProps);
  const { selectedNode, openedFolders } = getSourceUserChoice(state, namespaceProps);
  const { dependenciesEntryName, selectedDependencyEdgeNodes } = getDependenciesUserChoice(
    state,
    namespaceProps
  );

  return {
    namespace,
    language,
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

const mapDispatchToProps = (dispatch, props) => {
  const { namespace } = props;
  return {
    onFileNodeClick: (event, fileNode) => {
      event.preventDefault();
      event.stopPropagation();

      return event.metaKey
        ? dispatch(selectNodeToOpenInEditor(fileNode, namespace))
        : dispatch(selectNode(fileNode, namespace));
    },
    onFolderNodeClick: folderNode => dispatch(toggleFolder(folderNode, namespace))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SourceTree);
