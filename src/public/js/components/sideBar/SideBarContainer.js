import React from 'react';
import { connect } from 'react-redux';

import SideBar from './component/SideBar';
import { toggleSwitch, selectSideBarTab } from 'components/controls/ViewSwitches/store/actions';

const SideBarContainer = ({ sideBarOn, ...otherProps }) => {
  if (!sideBarOn) return null;

  //TODO: add animation slide
  return <SideBar {...otherProps} />;
};

const mapStateToProps = state => {
  const { selectedNode } = state.dataBus;
  const { checkedState, valuesState } = state.viewSwitches;

  return {
    selectedNode,
    sideBarOn: checkedState.sideBar,
    dependenciesOn: checkedState.dependencies,
    codeCrumbsOn: checkedState.codeCrumbs,
    selectedTabInSideBar: valuesState.selectedTabInSideBar
  };
};

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(toggleSwitch('sideBar', false)),
  onTabSelect: tabIndex => dispatch(selectSideBarTab(tabIndex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarContainer);
