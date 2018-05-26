import { connect } from 'react-redux';
import TreeDiagram from './component/TreeDiagram';

const mapStateToProps = state => {
    const { checkedState } = state.viewSwitches;
    const { filesTreeLayoutNodes, dependenciesList } = state.dataBus;

    return {
        sourceDiagramOn: checkedState.source,
        dependenciesDiagramOn: checkedState.dependencies,
        codeCrumbsDiagramOn: checkedState.codeCrumbs,
        filesTreeLayoutNodes,
        dependenciesList
    };
};

const mapDispatchToProps = {
    onCodeCrumbMouseOver(codeCrumb, position) {
        console.log(codeCrumb, position);
        return { type: null };
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TreeDiagram);
