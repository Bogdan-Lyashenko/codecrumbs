import React from 'react';
import { connect } from 'react-redux';

import Code from '../Code/Code';

export const filterImportedDependencies = (
  importedDependencies = [],
  selectedDependencyEdgeNodes
) => {
  if (!selectedDependencyEdgeNodes) {
    return [];
  }

  return importedDependencies.filter(dependency => {
    const { sources } = selectedDependencyEdgeNodes;
    return sources.find(source => {
      const pathIndexMath = /\w/.exec(dependency.sourceFile);
      const pathName = dependency.sourceFile.substr(pathIndexMath && pathIndexMath.index);
      return source.indexOf(pathName) !== -1;
    });
  });
};

const CodeTab = props => {
  const {
    selectedNode,
    codeCrumbsDiagramOn,
    dependenciesDiagramOn,
    selectedDependencyEdgeNodes
  } = props;

  const codeCrumbs = codeCrumbsDiagramOn && selectedNode.children ? selectedNode.children : [];
  const importedDependencies = dependenciesDiagramOn
    ? filterImportedDependencies(selectedNode.importedDependencies, selectedDependencyEdgeNodes)
    : [];

  const crumbedLines = codeCrumbs.map(codeCrumb => codeCrumb.crumbNode.loc.start.line);
  const importedDependenciesLines = importedDependencies.map(({ node }) => [
    node.loc.start.line,
    node.loc.end.line
  ]);

  return (
    <React.Fragment>
      <Code
        code={selectedNode.fileCode}
        crumbedLines={crumbedLines}
        importedDependenciesLines={importedDependenciesLines}
      />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  const { selectedNode, selectedCodeCrumb, selectedDependencyEdgeNodes } = state.dataBus;
  const { checkedState } = state.viewSwitches;

  return {
    selectedNode,
    selectedCodeCrumb,
    selectedDependencyEdgeNodes,
    sideBarOn: checkedState.sideBar,
    dependenciesDiagramOn: checkedState.dependencies,
    codeCrumbsDiagramOn: checkedState.codeCrumbs
  };
};

export default connect(mapStateToProps)(CodeTab);
