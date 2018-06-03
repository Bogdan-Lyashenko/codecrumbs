import React from 'react';
import { Switch, Checkbox, Button } from 'antd';
import './ViewSwitchList.css';
import { VIEW_TYPES } from '../store/constants';

const ViewsSwitchList = ({
    switches,
    toggleSwitch,
    checkedState,
    disabledState,
    fireButtonAction
}) => {
    return (
        <div className="ViewSwitchList-container">
            {switches.map((item, i) => (
                <div className="ViewSwitchList-group" key={item.key}>
                    <div className="ViewSwitchList-big-item">
                        <span>{item.name + ' '}</span>
                        <Switch
                            size="small"
                            checked={checkedState[item.key]}
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
                                        {item.type === VIEW_TYPES.BUTTON ? (
                                            <Button
                                                title={item.title}
                                                disabled={
                                                    disabledState[item.key]
                                                }
                                                size={'small'}
                                                onClick={() =>
                                                    fireButtonAction(item.key)
                                                }
                                            >
                                                <span title={item.title}>
                                                    {item.name}
                                                </span>
                                            </Button>
                                        ) : (
                                            <Checkbox
                                                checked={checkedState[item.key]}
                                                onChange={e =>
                                                    toggleSwitch(
                                                        item.key,
                                                        e.target.checked
                                                    )
                                                }
                                            >
                                                <span title={item.title}>
                                                    {item.name}
                                                </span>
                                            </Checkbox>
                                        )}
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
