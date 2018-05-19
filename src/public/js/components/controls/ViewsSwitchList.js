import React from 'react';
import { Switch, Form, Icon } from 'antd';
const FormItem = Form.Item;
import './ViewSwitchList.css';

export const SWITCH_KEYS = {
    SOURCE: 'SourceStructure',
    DEPENDENCIES: 'ModuleDependencies',
    CODE_CRUMBS: 'CodeCrumbs'
};

const Switches = [
    { name: 'Source', key: SWITCH_KEYS.SOURCE },
    { name: 'Dependencies', key: SWITCH_KEYS.DEPENDENCIES },
    { name: 'CodeCrumbs', key: SWITCH_KEYS.CODE_CRUMBS }
];

const ViewsSwitchList = ({ onChange, defaultChecked }) => {
    return (
        <div className="ViewSwitchList-container">
            <Form layout="inline">
                {Switches.map(item => (
                    <FormItem key={item.key}>
                        <span>{item.name + ' '}</span>
                        <Switch
                            size="small"
                            defaultChecked={item.key === defaultChecked}
                            onChange={checked => onChange(item.key, checked)}
                        />
                    </FormItem>
                ))}
            </Form>
        </div>
    );
};

export default ViewsSwitchList;
