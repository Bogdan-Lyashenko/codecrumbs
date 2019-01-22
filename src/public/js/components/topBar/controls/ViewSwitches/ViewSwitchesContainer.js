import React from 'react';
import { connect } from 'react-redux';

import { getNamespacesList } from 'core/dataBus/selectors';

import { toggleSwitch, fireButtonAction } from 'core/controlsBus/actions';
import { getSwitches, getCheckedState, getDisabledState } from 'core/controlsBus/selectors';

import ViewSwitchList from './List/ViewSwitchList';

const mapStateToProps = state => {
  return {
    namespacesList: getNamespacesList(state),
    switches: getSwitches(state),
    checkedState: getCheckedState(state),
    disabledState: getDisabledState(state)
  };
};

const mapDispatchToProps = {
  toggleSwitch,
  fireButtonAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewSwitchList);
