import React from 'react';
import { connect } from 'react-redux';

import { selectCodeCrumb, selectNodeToOpenInEditor } from 'core/dataBus/actions';
import { getSource, getSourceLayout, getCodeCrumbsUserChoice } from 'core/dataBus/selectors';
import { getCheckedState } from 'core/controlsBus/selectors';
import Tree from './Tree';

const mapStateToProps = (state, props) => {
  const { codeCrumbsDiagramOn, codeCrumbsMinimize, codeCrumbsLineNumbers } = getCheckedState(state);

  const { namespace } = props;
  const namespaceProps = { namespace };
  const { filesMap } = getSource(state, namespaceProps);
  const { codecrumbsLayoutMap } = getSourceLayout(state, namespaceProps);
  const { selectedCrumbedFlowKey, selectedCcFlowEdgeNodes } = getCodeCrumbsUserChoice(
    state,
    namespaceProps
  );

  return {
    codecrumbsLayoutMap,
    filesMap,
    selectedCrumbedFlowKey,
    codeCrumbsDiagramOn,
    codeCrumbsMinimize,
    codeCrumbsLineNumbers,
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tree);
