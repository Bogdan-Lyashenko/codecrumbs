import React from 'react';
import { Tabs } from 'antd';
import { Skeleton, Alert } from 'antd';

import { FILE_NODE_TYPE } from 'utils/constants';
import { Copy } from 'components/controls/Copy';

import Code from './Code';
import DependenciesTab from './DependenciesTab';
import './SideBar.scss';

const TabPane = Tabs.TabPane;

//TODO: Add slide from right animation
export default ({
  selectedNode,
  onClose,
  selectedTabInSideBar,
  dependenciesOn,
  codeCrumbsOn,
  onTabSelect
}) => {
  const file = selectedNode && selectedNode.type === FILE_NODE_TYPE ? selectedNode : null;

  let header = null;
  let content = null;

  if (file && file.fileCode) {
    header = (
      <React.Fragment>
        <div>{file.path}</div>
        <div className={'copyIcon'}>
          <Copy copyText={file.path} />
        </div>
      </React.Fragment>
    );

    content = (
      <Tabs defaultActiveKey={selectedTabInSideBar} onChange={onTabSelect}>
        <TabPane tab="Code" key="1">
          <Code code={file.fileCode} />
        </TabPane>
        {(dependenciesOn && (
          <TabPane tab="Dependencies" key="2">
            <DependenciesTab />
          </TabPane>
        )) ||
          null}
        {(codeCrumbsOn && (
          <TabPane tab="Crumbs" key="3">
            Here is gonna be some magic with code crumbs
          </TabPane>
        )) ||
          null}
        <TabPane tab="FlowChart" key="4">
          Here is gonna be flow charts
        </TabPane>
      </Tabs>
    );
  } else {
    header = (
      <Alert message="Please select file on diagram to investigate it here." type="info" showIcon />
    );
    content = <Skeleton />;
  }

  return (
    <div className="SideBar">
      <div className="header">
        <div className={'filePath'}>{header}</div>
        <a href="#" onClick={onClose}>
          X
        </a>
      </div>
      <div className="bodySideBar">{content}</div>
    </div>
  );
};
