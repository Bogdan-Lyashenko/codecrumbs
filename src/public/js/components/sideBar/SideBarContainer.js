import React from 'react';
import { connect } from 'react-redux';

import { getSourceUserChoice } from 'core/dataBus/selectors';
import { toggleSwitch, selectSideBarTab } from 'core/controlsBus/actions';
import { getCheckedState, getValuesState } from 'core/controlsBus/selectors';
import SideBar from './component/SideBar';

const SideBarContainer = ({ sideBar, ...otherProps }) => {
  if (!sideBar) return null;

  //TODO: add animation slide
  return <SideBar {...otherProps} />;
};

const mapStateToProps = (state, props) => {
  const { selectedNode } = getSourceUserChoice(state, props);
  const { selectedTabInSideBar } = getValuesState(state, props);

  const { sideBar, dependenciesDiagramOn, codeCrumbsDiagramOn } = getCheckedState(state);

  return {
    selectedNode,
    sideBar,
    dependenciesDiagramOn,
    codeCrumbsDiagramOn,
    selectedTabInSideBar
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
