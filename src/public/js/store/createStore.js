import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import viewSwitches from '../components/controls/ViewSwitches/store/reducer';
import dataBus from '../components/data-bus/store/reducer';
import rootSaga from '../components/data-bus/store/sagas';

export default () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        combineReducers({
            viewSwitches,
            dataBus
        }),
        applyMiddleware(thunk, sagaMiddleware)
    );

    sagaMiddleware.run(rootSaga);
    return store;
};
