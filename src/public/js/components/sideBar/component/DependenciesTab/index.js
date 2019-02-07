import React from 'react';
import { connect } from 'react-redux';
import { Collapse, Alert } from 'antd';

import { getSource, getSourceUserChoice, getDependenciesUserChoice } from 'core/dataBus/selectors';

import Code from '../Code';
import {
  filterImportedDependencies,
  findFileNode,
  extractExportsForImports
} from '../shared/utils';
import './index.scss';

const Panel = Collapse.Panel;

const DependenciesTab = props => {
  const { selectedNode, filesMap, foldersMap, selectedDependencyEdgeNodes } = props;

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
              dependenciesLines={importedDependencies.map(({ importNodeLines }) => importNodeLines)}
            />
          </Panel>
          {importedDependencies.map((file, i) => {
            // TODO: extract code from server before
            const fileNode = findFileNode(file.sourceFile, filesMap, foldersMap);

            if (!fileNode) {
              return null;
            }

            // TODO: move to BE
            /*
            const exportedDependencies = extractExportsForImports(
              fileNode.fileCode,
              file.specifiers,
              file.sourceFile
            );*/
            return (
              <Panel header={fileNode.path} key={i + 1}>
                <Code limitedHeight={true} code={fileNode.fileCode || ''} />
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

const mapStateToProps = (state, props) => {
  const { filesMap, foldersMap } = getSource(state, props);
  const { selectedNode } = getSourceUserChoice(state, props);
  const { selectedDependencyEdgeNodes } = getDependenciesUserChoice(state, props);

  return {
    selectedNode,
    selectedDependencyEdgeNodes,
    filesMap,
    foldersMap
  };
};

export default connect(mapStateToProps)(DependenciesTab);
