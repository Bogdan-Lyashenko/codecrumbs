import React from 'react';
import { connect } from 'react-redux';

import SideBar from './component/SideBar';
import { toggleSwitch } from 'components/controls/ViewSwitches/store/actions';
import { FILE_NODE_TYPE } from 'utils/constants';

const SideBarContainer = ({ sideBarOn, ...otherProps }) => {
  if (!sideBarOn) return null;

  //TODO: add animation slide
  return <SideBar {...otherProps} />;
};

const mapStateToProps = state => {
  const { selectedNode, selectedCodeCrumb, selectedDependencyEdgeNodes } = state.dataBus;
  const { checkedState } = state.viewSwitches;

  return {
    selectedNode,
    selectedCodeCrumb,
    selectedDependencyEdgeNodes,
    sideBarOn: checkedState.sideBar,
    dependenciesDiagramOn: checkedState.dependencies,
    codeCrumbsDiagramOn: checkedState.codeCrumbs
  };
};

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(toggleSwitch('sideBar', false))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarContainer);
