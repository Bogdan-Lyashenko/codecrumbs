import React from 'react';
import { connect } from 'react-redux';

import { getSourceUserChoice } from 'components/dataBus/store/selectors';
import { toggleSwitch, selectSideBarTab } from 'components/controls/ViewSwitches/store/actions';
import { getCheckedState, getValuesState } from 'components/controls/ViewSwitches/store/selectors';
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
