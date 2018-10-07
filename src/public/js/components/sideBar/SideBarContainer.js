import React from 'react';
import { connect } from 'react-redux';

import SideBar from './component/SideBar';
import { toggleSwitch } from 'components/controls/ViewSwitches/store/actions';

const SideBarContainer = ({ sideBarOn, ...otherProps }) => {
  if (!sideBarOn) return null;

  //TODO: add animation slide
  return <SideBar {...otherProps} />;
};

const mapStateToProps = state => {
  const { selectedNode } = state.dataBus;
  const { checkedState } = state.viewSwitches;

  return {
    selectedNode,
    sideBarOn: checkedState.sideBar
  };
};

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(toggleSwitch('sideBar', false))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarContainer);
