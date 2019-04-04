import React from 'react';
import { connect } from 'react-redux';

import { getActiveNamespace } from 'core/namespaceIntegration/selectors';
import { getProjectMetadata } from 'core/dataBus/selectors';

import { CONTROLS_KEYS } from 'core/controlsBus/constants';
import { toggleSwitch, fireButtonAction } from 'core/controlsBus/actions';
import { getSwitches, getCheckedState, getDisabledState } from 'core/controlsBus/selectors';

import ViewSwitchList from './List/ViewSwitchList';

const mapStateToProps = state => {
  const namespace = getActiveNamespace(state);
  const { fullFeaturesSupport } = namespace
    ? getProjectMetadata(state, { namespace })
    : { fullFeaturesSupport: false };

  const switches = getSwitches(state);
  
  return {
    activeNamespace: namespace,
    checkedState: getCheckedState(state),
    disabledState: getDisabledState(state),
    switches: fullFeaturesSupport
      ? switches
      : switches.filter(s => s.key !== CONTROLS_KEYS.DEPENDENCIES_DIAGRAM_ON)
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
