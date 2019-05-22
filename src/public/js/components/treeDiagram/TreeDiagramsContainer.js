import React from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';

import StandalonePlaceholder from './component/StandalonePlaceholder';

import { getNamespacesList } from 'core/dataBus/selectors';
import { getCheckedState } from 'core/controlsBus/selectors';
import { getActiveNamespace } from 'core/namespaceIntegration/selectors';
import TreeDiagram from './component/TreeDiagram';

import './TreeDiagamsContainer.scss';

const TreeDiagramsContainer = ({ namespacesList, activeNamespace, sideBar }) => {
  if (!namespacesList.length) {
    return process.env.STANDALONE ? (
      <StandalonePlaceholder />
    ) : (
      <div className={'MainLoader'}>
        <Spin />
        <Spin />
        <Spin />
      </div>
    );
  }

  return (
    <div className={'TreeDiagramsContainer'} style={sideBar ? { width: 'calc(100% - 650px)' } : {}}>
      {namespacesList.map(namespace => (
        <TreeDiagram
          key={namespace}
          namespace={namespace}
          multiple={namespacesList.length > 1}
          active={namespace === activeNamespace}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  activeNamespace: getActiveNamespace(state),
  namespacesList: getNamespacesList(state),
  sideBar: getCheckedState(state).sideBar
});

export default connect(mapStateToProps)(TreeDiagramsContainer);
