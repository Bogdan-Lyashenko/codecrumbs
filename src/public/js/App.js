import React from 'react';

import DataBus from 'components/data-bus/DataBusContainer';
import ViewsSwitches from 'components/controls/ViewSwitches/ViewSwitchesContainer';
import TreeDiagram from 'components/tree-diagram/TreeDiagramContainer';
import SideBar from 'components/side-bar/SideBarContainer';
import TopBar from 'components/top-bar/TopBarContainer';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <DataBus />
        <ViewsSwitches />
        <TopBar />
      </header>

      <div className="body">
        <TreeDiagram />
        <SideBar />
      </div>

      <footer className="footer">
        Bohdan Liashenko <a href="https://github.com/Bogdan-Lyashenko/codecrumbs">Project Github</a>
      </footer>
    </div>
  );
};

export default App;
