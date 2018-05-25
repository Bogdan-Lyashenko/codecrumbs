import ViewSwitchList from './component/ViewsSwitchList';
import { connect } from 'react-redux';
import { toggleSwitch } from './store/actions';

const mapStateToProps = state => {
    const { defaultChecked, switches } = state.viewSwitches;
    return { defaultChecked, switches };
};

const mapDispatchToProps = {
    toggleSwitch
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewSwitchList);
