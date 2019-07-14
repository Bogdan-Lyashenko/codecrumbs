import React, { Suspense } from 'react';

import Tabs from 'antd/es/tabs';
import 'antd/es/tabs/style';
import Skeleton from 'antd/es/skeleton';
import 'antd/es/skeleton/style';
import Alert from 'antd/es/alert';
import 'antd/es/alert/style';

import { Copy } from '../../topBar/controls/Copy';

const Code = React.lazy(() => import(/* webpackChunkName: "code" */ './Code'));
const DependenciesTab = React.lazy(() =>
  import(/* webpackChunkName: "dependencies-tab" */ './DependenciesTab')
);
const CrumbsTab = React.lazy(() => import(/* webpackChunkName: "crumbs-tab" */ './CrumbsTab'));
const FlowChartTab = React.lazy(() =>
  import(/* webpackChunkName: "flow-chart-tab" */ './FlowChartTab')
);

import './SideBar.less';

const TabPane = Tabs.TabPane;

//TODO: Add slide from right animation
export default ({
  namespace,
  language,
  selectedNode,
  filesMap,
  onClose,
  selectedTabInSideBar,
  dependenciesDiagramOn,
  codeCrumbsDiagramOn,
  fullFeaturesSupport,
  onTabSelect
}) => {
  const file = selectedNode && filesMap[selectedNode.path];
  const standaloneNoCode = !process.env.LOCAL && (!file || !file.fileCode);
  const header = standaloneNoCode ? (
    <Alert
      message="No code for this file in standalone mode."
      description="Only files with codecrumbs have pre-fetched code. Consider to run codecrumbs locally for this project to access all code. Check instructions here https://github.com/Bogdan-Lyashenko/codecrumbs"
      type="warning"
      showIcon
    />
  ) : (
    <React.Fragment>
      <div>{file.path}</div>
      <div className={'copyIcon'}>
        <Copy copyText={file.path} />
      </div>
    </React.Fragment>
  );

  const content = (
    <Tabs defaultActiveKey={selectedTabInSideBar} onChange={onTabSelect}>
      <TabPane tab="Code" key="Code">
        <Suspense fallback={null}>
          {standaloneNoCode ? (
            <Skeleton />
          ) : (
            <Code namespace={namespace} language={language} code={file.fileCode} />
          )}
        </Suspense>
      </TabPane>
      {(dependenciesDiagramOn &&
        fullFeaturesSupport && (
          <TabPane tab="Dependencies" key="Dependencies">
            <Suspense fallback={null}>
              <DependenciesTab namespace={namespace} language={language} />
            </Suspense>
          </TabPane>
        )) ||
        null}
      {(codeCrumbsDiagramOn && (
        <TabPane tab="Crumbs" key="Crumbs">
          <Suspense fallback={null}>
            <CrumbsTab namespace={namespace} language={language} />
          </Suspense>
        </TabPane>
      )) ||
        null}
      {(fullFeaturesSupport && (
        <TabPane tab="FlowChart" key="FlowChart">
          <Suspense fallback={null}>
            <FlowChartTab
              namespace={namespace}
              language={language}
              fileCode={file.fileCode}
              active={selectedTabInSideBar === 'FlowChart'}
            />
          </Suspense>
        </TabPane>
      )) ||
        null}
    </Tabs>
  );

  return (
    <div className="SideBar">
      <div className="header">
        <div className={'filePath'}>{header}</div>
        <a href="#" onClick={onClose}>
          X
        </a>
      </div>
      <div className="bodySideBar">{content}</div>
    </div>
  );
};
