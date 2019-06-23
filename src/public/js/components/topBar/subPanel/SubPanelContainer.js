import React from 'react';
import { connect } from 'react-redux';
import { Breadcrumb, Icon } from 'antd';

import { FILE_NODE_TYPE } from '../../../core/constants/index';
import { Copy } from '../controls/Copy/index';
import { getActiveNamespace } from '../../../core/namespaceIntegration/selectors';
import { getSourceUserChoice, getProjectMetadata } from '../../../core/dataBus/selectors';

import './SubPanelContainer.scss';

const SubPanelContainer = ({ selectedNode, platformPathSeparator }) => {
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

  const pathParts = selectedNode.path.split(platformPathSeparator);
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
              onClick={() =>
                console.log(`close folder ${pathParts.slice(0, i).join(platformPathSeparator)}`)
              }
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
  const namespace = getActiveNamespace(state);
  if (!namespace) {
    return {};
  }

  const namespaceProps = { namespace };
  const { selectedNode } = getSourceUserChoice(state, namespaceProps);
  const { platformPathSeparator } = getProjectMetadata(state, namespaceProps);

  return {
    selectedNode,
    platformPathSeparator
  };
};

export default connect(mapStateToProps)(SubPanelContainer);
