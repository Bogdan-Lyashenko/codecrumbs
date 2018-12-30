import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import controlsBus from 'core/controlsBus/reducer';
import dataBus from 'core/dataBus/reducer';
import rootSaga from './sagas';

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const persistConfig = {
    key: 'codecrumbs-config-storage',
    whitelist: ['controlsBus'],
    storage
  };

  const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
      controlsBus,
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
