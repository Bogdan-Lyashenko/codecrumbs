import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import viewSwitches from '../components/controls/ViewSwitches/store/reducer';
import dataBus from '../components/data-bus/store/reducer';

export default () =>
    createStore(
        combineReducers({
            viewSwitches,
            dataBus
        }),
        applyMiddleware(thunk)
    );
