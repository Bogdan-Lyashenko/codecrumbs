import React from 'react';
import { connect } from 'react-redux';

import {
  getSource,
  getSourceLayout,
  getCodeCrumbsUserChoice,
  getNamespacesList
} from 'core/dataBus/selectors';
import { selectCodeCrumb, selectNodeToOpenInEditor, selectCcFlowEdge } from 'core/dataBus/actions';
import { getCheckedState } from 'core/controlsBus/selectors';

import Tree from './Tree';
import FlowEdges from './FlowEdge';

const mapStateToProps = (state, props) => {
  const { codeCrumbsMinimize, codeCrumbsLineNumbers } = getCheckedState(state);

  const namespacesList = getNamespacesList(state);

  const { namespace } = props;
  const namespaceProps = { namespace };
  const { filesMap } = getSource(state, namespaceProps);
  const { codecrumbsLayoutMap } = getSourceLayout(state, { namespace });

  const {
    selectedCrumbedFlowKey: currentSelectedCrumbedFlowKey,
    selectedCcFlowEdgeNodes
  } = getCodeCrumbsUserChoice(state, {
    namespace
  });

  return {
    codecrumbsLayoutMap,
    filesMap,
    currentSelectedCrumbedFlowKey,
    codeCrumbsLineNumbers,
    namespacesList,
    codeCrumbsMinimize,
    selectedCcFlowEdgeNodes
  };
};

const mapDispatchToProps = (dispatch, props) => {
  const { namespace } = props;
  return {
    onCodeCrumbSelect: (event, options) => {
      return event.metaKey
        ? dispatch(
            selectNodeToOpenInEditor(
              { path: options.fileNode.path, line: options.codeCrumb.crumbNodeLines[0] },
              namespace
            )
          )
        : dispatch(selectCodeCrumb(options, namespace));
    },
    onFlowEdgeClick: (source, target, ccNamespacesKeys) => {
      dispatch(selectCcFlowEdge({ source, target }, source.namespace));

      // case with external edge
      if (source.namespace !== target.namespace) {
        dispatch(selectCcFlowEdge({ source, target }, target.namespace));
      }

      ccNamespacesKeys.forEach(ns => {
        if (ns !== source.namespace && ns !== target.namespace) {
          dispatch(selectCcFlowEdge(undefined, ns));
        }
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(props => {
  return (
    <React.Fragment>
      <FlowEdges {...props} />
      <Tree {...props} />
    </React.Fragment>
  );
});
