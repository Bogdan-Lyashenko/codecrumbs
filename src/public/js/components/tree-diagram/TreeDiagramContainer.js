import { connect } from 'react-redux';
import TreeDiagram from './component/TreeDiagram';
import { selectCodeCrumb, selectFile } from '../data-bus/store/actions';

const mapStateToProps = state => {
    const { checkedState } = state.viewSwitches;
    const { filesTreeLayoutNodes, dependenciesList } = state.dataBus;

    return {
        sourceDiagramOn: checkedState.source,
        dependenciesDiagramOn: checkedState.dependencies,
        codeCrumbsDiagramOn: checkedState.codeCrumbs,
        codeCrumbsMinimize: checkedState.codeCrumbsMinimize,
        filesTreeLayoutNodes,
        dependenciesList
    };
};

const mapDispatchToProps = {
    onCodeCrumbSelect: selectCodeCrumb,
    onFileSelect: selectFile
};

export default connect(mapStateToProps, mapDispatchToProps)(TreeDiagram);
