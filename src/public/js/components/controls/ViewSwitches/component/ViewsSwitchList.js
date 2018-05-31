import React from 'react';
import { Switch, Checkbox, Icon } from 'antd';
import './ViewSwitchList.css';

const ViewsSwitchList = ({
    switches,
    toggleSwitch,
    defaultChecked,
    checkedState
}) => {
    return (
        <div className="ViewSwitchList-container">
            {switches.map((item, i) => (
                <div className="ViewSwitchList-group" key={item.key}>
                    <div className="ViewSwitchList-big-item">
                        <span>{item.name + ' '}</span>
                        <Switch
                            size="small"
                            defaultChecked={item.key === defaultChecked}
                            onChange={checked =>
                                toggleSwitch(item.key, checked)
                            }
                        />
                    </div>

                    {(checkedState[item.key] &&
                        item.checkBoxes.length && (
                            <div className="ViewSwitchList-small-group">
                                {item.checkBoxes.map((item, i) => (
                                    <div
                                        key={item.key}
                                        className="ViewSwitchList-small-item"
                                    >
                                        <Checkbox
                                            onChange={e =>
                                                toggleSwitch(
                                                    item.key,
                                                    e.target.checked
                                                )
                                            }
                                        >
                                            <span title={item.title || ''}>
                                                {item.name}
                                            </span>
                                        </Checkbox>
                                    </div>
                                ))}
                            </div>
                        )) ||
                        null}
                </div>
            ))}
        </div>
    );
};

export default ViewsSwitchList;
