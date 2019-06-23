import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import getStore from './core/store';

export const getIntegration = () => {
  const { store, persistor } = getStore();

  const Codecrumbs = options => (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App {...options} />
      </PersistGate>
    </Provider>
  );

  return {
    Codecrumbs,
    store,
    persistor
  };
};

export default (options, mountNodeId) => {
  const { store, persistor } = getStore();

  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App {...options} />
      </PersistGate>
    </Provider>,
    document.getElementById(mountNodeId)
  );
};
