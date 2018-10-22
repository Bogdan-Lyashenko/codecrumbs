import React from 'react';
import { connect } from 'react-redux';
import { Collapse, Alert } from 'antd';

import { convertRelativeToAbsolutePath } from 'utils/path';
import Code from '../Code';
import {
  filterImportedDependencies,
  findFileNode,
  extractExportsForImports,
  getNodeLines
} from '../shared/utils';
import './index.scss';

const Panel = Collapse.Panel;

const DependenciesTab = props => {
  const { selectedNode, filesMap, selectedDependencyEdgeNodes } = props;

  const importedDependencies = filterImportedDependencies(
    selectedNode.importedDependencies,
    selectedDependencyEdgeNodes
  );

  return (
    <div className={'DependenciesTab'}>
      {importedDependencies.length ? (
        <Collapse bordered={false} defaultActiveKey={['0', '1']}>
          <Panel header={selectedNode.path} key="0">
            <Code
              limitedHeight={true}
              code={selectedNode.fileCode}
              dependenciesLines={importedDependencies.map(({ node }) => getNodeLines(node))}
            />
          </Panel>
          {importedDependencies.map((file, i) => {
            const filePath = convertRelativeToAbsolutePath(selectedNode.path, file.sourceFile);
            const fileNode = findFileNode(filePath, filesMap);

            if (!fileNode) {
              return null;
            }

            const exportedDependencies = extractExportsForImports(
              fileNode.fileCode,
              file.specifiers,
              filePath
            );
            return (
              <Panel header={fileNode.path} key={i + 1}>
                <Code
                  limitedHeight={true}
                  code={fileNode.fileCode}
                  dependenciesLines={exportedDependencies.map(getNodeLines)}
                />
              </Panel>
            );
          })}
        </Collapse>
      ) : (
        <Alert
          message="C-mon, my dear friend, select dependency connection, what are you waiting for?"
          type="info"
          showIcon
        />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  const { selectedNode, selectedDependencyEdgeNodes, filesMap } = state.dataBus;

  return {
    selectedNode,
    selectedDependencyEdgeNodes,
    filesMap
  };
};

export default connect(mapStateToProps)(DependenciesTab);
