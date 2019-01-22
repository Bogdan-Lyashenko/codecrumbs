import React from 'react';
import { connect } from 'react-redux';

import { getNamespacesList } from 'core/dataBus/selectors';
import TreeDiagram from './component/TreeDiagram';

const TreeDiagramsContainer = ({ namespacesList }) => {
  if (!namespacesList.length) {
    return null;
  }

  return (
    <React.Fragment>
      {namespacesList.map(namespace => (
        <TreeDiagram key={namespace} namespace={namespace} />
      ))}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  namespacesList: getNamespacesList(state)
});

export default connect(mapStateToProps)(TreeDiagramsContainer);
