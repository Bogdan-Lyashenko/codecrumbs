import React from 'react';

import { CodeCrumbedFlowEdge, ExternalEdge } from '../../../component/Edge/CodeCrumbEdge';
import { isCodeCrumbsEqual, getCcPosition } from './helpers';

export default props => {
  const {
    namespace,
    areaHeight,
    namespacesList,
    shiftToCenterPoint,
    ccShiftIndexMap,
    sortedFlowSteps,
    involvedNsData,
    codeCrumbsMinimize,
    onFlowEdgeClick,
    selectedCcFlowEdgeNodes
  } = props;

  const { codecrumbsLayoutMap } = involvedNsData[namespace];
  const ccNamespacesKeys = Object.keys(involvedNsData || {});

  return (
    <React.Fragment>
      {!codeCrumbsMinimize &&
        sortedFlowSteps.map((toItem, i, list) => {
          if (!i) return null;

          const fromItem = list[i - 1];
          if (fromItem.namespace !== namespace && toItem.namespace !== namespace) {
            return null;
          }

          const edgePoints = [fromItem, toItem].map(crumb => {
            const [_, cY] = [crumb.y, crumb.x];
            const { ccAlightPoint } = involvedNsData[crumb.namespace];
            return shiftToCenterPoint(getCcPosition(ccAlightPoint, ccShiftIndexMap[crumb.id]), cY);
          });

          const edgeBaseProps = {
            key: `cc-external-edge-${fromItem.name}-${toItem.name}-${edgePoints[0].y}`,
            sourcePosition: edgePoints[0],
            targetPosition: edgePoints[1],
            onClick: () => onFlowEdgeClick(fromItem, toItem, ccNamespacesKeys),
            selected: isFlowEdgeSelected(selectedCcFlowEdgeNodes, fromItem, toItem)
          };

          const namespaceIndex = namespacesList.indexOf(namespace);

          if (fromItem.namespace === namespace && toItem.namespace !== namespace) {
            const fromFile = codecrumbsLayoutMap[fromItem.filePath];
            const toFile = involvedNsData[toItem.namespace].codecrumbsLayoutMap[toItem.filePath];

            return (
              <ExternalEdge
                {...edgeBaseProps}
                singleCrumbSource={fromFile.children.length === 1}
                singleCrumbTarget={toFile.children.length === 1}
                areaHeight={areaHeight}
                topBottom={namespaceIndex < namespacesList.indexOf(toItem.namespace)}
                firstPart={true}
              />
            );
          }

          if (fromItem.namespace !== namespace && toItem.namespace === namespace) {
            const fromFile =
              involvedNsData[fromItem.namespace].codecrumbsLayoutMap[fromItem.filePath];
            const toFile = codecrumbsLayoutMap[toItem.filePath];

            return (
              <ExternalEdge
                {...edgeBaseProps}
                singleCrumbSource={fromFile.children.length === 1}
                singleCrumbTarget={toFile.children.length === 1}
                areaHeight={areaHeight}
                topBottom={namespaceIndex < namespacesList.indexOf(fromItem.namespace)}
              />
            );
          }

          const fromFile = codecrumbsLayoutMap[fromItem.filePath];
          const toFile = codecrumbsLayoutMap[toItem.filePath];

          return (
            <CodeCrumbedFlowEdge
              {...edgeBaseProps}
              singleCrumbSource={fromFile.children.length === 1}
              singleCrumbTarget={toFile.children.length === 1}
              sourceName={fromItem.name}
              targetName={toItem.name}
            />
          );
        })}
    </React.Fragment>
  );
};

const isFlowEdgeSelected = (selectedCcFlowEdgeNodes, currentSource, currentTarget) => {
  if (!selectedCcFlowEdgeNodes) return false;

  const { source, target } = selectedCcFlowEdgeNodes;
  return isCodeCrumbsEqual(source, currentSource) && isCodeCrumbsEqual(target, currentTarget);
};
