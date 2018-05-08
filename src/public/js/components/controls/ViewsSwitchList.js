import React from 'react';
import { Switch, Form } from 'antd';
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
                        <FormItem>
                            <h4>{item.name}</h4>
                        </FormItem>
                        <FormItem>
                            <Switch
                                defaultChecked
                                onChange={checked =>
                                    this.props.onChange(item.key, checked)
                                }
                            />
                        </FormItem>
                    </FormItem>
                ))}
            </Form>
        );
    }
}

export default ViewsSwitchList;
