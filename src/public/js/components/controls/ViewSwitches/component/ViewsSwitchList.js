import React from 'react';

import './ViewSwitchList.css';
import ViewSwitch from './ViewSwitch';

class ViewsSwitchList extends React.Component {
  render() {
    const { switches, toggleSwitch, fireButtonAction, checkedState, disabledState } = this.props;

    return (
      <div className="ViewSwitchList-container">
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
  }
}

export default ViewsSwitchList;
