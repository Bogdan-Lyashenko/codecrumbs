import React from 'react';
import classNames from 'classnames';

import FlowSelect from 'components/topBar/controls/FlowSelect/index';
import ZoomControl from 'components/topBar/controls/ZoomControl/index';
import SettingsControl from 'components/topBar/controls/SettingsControl/index';

import ViewSwitch from '../Item/ViewSwitch';
import './ViewSwitchList.scss';

const ViewSwitchList = props => {
  const { switches, toggleSwitch, fireButtonAction, checkedState, disabledState } = props;
  const leftSide = [],
    rightSide = [];

  switches.forEach((item, i) => {
    const isLastItem = i === switches.length - 1;
    const side = isLastItem ? rightSide : leftSide;

    side.push(
      <div className={classNames({ itemSpacingWrapper: !isLastItem })} key={item.key}>
        <ViewSwitch
          itemKey={item.key}
          name={item.name}
          subMenuItems={item.children}
          checkedState={checkedState}
          disabledState={disabledState}
          toggleSwitch={toggleSwitch}
          fireButtonAction={fireButtonAction}
        />
      </div>
    );
  });

  return (
    <div className="ViewSwitchList">
      <div className={'side'}>
        {leftSide}
        <FlowSelect />
      </div>
      {/*<div className={'side'}>
        <ZoomControl />
      </div>*/}
      <div className={'side'}>
        {rightSide.concat(
          <div className={'settingContainer'} key={'setting'}>
            <div className={'spacer'} />
            <SettingsControl />
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewSwitchList;
