import React, { Suspense } from 'react';

import Spin from 'antd/es/spin';
import 'antd/es/spin/style';

import { isMobile } from './utils/index';

const DataBus = React.lazy(() => import(/* webpackChunkName: "data-bus" */ './core/dataBus'));
const ViewsSwitches = React.lazy(() =>
  import(/* webpackChunkName: "view-switches" */ './components/topBar/controls/ViewSwitches/ViewSwitchesContainer')
);
const TopBar = React.lazy(() =>
  import(/* webpackChunkName: "top-bar" */ './components/topBar/subPanel/SubPanelContainer')
);
const TreeDiagramsContainer = React.lazy(() =>
  import(/* webpackChunkName: "tree-diagram" */ './components/treeDiagram/TreeDiagramsContainer')
);
const SideBar = React.lazy(() =>
  import(/* webpackChunkName: "side-bar" */ './components/sideBar/SideBarContainer')
);
const ExplorerBar = React.lazy(() =>
  import(/* webpackChunkName: "explorer-bar" */ './components/explorerBar/ExplorerBarContainer')
);

const Footer = React.lazy(() => import(/* webpackChunkName: "footer" */ './components/footer'));

import './App.less';

const App = (props = {}) => {
  return (
    <div className="App">
      <header className="header">
        <Suspense fallback={null}>
          <DataBus standalone={props.standalone} predefinedState={props.predefinedState} />
        </Suspense>
        {!isMobile ? (
          <Suspense fallback={<div className={'headerPlaceholder'} />}>
            <ViewsSwitches />
          </Suspense>
        ) : null}
        <Suspense fallback={null}>
          <TopBar />
        </Suspense>
      </header>

      <div className="body">
        <Suspense fallback={null}>
          <ExplorerBar />
        </Suspense>
        <Suspense
          fallback={
            <div className={'loader'}>
              <Spin />
            </div>
          }
        >
          <TreeDiagramsContainer />
        </Suspense>
        <Suspense fallback={null}>
          <SideBar />
        </Suspense>
      </div>

      <footer className="footer">
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </footer>
    </div>
  );
};

export default App;
