import React from 'react';
import { connect } from 'react-redux';

import { getSource, getSourceLayout } from 'core/dataBus/selectors';
import { selectNode } from 'core/dataBus/actions';
import { getCheckedState } from 'core/controlsBus/selectors';

import ExplorerBar from './component/ExplorerBar';

const ExplorerBarContainer = ({ explorerBar, ...otherProps }) => {
  if (!explorerBar) return null;

  return <ExplorerBar {...otherProps} />;
};

const mapStateToProps = (state, props) => {
  const { filesMap, foldersMap } = getSource(state, props);
  const { sourceLayoutTree } = getSourceLayout(state, props);

  const { explorerBar } = getCheckedState(state);

  return {
    nodesTree: [sourceLayoutTree],
    filesMap,
    foldersMap,
    explorerBar
  };
};

const mapDispatchToProps = dispatch => ({
  onFolderClick: node => {
    /*dispatch(toggleFolder(node))*/
  },

  onFileClick: node => {
    dispatch(selectNode(node));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExplorerBarContainer);
