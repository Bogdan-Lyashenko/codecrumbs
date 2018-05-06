import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const MOUNT_NODE_ID = 'mount-node';
ReactDOM.render(<App />, document.getElementById(MOUNT_NODE_ID));
