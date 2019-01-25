import React from 'react';
import { connect } from 'react-redux';

import { getActiveNamespace } from 'core/namespaceIntegration/selectors';

import { toggleSwitch, fireButtonAction } from 'core/controlsBus/actions';
import { getSwitches, getCheckedState, getDisabledState } from 'core/controlsBus/selectors';

import ViewSwitchList from './List/ViewSwitchList';

const mapStateToProps = state => ({
  activeNamespace: getActiveNamespace(state),
  switches: getSwitches(state),
  checkedState: getCheckedState(state),
  disabledState: getDisabledState(state)
});

const mapDispatchToProps = {
  toggleSwitch,
  fireButtonAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewSwitchList);
