import React, { Suspense } from 'react';
import Spin from 'antd/lib/spin';
import 'antd/lib/spin/style/css';

const DataBus = React.lazy(() => import(/* webpackChunkName: "data-bus" */ 'core/dataBus'));
const ViewsSwitches = React.lazy(() =>
  import(/* webpackChunkName: "view-switches" */ 'components/topBar/controls/ViewSwitches/ViewSwitchesContainer')
);
const TopBar = React.lazy(() =>
  import(/* webpackChunkName: "top-bar" */ 'components/topBar/subPanel/SubPanelContainer')
);
const TreeDiagram = React.lazy(() =>
  import(/* webpackChunkName: "tree-diagram" */ 'components/treeDiagram/TreeDiagramContainer')
);
const SideBar = React.lazy(() =>
  import(/* webpackChunkName: "side-bar" */ 'components/sideBar/SideBarContainer')
);
const ExplorerBar = React.lazy(() =>
  import(/* webpackChunkName: "explorer-bar" */ 'components/explorerBar/ExplorerBarContainer')
);

import './App.scss';

const App = (props = {}) => {
  return (
    <div className="App">
      <header className="header">
        <Suspense fallback={null}>
          <DataBus standalone={props.standalone} predefinedState={props.predefinedState} />
        </Suspense>
        <Suspense fallback={<div className={'headerPlaceholder'} />}>
          <ViewsSwitches />
        </Suspense>
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
          <TreeDiagram />
        </Suspense>
        <Suspense fallback={null}>
          <SideBar />
        </Suspense>
      </div>

      <footer className="footer">
        &#9400; Bohdan Liashenko{' '}
        <a href="https://github.com/Bogdan-Lyashenko/codecrumbs">Project Github</a>
      </footer>
    </div>
  );
};

export default App;
