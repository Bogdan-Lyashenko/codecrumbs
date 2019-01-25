import React from 'react';
import { connect } from 'react-redux';

import { getActiveNamespace } from 'core/namespaceIntegration/selectors';
import { getSourceUserChoice, getSource } from 'core/dataBus/selectors';
import { toggleSwitch, selectSideBarTab } from 'core/controlsBus/actions';
import { getCheckedState, getValuesState } from 'core/controlsBus/selectors';
import SideBar from './component/SideBar';

const SideBarContainer = ({ sideBar, ...otherProps }) => {
  if (!sideBar) return null;

  //TODO: add animation slide
  return <SideBar {...otherProps} />;
};

const mapStateToProps = (state, props) => {
  const namespace = getActiveNamespace(state);
  if (!namespace) {
    return {};
  }

  const { selectedNode } = getSourceUserChoice(state, { namespace });
  const { filesMap } = getSource(state, { namespace });
  const { selectedTabInSideBar } = getValuesState(state, props);
  const { sideBar, dependenciesDiagramOn, codeCrumbsDiagramOn } = getCheckedState(state);

  return {
    namespace,
    selectedNode,
    filesMap,
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
