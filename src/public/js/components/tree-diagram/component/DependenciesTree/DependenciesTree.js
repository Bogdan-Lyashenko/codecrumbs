import React from 'react';
import { getFilesList } from '../../../../utils/treeLayout';

import { DependenciesEdge } from '../utils/Edge/DepenenciesEdge';
import { FileName } from '../utils/NodeText';
import { FileIcon } from '../utils/NodeIcon';

//move to utils
export const findNodeByPathName = (list = [], pathName) => {
  return list.find(l => l.data.path === pathName);
};

export const getFilteredDependenciesList = ({
  dependenciesList,
  dependenciesEntryPoint,
  dependenciesShowOneModule
}) => {
  const entryPoint = dependenciesEntryPoint || {
    path: dependenciesList[0].moduleName
  };

  if (dependenciesShowOneModule) {
    return [dependenciesList.find(d => d.moduleName === entryPoint.path)];
  }

  return collectDependencies(entryPoint.path, dependenciesList);
};

export const collectDependencies = (entryModuleName, dependenciesList) => {
  let queue = [].concat(entryModuleName),
    store = [];

  while (queue.length) {
    let moduleName = queue.shift(),
      entryModule = dependenciesList.find(d => d.moduleName === moduleName);

    store.push(entryModule);

    const nodeBody = entryModule.importedModuleNames;
    if (nodeBody) {
      queue = [...queue, ...nodeBody];
    }
  }

  return store;
};

class DependenciesTree extends React.Component {
  render() {
    const { filesTreeLayoutNodes, shiftToCenterPoint, sourceDiagramOn } = this.props;

    const moduleFilesList = getFilesList(filesTreeLayoutNodes);
    const filteredDependenciesList = getFilteredDependenciesList(this.props);

    return (
      <React.Fragment>
        {filteredDependenciesList.map(({ moduleName, importedModuleNames }, i) => {
          const moduleNode = findNodeByPathName(moduleFilesList, moduleName);

          if (!moduleNode) return;

          const [mX, mY] = [moduleNode.y, moduleNode.x];
          const targetPosition = shiftToCenterPoint(mX, mY);

          let prevSourcePosition = null;
          return (
            <React.Fragment key={moduleName + i}>
              {!sourceDiagramOn ? (
                <React.Fragment>
                  <FileName position={targetPosition} name={moduleNode.data.name} />
                  <FileIcon position={targetPosition} />
                </React.Fragment>
              ) : null}
              {importedModuleNames.map((name, i) => {
                const importedNode = findNodeByPathName(moduleFilesList, name);

                if (!importedNode) return null;

                const [iX, iY] = [importedNode.y, importedNode.x];
                //TODO: implementation iterations:
                //1) done: first with sharp angles + overlay
                //2) done: without overlaying, not fot all cases
                //3) rounded angles
                const sourcePosition = shiftToCenterPoint(iX, iY);

                const dependenciesEdge = (
                  <DependenciesEdge
                    key={name + i}
                    sourcePosition={sourcePosition}
                    targetPosition={targetPosition}
                    prevSourcePosition={prevSourcePosition}
                  />
                );

                prevSourcePosition = sourcePosition;

                return dependenciesEdge;
              })}
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}

export default DependenciesTree;
