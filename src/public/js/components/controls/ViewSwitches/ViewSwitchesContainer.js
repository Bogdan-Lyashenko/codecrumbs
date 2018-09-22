import React from 'react';
import { connect } from 'react-redux';

import { toggleSwitch, fireButtonAction } from './store/actions';
import ViewSwitchList from './component/List/ViewSwitchList';

const mapStateToProps = state => {
  const { switches, checkedState, disabledState } = state.viewSwitches;

  return { switches, checkedState, disabledState };
};

const mapDispatchToProps = {
  toggleSwitch,
  fireButtonAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewSwitchList);
