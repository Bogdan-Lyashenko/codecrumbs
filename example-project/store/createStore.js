import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import viewSwitches from 'components/controls/ViewSwitches/store/reducer';
import dataBus from 'components/dataBus/store/reducer';
import rootSaga from './sagas';

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const persistConfig = {
    key: 'codecrumbs-config-storage',
    whitelist: ['viewSwitches'],
    storage
  };

  const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
      viewSwitches,
      dataBus
    })
  );

  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
  );

  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};
