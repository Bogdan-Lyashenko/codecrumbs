import { connect } from 'react-redux';
import TreeDiagram from './component/TreeDiagram';
import {
    selectCodeCrumb,
    selectFile,
    toggleFolder
} from '../data-bus/store/actions';

const mapStateToProps = state => {
    const { checkedState } = state.viewSwitches;
    const {
        filesTreeLayoutNodes,
        dependenciesList,
        closedFolders
    } = state.dataBus;

    return {
        sourceDiagramOn: checkedState.source,
        dependenciesDiagramOn: checkedState.dependencies,
        codeCrumbsDiagramOn: checkedState.codeCrumbs,
        codeCrumbsMinimize: checkedState.codeCrumbsMinimize,
        codeCrumbsDetails: checkedState.codeCrumbsDetails,
        filesTreeLayoutNodes,
        dependenciesList,
        closedFolders
    };
};

const mapDispatchToProps = {
    onCodeCrumbSelect: selectCodeCrumb,
    onFileSelect: selectFile,
    onFolderClick: toggleFolder
};

export default connect(mapStateToProps, mapDispatchToProps)(TreeDiagram);
