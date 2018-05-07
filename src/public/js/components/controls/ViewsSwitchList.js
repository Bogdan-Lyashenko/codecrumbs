import React from 'react';
import { Switch, Row, Col } from 'antd';

class ViewsSwitchList extends React.Component {
    onChange = checked => {
        console.log(`switch to ${checked}`);
    };

    render() {
        return (
            <Row>
                <Col span={6}>
                    <h3>module dependencies</h3>
                </Col>
                <Col span={6}>
                    <Switch defaultChecked onChange={this.onChange} />
                </Col>
            </Row>
        );
    }
}

export default ViewsSwitchList;
