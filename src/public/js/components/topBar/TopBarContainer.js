import React from 'react';
import { connect } from 'react-redux';
import { Breadcrumb, Icon } from 'antd';

import { FILE_NODE_TYPE } from 'utils/constants';
import { Copy } from 'components/controls/Copy';
import { getSourceUserChoice } from 'components/dataBus/store/selectors';

import './TopBarContainer.scss';

const TopBarContainer = ({ selectedNode }) => {
  if (!selectedNode)
    return (
      <div className="TopBarContainer">
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
    <div className="TopBarContainer">
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

const mapStateToProps = state => {
  const { selectedNode } = getSourceUserChoice(state);

  return {
    selectedNode
  };
};

export default connect(mapStateToProps)(TopBarContainer);
