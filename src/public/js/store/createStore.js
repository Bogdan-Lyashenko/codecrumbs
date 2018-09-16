import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import viewSwitches from 'components/controls/ViewSwitches/store/reducer';
import dataBus from 'components/dataBus/store/reducer';
import rootSaga from './sagas';

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    combineReducers({
      viewSwitches,
      dataBus
    }),
    composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);
  return store;
};
