import React from 'react';
import { connect } from 'react-redux';

import { toggleSwitch, fireButtonAction } from './store/actions';

import ViewSwitch from './component/ViewSwitch';
import './component/ViewSwitchList.scss';

const ViewSwitchList = props => {
  const { switches, toggleSwitch, fireButtonAction, checkedState, disabledState } = props;

  return (
    <div className="ViewSwitchList">
      {switches.map((item, i) => (
        <ViewSwitch
          key={item.key}
          itemKey={item.key}
          name={item.name}
          subMenuItems={item.children}
          checkedState={checkedState}
          disabledState={disabledState}
          toggleSwitch={toggleSwitch}
          fireButtonAction={fireButtonAction}
        />
      ))}
    </div>
  );
};

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
