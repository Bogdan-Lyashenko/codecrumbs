import React from 'react';
import { connect } from 'react-redux';

import SideBar from './component/SideBar';
import { selectNode } from 'components/dataBus/store/actions';
import { FILE_NODE_TYPE } from 'utils/constants';

const SideBarContainer = ({
  selectedNode,
  selectedCodeCrumb,
  selectedDependencyEdgeNodes,
  dependenciesDiagramOn,
  codeCrumbsDiagramOn,
  onClose
}) => {
  if (!selectedNode || selectedNode.type !== FILE_NODE_TYPE) return null;

  //TODO: add animation slide
  return (
    <SideBar
      file={selectedNode}
      codeCrumbs={codeCrumbsDiagramOn ? selectedNode.children : []}
      importedDependencies={
        dependenciesDiagramOn
          ? filterImportedDependencies(
              selectedNode.importedDependencies,
              selectedDependencyEdgeNodes
            )
          : []
      }
      onClose={onClose}
    />
  );
};

export const filterImportedDependencies = (importedDependencies, selectedDependencyEdgeNodes) => {
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

const mapStateToProps = state => {
  const { selectedNode, selectedCodeCrumb, selectedDependencyEdgeNodes } = state.dataBus;
  const { checkedState } = state.viewSwitches;

  return {
    selectedNode,
    selectedCodeCrumb,
    selectedDependencyEdgeNodes,
    dependenciesDiagramOn: checkedState.dependencies,
    codeCrumbsDiagramOn: checkedState.codeCrumbs
  };
};

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(selectNode(null))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarContainer);
