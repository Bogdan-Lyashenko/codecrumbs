import React from 'react';
import { Button, Checkbox, Switch, Menu, Dropdown, Icon } from 'antd';

import { VIEW_TYPES } from 'components/controls/ViewSwitches/store/constants';
import './ViewSwitchList.css';

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
            menuItem = (
              <a title={item.title} onClick={() => toggleSwitch(item.key, !checkedState[item.key])}>
                {checkedState[item.key] ? <Icon type={'check'} /> : null}
                <span title={item.title}>{item.name}</span>
              </a>
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
        <a href="#">
          <span className={'ViewSwitch-name'}>
            {name}
            <Icon type="down" />
          </span>
        </a>
      </Dropdown>
    );
  }

  render() {
    const { name, itemKey, subMenuItems, checkedState, toggleSwitch } = this.props;

    return (
      <div className="ViewSwitchList-group">
        <div className="ViewSwitchList-big-item">
          {checkedState[itemKey] && subMenuItems.length ? (
            this.renderMenu()
          ) : (
            <span className={'ViewSwitch-name'}>{name}</span>
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
