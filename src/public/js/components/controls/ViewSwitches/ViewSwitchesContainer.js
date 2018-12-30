import React from 'react';
import { connect } from 'react-redux';

import { toggleSwitch, fireButtonAction } from 'core/controlsBus/actions';
import { getSwitches, getCheckedState, getDisabledState } from 'core/controlsBus/selectors';

import ViewSwitchList from './List/ViewSwitchList';

const mapStateToProps = state => {
  return {
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
