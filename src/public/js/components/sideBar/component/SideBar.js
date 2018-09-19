import React from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import './SideBar.scss';
import Code from './Code/Code';
import { Copy } from 'components/controls/Copy';

//TODO: Add slide from right animation
export default ({ file, codeCrumbs = [], importedDependencies = [], onClose }) => {
  const crumbedLines = codeCrumbs.map(codeCrumb => codeCrumb.crumbedLineNode.loc.start.line);
  const importedDependenciesLines = importedDependencies.map(({ node }) => [
    node.loc.start.line,
    node.loc.end.line
  ]);

  return (
    <div className="SideBar">
      <div className="header">
        <div className={'filePath'}>
          <div>{file.path}</div>
          <div className={'copyIcon'}>
            <Copy copyText={file.path} />
          </div>
        </div>
        <a href="#" onClick={onClose}>
          X
        </a>
      </div>

      <div className="body">
        {file.fileCode && (
          <Tabs defaultActiveKey="1" onChange={() => {}}>
            <TabPane tab="Code" key="1">
              <Code
                code={file.fileCode}
                crumbedLines={crumbedLines}
                importedDependenciesLines={importedDependenciesLines}
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
