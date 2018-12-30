import { connect } from 'react-redux';
import { calculateLayoutSize } from 'core/dataBus/utils/geometry';
import TreeDiagram from './component/TreeDiagram';
import { selectDependencyEdge } from 'core/dataBus/actions';
import { getSourceLayout } from 'core/dataBus/selectors';
import { getValuesState } from 'core/controlsBus/selectors';

const mapStateToProps = (state, props) => {
  const { sourceLayoutTree } = getSourceLayout(state, props);
  const { diagramZoom } = getValuesState(state, props);

  return {
    diagramZoom,
    sourceLayoutTree,
    layoutSize: calculateLayoutSize(sourceLayoutTree)
  };
};

const mapDispatchToProps = {
  onUnderLayerClick: () => selectDependencyEdge(null)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TreeDiagram);
