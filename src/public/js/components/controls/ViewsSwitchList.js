import React from 'react';
import { Switch, Form, Icon } from 'antd';
const FormItem = Form.Item;

const Switches = [
    { name: 'Source Structure', key: 'SourceStructure' },
    { name: 'Module Dependencies', key: 'ModuleDependencies' },
    { name: 'Code Crumbs', key: 'CodeCrumbs' }
];

class ViewsSwitchList extends React.Component {
    render() {
        return (
            <Form layout="inline">
                {Switches.map(item => (
                    <FormItem key={item.key}>
                        <span>{item.name + ' '}</span>
                        <Switch
                            defaultChecked
                            onChange={checked =>
                                this.props.onChange(item.key, checked)
                            }
                        />
                    </FormItem>
                ))}
            </Form>
        );
    }
}

export default ViewsSwitchList;
