import React from 'react';
import devProcessTesting from './utils/dev-test';

import DataBus from './components/data-bus/DataBusContainer';
import ViewsSwitches from './components/controls/ViewSwitches/ViewSwitchesContainer';
import TreeDiagram from './components/tree-diagram/TreeDiagramContainer';

import './App.css';

const App = () => {
    return (
        <div className="App-container">
            <DataBus />
            <ViewsSwitches />
            <TreeDiagram />

            <footer className="App-footer">
                Bohdan Liashenko{' '}
                <a href="https://github.com/Bogdan-Lyashenko/codecrumbs">
                    Project Github
                </a>
            </footer>
        </div>
    );
};

export default App;
