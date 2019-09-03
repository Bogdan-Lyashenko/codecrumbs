import React from 'react';
import { connect } from 'react-redux';
import Spin from 'antd/es/spin';
import 'antd/es/spin/style';

import StandalonePlaceholder from './component/StandalonePlaceholder';

import { getNamespacesList } from '../../core/dataBus/selectors';
import { getActiveNamespace } from '../../core/namespaceIntegration/selectors';
import TreeDiagram from './component/TreeDiagram';

import './TreeDiagamsContainer.less';

const TreeDiagramsContainer = ({ namespacesList, activeNamespace }) => {
  if (!namespacesList.length) {
    return !process.env.LOCAL ? (
      <StandalonePlaceholder />
    ) : (
      <div className={'MainLoader'}>
        <Spin />
        <Spin />
        <Spin />
      </div>
    );
  }

  // TODO: use ref for TreeDiagram container (on mount set it to store)
  return (
    <div className={'TreeDiagramsContainer'}>
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
  namespacesList: getNamespacesList(state)
});

export default connect(mapStateToProps)(TreeDiagramsContainer);
