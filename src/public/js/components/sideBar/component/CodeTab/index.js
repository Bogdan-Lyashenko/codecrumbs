import React from 'react';
import { connect } from 'react-redux';
import { Collapse } from 'antd';

import { convertRelativeToAbsolutePath } from 'utils/path';
import Code from '../Code/Code';
import {
  filterImportedDependencies,
  findFileNode,
  getCrumbedLines,
  extractExportsForImports,
  getNodeLines
} from './utils';
import './index.scss';

const Panel = Collapse.Panel;

const CodeTab = props => {
  const {
    selectedNode,
    filesMap,
    codeCrumbsDiagramOn,
    dependenciesDiagramOn,
    selectedDependencyEdgeNodes
  } = props;

  const importedDependencies = dependenciesDiagramOn
    ? filterImportedDependencies(selectedNode.importedDependencies, selectedDependencyEdgeNodes)
    : [];

  const selectedFileCode = (
    <Code
      code={selectedNode.fileCode}
      crumbedLines={codeCrumbsDiagramOn ? getCrumbedLines(selectedNode) : undefined}
      dependenciesLines={importedDependencies.map(({ node }) => getNodeLines(node))}
    />
  );

  return (
    <div className={'CodeTab'}>
      {importedDependencies.length ? (
        <Collapse bordered={false} defaultActiveKey={['0', '1']}>
          <Panel header={selectedNode.path} key="0">
            {selectedFileCode}
          </Panel>
          {importedDependencies.map((file, i) => {
            const filePath = convertRelativeToAbsolutePath(selectedNode.path, file.sourceFile);
            const fileNode = findFileNode(filePath, filesMap);

            if (!fileNode) {
              return null;
            }

            const exportedDependencies = extractExportsForImports(
              fileNode.fileCode,
              file.specifiers
            );
            return (
              <Panel header={fileNode.path} key={i + 1}>
                <Code
                  code={fileNode.fileCode}
                  crumbedLines={codeCrumbsDiagramOn ? getCrumbedLines(fileNode) : undefined}
                  dependenciesLines={exportedDependencies.map(getNodeLines)}
                />
              </Panel>
            );
          })}
        </Collapse>
      ) : (
        selectedFileCode
      )}
    </div>
  );
};

const mapStateToProps = state => {
  const { selectedNode, selectedCodeCrumb, selectedDependencyEdgeNodes, filesMap } = state.dataBus;
  const { checkedState } = state.viewSwitches;

  return {
    selectedNode,
    selectedCodeCrumb,
    selectedDependencyEdgeNodes,
    filesMap,
    sideBarOn: checkedState.sideBar,
    dependenciesDiagramOn: checkedState.dependencies,
    codeCrumbsDiagramOn: checkedState.codeCrumbs
  };
};

export default connect(mapStateToProps)(CodeTab);
