import React from 'react';
import { connect } from 'react-redux';

import TreeDiagram from './component/TreeDiagram';

const TreeDiagramsContainer = ({ namespaces }) => {
  if (!namespaces || !namespaces.length) {
    return null;
  }

  return (
    <React.Fragment>
      {namespaces.map(namespace => (
        <TreeDiagram key={namespace} namespace={namespace} />
      ))}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  namespaces: Object.keys(state.dataBus)
});

export default connect(mapStateToProps)(TreeDiagramsContainer);
