import { connect } from 'react-redux';
import { calculateLayoutSize } from 'utils/geometry';
import TreeDiagram from './component/TreeDiagram';
import { selectDependencyEdge } from 'components/dataBus/store/actions';
import { getSourceLayout } from 'components/dataBus/store/selectors';
import { getValuesState } from 'components/controls/ViewSwitches/store/selectors';

const mapStateToProps = state => {
  const { sourceLayoutTree } = getSourceLayout(state);
  const { diagramZoom } = getValuesState(state);

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
