import React from 'react';
import { connect } from 'react-redux';
import { Breadcrumb } from 'antd';
import { FILE_NODE_TYPE } from 'utils/constants';

const TopBarContainer = ({ selectedNode }) => {
  if (!selectedNode) return null;

  const pathParts = selectedNode.path.split('/');
  const lastNode = selectedNode.type === FILE_NODE_TYPE ? pathParts.pop() : null;

  // TODO: close folder on click
  return (
    <Breadcrumb>
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
