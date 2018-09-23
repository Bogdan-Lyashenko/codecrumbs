import React from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import './SideBar.scss';
import Code from './Code/Code';
import { Copy } from 'components/controls/Copy';
import { FILE_NODE_TYPE } from 'utils/constants';
import { Skeleton, Alert } from 'antd';

export const filterImportedDependencies = (
  importedDependencies = [],
  selectedDependencyEdgeNodes
) => {
  if (!selectedDependencyEdgeNodes) {
    return [];
  }

  return importedDependencies.filter(dependency => {
    const { sources } = selectedDependencyEdgeNodes;
    return sources.find(source => {
      const pathIndexMath = /\w/.exec(dependency.sourceFile);
      const pathName = dependency.sourceFile.substr(pathIndexMath && pathIndexMath.index);
      return source.indexOf(pathName) !== -1;
    });
  });
};

//TODO: Add slide from right animation
export default ({
  selectedNode,
  codeCrumbsDiagramOn,
  dependenciesDiagramOn,
  selectedDependencyEdgeNodes,
  onClose
}) => {
  const file = selectedNode && selectedNode.type === FILE_NODE_TYPE ? selectedNode : null;

  let header = null;
  let content = null;

  if (file && file.fileCode) {
    header = (
      <React.Fragment>
        <div>{file.path}</div>
        <div className={'copyIcon'}>
          <Copy copyText={file.path} />
        </div>
      </React.Fragment>
    );

    const codeCrumbs = codeCrumbsDiagramOn && file.children ? file.children : [];
    const importedDependencies = dependenciesDiagramOn
      ? filterImportedDependencies(file.importedDependencies, selectedDependencyEdgeNodes)
      : [];

    const crumbedLines = codeCrumbs.map(codeCrumb => codeCrumb.crumbedLineNode.loc.start.line);
    const importedDependenciesLines = importedDependencies.map(({ node }) => [
      node.loc.start.line,
      node.loc.end.line
    ]);
    content = (
      <Tabs defaultActiveKey="1" onChange={() => {}}>
        <TabPane tab="Code" key="1">
          <Code
            code={file.fileCode}
            crumbedLines={crumbedLines}
            importedDependenciesLines={importedDependenciesLines}
          />
        </TabPane>
        <TabPane tab="FlowChart" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Crumbs" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    );
  } else {
    header = (
      <Alert message="Please select file on diagram to investigate it here." type="info" showIcon />
    );
    content = <Skeleton />;
  }

  return (
    <div className="SideBar">
      <div className="header">
        <div className={'filePath'}>{header}</div>
        <a href="#" onClick={onClose}>
          X
        </a>
      </div>
      <div className="body">{content}</div>
    </div>
  );
};
