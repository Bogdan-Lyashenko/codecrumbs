import ViewSwitchList from './component/ViewsSwitchList';
import { connect } from 'react-redux';
import { toggleSwitch, fireButtonAction } from './store/actions';
import { CONTROLS_KEYS } from './store/constants';

const mapStateToProps = state => {
    const { switches, checkedState, hiddenState } = state.viewSwitches;

    return { switches, checkedState, hiddenState };
};

const mapDispatchToProps = {
    toggleSwitch,
    fireButtonAction
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewSwitchList);
