import React from 'react';
import { Switch, Menu, Dropdown, Icon } from 'antd';

import { VIEW_TYPES } from '../../../../../core/controlsBus/constants';
import './ViewSwitch.scss';

class ViewSwitch extends React.Component {
  renderMenu() {
    const {
      name,
      subMenuItems,
      checkedState,
      disabledState,
      toggleSwitch,
      fireButtonAction
    } = this.props;

    const menu = (
      <Menu>
        {subMenuItems.map(item => {
          let menuItem = null;

          if (item.type === VIEW_TYPES.BUTTON) {
            const itemName = (
              <React.Fragment>
                {item.icon ? <Icon type={item.icon} /> : null}
                <span title={item.title}>{' ' + item.name}</span>
              </React.Fragment>
            );
            menuItem = !disabledState[item.key] ? (
              <a title={item.title} onClick={() => fireButtonAction(item.key)}>
                {itemName}
              </a>
            ) : (
              itemName
            );
          } else {
            const tickAndName = (
              <React.Fragment>
                {checkedState[item.key] ? <Icon type={'check'} /> : null}
                <span title={item.title}>{item.name}</span>
              </React.Fragment>
            );
            menuItem = !disabledState[item.key] ? (
              <a title={item.title} onClick={() => toggleSwitch(item.key, !checkedState[item.key])}>
                {tickAndName}
              </a>
            ) : (
              tickAndName
            );
          }

          return (
            <Menu.Item key={`${name}-${item.key}`} disabled={disabledState[item.key]}>
              {menuItem}
            </Menu.Item>
          );
        })}
      </Menu>
    );

    return (
      <Dropdown overlay={menu} trigger={['click']}>
        <a href="#" className="viewSwitchName">
          {name}
          <Icon type="down" />
        </a>
      </Dropdown>
    );
  }

  render() {
    const { name, itemKey, subMenuItems, checkedState, toggleSwitch } = this.props;

    return (
      <div className="ViewSwitchItem">
        <div className="big-item">
          {checkedState[itemKey] && subMenuItems.length ? (
            this.renderMenu()
          ) : (
            <span className="viewSwitchName">{name}</span>
          )}
          <Switch
            size="small"
            checked={checkedState[itemKey]}
            onChange={v => toggleSwitch(itemKey, v)}
          />
        </div>
      </div>
    );
  }
}

export default ViewSwitch;
