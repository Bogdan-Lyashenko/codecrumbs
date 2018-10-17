import { connect } from 'react-redux';
import { calculateLayoutSize } from 'utils/geometry';
import TreeDiagram from './component/TreeDiagram';
import { selectDependencyEdge } from 'components/dataBus/store/actions';

const mapStateToProps = state => {
  const { filesTreeLayoutNodes } = state.dataBus;

  return {
    filesTreeLayoutNodes,
    layoutSize: calculateLayoutSize(filesTreeLayoutNodes)
  };
};

const mapDispatchToProps = {
  onUnderLayerClick: () => selectDependencyEdge(null)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TreeDiagram);
