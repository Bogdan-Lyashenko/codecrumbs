import React from 'react';
import { connect } from 'react-redux';

import SideBar from './component/SideBar';
import { selectNode } from 'components/dataBus/store/actions';
import { FILE_NODE_TYPE } from 'utils/constants';

const SideBarContainer = ({ selectedNode, selectedCodeCrumb, onClose }) => {
  if (!selectedNode || selectedNode.type !== FILE_NODE_TYPE) return null;

  //TODO: add animation slide
  return <SideBar file={selectedNode} codeCrumb={selectedCodeCrumb} onClose={onClose} />;
};

const mapStateToProps = state => {
  const { selectedNode, selectedCodeCrumb } = state.dataBus;

  return {
    selectedNode,
    selectedCodeCrumb
  };
};

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(selectNode(null))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarContainer);
