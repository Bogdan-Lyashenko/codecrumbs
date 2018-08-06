import React from 'react';

import DataBus from './components/data-bus/DataBusContainer';
import ViewsSwitches from './components/controls/ViewSwitches/ViewSwitchesContainer';
import TreeDiagram from './components/tree-diagram/TreeDiagramContainer';
import SideBar from './components/side-bar/SideBarContainer';

import './App.css';

const App = () => {
  return (
    <div className="App-container">
      <header className="App-header">
        <DataBus />
        <ViewsSwitches />
      </header>

      <div className="App-body">
        <TreeDiagram />
        <SideBar />
      </div>

      <footer className="App-footer">
        Bohdan Liashenko <a href="https://github.com/Bogdan-Lyashenko/codecrumbs">Project Github</a>
      </footer>
    </div>
  );
};

export default App;
