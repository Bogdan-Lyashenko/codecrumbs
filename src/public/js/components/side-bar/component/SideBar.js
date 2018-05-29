import React from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import './SideBar.css';
import Code from './Code/Code';

//TODO: Add slide from right animation
export default ({ file, codeCrumb, onClose }) => {
    const crumbedLines = !codeCrumb
        ? []
        : codeCrumb.crumbedLineNode.loc.start.line;

    return (
        <div className="SideBar-container">
            <div className="SideBar-header">
                <div>{file.path}</div>
                <a href="#" onClick={onClose}>
                    X
                </a>
            </div>

            <div className="SideBar-body">
                {file.fileCode && (
                    <Tabs defaultActiveKey="1" onChange={() => {}}>
                        <TabPane tab="Code" key="1">
                            <Code
                                code={file.fileCode}
                                crumbedLines={crumbedLines}
                            />
                        </TabPane>
                        <TabPane tab="FlowChart" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Crumbs" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                )}
            </div>
        </div>
    );
};
