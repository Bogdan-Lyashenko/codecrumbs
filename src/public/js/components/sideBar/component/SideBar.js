import React from 'react';
import { Tabs } from 'antd';
import { Skeleton, Alert } from 'antd';

import { FILE_NODE_TYPE } from 'utils/constants';
import { Copy } from 'components/controls/Copy';
import CodeTab from './CodeTab';
import './SideBar.scss';

const TabPane = Tabs.TabPane;

//TODO: Add slide from right animation
export default ({ selectedNode, onClose }) => {
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
      <Tabs defaultActiveKey="1" onChange={() => {}}>
        <TabPane tab="Code" key="1">
          <CodeTab />
        </TabPane>
        <TabPane tab="Dependencies" key="2">
          Here is gonna be more dependencies features, like only code on implementation of imports,
          etc
        </TabPane>
        <TabPane tab="Crumbs" key="3">
          Here is gonna be some magic with code crumbs
        </TabPane>
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
      <div className="body">{content}</div>
    </div>
  );
};
