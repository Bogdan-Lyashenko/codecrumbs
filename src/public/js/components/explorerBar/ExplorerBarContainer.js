import React from 'react';
import { connect } from 'react-redux';

import { getSource, getSourceLayout } from 'components/dataBus/store/selectors';
import { selectNode } from 'components/dataBus/store/actions';
import { getCheckedState } from 'components/controls/ViewSwitches/store/selectors';

import ExplorerBar from './component/ExplorerBar';

const ExplorerBarContainer = ({ explorerBar, ...otherProps }) => {
  if (!explorerBar) return null;

  return <ExplorerBar {...otherProps} />;
};

const mapStateToProps = state => {
  const { filesMap, foldersMap } = getSource(state);
  const { sourceLayoutTree } = getSourceLayout(state);
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
