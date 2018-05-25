import React from 'react';
import { Switch, Form, Icon } from 'antd';
const FormItem = Form.Item;
import './ViewSwitchList.css';

const ViewsSwitchList = ({ switches, toggleSwitch, defaultChecked }) => {
    return (
        <div className="ViewSwitchList-container">
            <Form layout="inline">
                {switches.map(item => (
                    <FormItem key={item.key}>
                        <span>{item.name + ' '}</span>
                        <Switch
                            size="small"
                            defaultChecked={item.key === defaultChecked}
                            onChange={checked =>
                                toggleSwitch(item.key, checked)
                            }
                        />
                    </FormItem>
                ))}
            </Form>
        </div>
    );
};

export default ViewsSwitchList;
