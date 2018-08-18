import React from 'react';
import { Switch, Checkbox, Button } from 'antd';

import './ViewSwitchList.css';
import { VIEW_TYPES } from 'components/controls/ViewSwitches/store/constants';

class ViewsSwitchList extends React.Component {
  renderChildren(controls) {
    const { toggleSwitch, checkedState, disabledState, fireButtonAction } = this.props;

    return (
      <div className="ViewSwitchList-small-group">
        {controls.map((item, i) => {
          return (
            <div key={item.key} className="ViewSwitchList-small-item">
              {item.type === VIEW_TYPES.BUTTON ? (
                <Button
                  title={item.title}
                  size={'small'}
                  disabled={disabledState[item.key]}
                  onClick={() => fireButtonAction(item.key)}
                >
                  <span title={item.title}>{item.name}</span>
                </Button>
              ) : (
                <Checkbox
                  checked={checkedState[item.key]}
                  onChange={e => toggleSwitch(item.key, e.target.checked)}
                >
                  <span title={item.title}>{item.name}</span>
                </Checkbox>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    const { switches, toggleSwitch, checkedState } = this.props;

    return (
      <div className="ViewSwitchList-container">
        {switches.map((item, i) => {
          return (
            <div className="ViewSwitchList-group" key={item.key}>
              <div className="ViewSwitchList-big-item">
                <span>{item.name + ' '}</span>
                <Switch
                  size="small"
                  checked={checkedState[item.key]}
                  onChange={checked => toggleSwitch(item.key, checked)}
                />
              </div>

              {(checkedState[item.key] &&
                item.children.length &&
                this.renderChildren(item.children)) ||
                null}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ViewsSwitchList;
