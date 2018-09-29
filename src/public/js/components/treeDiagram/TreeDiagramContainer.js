import { connect } from 'react-redux';
import { calculateLayoutSize } from 'utils/geometry';
import TreeDiagram from './component/TreeDiagram';
import {
  selectCodeCrumb,
  selectNode,
  setDependenciesEntryPoint,
  toggleFolder,
  selectDependencyEdge
} from 'components/dataBus/store/actions';

export const LAYOUT_PADDING = 200;

const mapStateToProps = state => {
  const { checkedState } = state.viewSwitches;
  const {
    filesTreeLayoutNodes,
    fileNodesMap,
    dependenciesList,
    dependenciesMap,
    filteredDependenciesList,
    filteredDependenciesAllModulesMap,
    closedFolders,
    dependenciesEntryPoint,
    selectedNode,
    selectedDependencyEdgeNodes,
    codeCrumbedFlowsMap
  } = state.dataBus;

  return {
    sourceDiagramOn: checkedState.source,
    dependenciesDiagramOn: checkedState.dependencies,
    dependenciesShowDirectOnly: checkedState.dependenciesShowDirectOnly,
    sourceDimFolders: checkedState.sourceDimFolders,
    codeCrumbsDiagramOn: checkedState.codeCrumbs,
    codeCrumbsMinimize: checkedState.codeCrumbsMinimize,
    codeCrumbsLineNumbers: checkedState.codeCrumbsLineNumbers,
    codeCrumbsDetails: checkedState.codeCrumbsDetails,
    filesTreeLayoutNodes,
    fileNodesMap,
    dependenciesList,
    filteredDependenciesAllModulesMap,
    dependenciesMap,
    filteredDependenciesList,
    closedFolders,
    dependenciesEntryPoint,
    selectedNode,
    selectedDependencyEdgeNodes,
    codeCrumbedFlowsMap,
    layoutSize: calculateLayoutSize(filesTreeLayoutNodes, LAYOUT_PADDING)
  };
};

const mapDispatchToProps = {
  onCodeCrumbSelect: selectCodeCrumb,
  onNodeTextClick: selectNode,
  onFileIconClick: setDependenciesEntryPoint,
  onFolderIconClick: toggleFolder,
  onDependencyEdgeClick: selectDependencyEdge,
  onUnderLayerClick: () => selectDependencyEdge(null)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TreeDiagram);
