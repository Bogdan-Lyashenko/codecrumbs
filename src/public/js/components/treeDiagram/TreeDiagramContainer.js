import { connect } from 'react-redux';
import TreeDiagram from './component/TreeDiagram';
import {
  selectCodeCrumb,
  selectNode,
  setDependenciesEntryPoint,
  toggleFolder,
  selectDependencyEdge
} from 'components/dataBus/store/actions';

const mapStateToProps = state => {
  const { checkedState } = state.viewSwitches;
  const {
    filesTreeLayoutNodes,
    fileNodesMap,
    dependenciesList,
    closedFolders,
    dependenciesEntryPoint,
    selectedNode,
    selectedDependencyEdgeNodes
  } = state.dataBus;

  return {
    sourceDiagramOn: checkedState.source,
    dependenciesDiagramOn: checkedState.dependencies,
    dependenciesShowDirectOnly: checkedState.dependenciesShowDirectOnly,
    sourceDimFolders: checkedState.sourceDimFolders,
    codeCrumbsDiagramOn: checkedState.codeCrumbs,
    codeCrumbsMinimize: checkedState.codeCrumbsMinimize,
    codeCrumbsDetails: checkedState.codeCrumbsDetails,
    filesTreeLayoutNodes,
    fileNodesMap,
    dependenciesList,
    closedFolders,
    dependenciesEntryPoint,
    selectedNode,
    selectedDependencyEdgeNodes
  };
};

const mapDispatchToProps = {
  onCodeCrumbSelect: selectCodeCrumb,
  onNodeTextClick: selectNode,
  onFileIconClick: setDependenciesEntryPoint,
  onFolderIconClick: toggleFolder,
  onDependencyEdgeClick: selectDependencyEdge
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TreeDiagram);
