import { connect } from 'react-redux';
import TreeDiagram from './component/TreeDiagram';
import { SWITCH_KEYS } from '../controls/ViewSwitches/store/constants';

const mapStateToProps = state => {
    const { checkedState } = state.viewSwitches;

    return {
        sourceDiagramOn: checkedState[SWITCH_KEYS.SOURCE],
        dependenciesDiagramOn: checkedState[SWITCH_KEYS.DEPENDENCIES],
        codeCrumbsDiagramOn: checkedState[SWITCH_KEYS.CODE_CRUMBS]
    };
};

const mapDispatchToProps = {
    onCodeCrumbMouseOver(codeCrumb, position) {
        console.log(codeCrumb, position);
        return { type: null };
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TreeDiagram);
