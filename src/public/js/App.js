import React from 'react';

import DataBus from 'core/dataBus';
import TreeDiagram from 'components/treeDiagram/TreeDiagramContainer';
import ExplorerBar from 'components/explorerBar/ExplorerBarContainer';
import SideBar from 'components/sideBar/SideBarContainer';
import ViewsSwitches from 'components/topBar/controls/ViewSwitches/ViewSwitchesContainer';
import TopBar from 'components/topBar/subPanel/SubPanelContainer';

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
        <ExplorerBar />
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
