import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import reducer from './reducers/reducer';

const MOUNT_NODE_ID = 'mount-node';

const store = createStore(reducer);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById(MOUNT_NODE_ID)
);
