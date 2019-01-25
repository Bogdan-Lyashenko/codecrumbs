import React from 'react';
import { connect } from 'react-redux';

import { getNamespacesList } from 'core/dataBus/selectors';
import { getActiveNamespace } from 'core/namespaceIntegration/selectors';
import TreeDiagram from './component/TreeDiagram';

const TreeDiagramsContainer = ({ namespacesList, activeNamespace }) => {
  if (!namespacesList.length) {
    return null;
  }

  return (
    <React.Fragment>
      {namespacesList.map(namespace => (
        <TreeDiagram
          key={namespace}
          namespace={namespace}
          multiple={namespacesList.length > 1}
          active={namespace === activeNamespace}
        />
      ))}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  activeNamespace: getActiveNamespace(state),
  namespacesList: getNamespacesList(state)
});

export default connect(mapStateToProps)(TreeDiagramsContainer);
