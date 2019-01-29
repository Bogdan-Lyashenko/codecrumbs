import React from 'react';
import { connect } from 'react-redux';

import StandalonePlaceholder from './component/StandalonePlaceholder';

import { getNamespacesList } from 'core/dataBus/selectors';
import { getActiveNamespace } from 'core/namespaceIntegration/selectors';
import TreeDiagram from './component/TreeDiagram';

import './TreeDiagamsContainer.scss';

const TreeDiagramsContainer = ({ namespacesList, activeNamespace }) => {
  if (!namespacesList.length) {
    return process.env.STANDALONE ? <StandalonePlaceholder /> : null;
  }

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
