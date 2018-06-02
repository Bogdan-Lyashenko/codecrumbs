import ViewSwitchList from './component/ViewsSwitchList';
import { connect } from 'react-redux';
import { toggleSwitch } from './store/actions';

const mapStateToProps = state => {
    const { switches, checkedState } = state.viewSwitches;
    return { switches, checkedState };
};

const mapDispatchToProps = {
    toggleSwitch
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewSwitchList);
