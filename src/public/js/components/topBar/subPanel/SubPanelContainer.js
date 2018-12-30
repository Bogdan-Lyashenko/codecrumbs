import React from 'react';
import { connect } from 'react-redux';
import { Breadcrumb, Icon } from 'antd';

import { FILE_NODE_TYPE } from 'core/constants/index';
import { Copy } from 'components/controls/Copy/index';
import { getSourceUserChoice } from 'core/dataBus/selectors';

import './SubPanelContainer.scss';

const SubPanelContainer = ({ selectedNode }) => {
  if (!selectedNode)
    return (
      <div className="SubPanelContainer">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Icon type="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item> </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );

  const pathParts = selectedNode.path.split('/');
  const lastNode = selectedNode.type === FILE_NODE_TYPE ? pathParts.pop() : null;

  // TODO: close folder on click
  return (
    <div className="SubPanelContainer">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Icon type="home" />
        </Breadcrumb.Item>
        {pathParts.map((part, i) => (
          <Breadcrumb.Item key={part + i}>
            <a
              href="#"
              onClick={() => console.log(`close folder ${pathParts.slice(0, i).join('/')}`)}
            >
              {part}
            </a>
          </Breadcrumb.Item>
        ))}
        {lastNode && <Breadcrumb.Item>{lastNode}</Breadcrumb.Item>}
      </Breadcrumb>
      <div className={'copyIcon'}>
        <Copy copyText={selectedNode.path} />
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const { selectedNode } = getSourceUserChoice(state, props);

  return {
    selectedNode
  };
};

export default connect(mapStateToProps)(SubPanelContainer);
