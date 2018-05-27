import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import getStore from './store/createStore';

const MOUNT_NODE_ID = 'mount-node';

const store = getStore();
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById(MOUNT_NODE_ID)
);
