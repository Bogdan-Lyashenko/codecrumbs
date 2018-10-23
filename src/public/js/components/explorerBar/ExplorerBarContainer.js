import React from 'react';
import { connect } from 'react-redux';

import ExplorerBar from './component/ExplorerBar';
import { selectNode, toggleFolder, setDependenciesEntryPoint } from 'components/dataBus/store/actions';

const ExplorerBarContainer = ({ explorerBarOn, ...otherProps }) => {
  if (!explorerBarOn) return null;

  return <ExplorerBar {...otherProps} />;
};

const mapStateToProps = state => {
  const { filesTreeLayoutNodes, filesMap, foldersMap } = state.dataBus;
  const { checkedState } = state.viewSwitches;

  return {
    nodesTree: [filesTreeLayoutNodes],
    filesMap,
    foldersMap,
    explorerBarOn: checkedState.sourceExplorerBar
  };
};

const mapDispatchToProps = dispatch => ({
  onFolderClick: node => {/*dispatch(toggleFolder(node))*/},

  onFileClick: node => {
    dispatch(selectNode(node));
    //TODO: dependenciesDiagramOn &&
    dispatch(setDependenciesEntryPoint(node));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExplorerBarContainer);
