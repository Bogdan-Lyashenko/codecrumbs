import React from 'react';
import { connect } from 'react-redux';

import { toggleSwitch, fireButtonAction } from './store/actions';
import { getSwitches, getCheckedState, getDisabledState } from './store/selectors';
import ViewSwitchList from './component/List/ViewSwitchList';

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
