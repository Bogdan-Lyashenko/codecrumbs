import React from 'react';
import { connect } from 'react-redux';
import { Breadcrumb, Icon } from 'antd';

import { FILE_NODE_TYPE } from 'utils/constants';
import './TopBarContainer.css';

const TopBarContainer = ({ selectedNode }) => {
  if (!selectedNode)
    return (
      <div className={'TopBarContainer-wrapper'}>
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
    <div className={'TopBarContainer-wrapper'}>
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
    </div>
  );
};

const mapStateToProps = state => {
  const { selectedNode } = state.dataBus;

  return {
    selectedNode
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBarContainer);
