import React from 'react';

import { NO_TRAIL_FLOW } from '../../../../../core/constants';
import { CodeCrumbName } from '../../../../treeDiagram/component/Node/CodeCrumb';
import { PartEdge, CodeCrumbMultiEdge } from '../../../../treeDiagram/component/Edge/CodeCrumbEdge';
import { isCodeCrumbSelected, getCcPosition } from './helpers';

const Tree = props => {
  const {
    sourceDiagramOn,
    ccAlightPoint,
    ccShiftIndexMap,
    shiftToCenterPoint,
    codecrumbsLayoutMap,
    filesMap,
    currentSelectedCrumbedFlowKey,
    codeCrumbsMinimize,
    codeCrumbsLineNumbers,
    onCodeCrumbSelect,
    selectedCcFlowEdgeNodes
  } = props;

  if (!ccShiftIndexMap) {
    return null;
  }

  return (
    <React.Fragment>
      {Object.keys(codecrumbsLayoutMap).map(key => {
        const node = codecrumbsLayoutMap[key];

        const [nX, nY] = [node.y, node.x];
        const position = shiftToCenterPoint(nX, nY);

        const file = filesMap[node.data.path];
        const singleCrumb = node.children.length === 1;

        const firstCrumbXPoint =
          !singleCrumb &&
          shiftToCenterPoint(
            currentSelectedCrumbedFlowKey !== NO_TRAIL_FLOW
              ? getCcPosition(ccAlightPoint, ccShiftIndexMap[node.children[0].data.id])
              : ccAlightPoint,
            node.children[0].y
          ).x;

        return (
          <React.Fragment key={`code-crumb-${key}-${nX}-${nY}`}>
            {!codeCrumbsMinimize &&
              node.children.map((crumb, i) => {
                const [_, cY] = [crumb.y, crumb.x];
                const crumbData = crumb.data;
                const crumbPosition = shiftToCenterPoint(
                  currentSelectedCrumbedFlowKey !== NO_TRAIL_FLOW
                    ? getCcPosition(ccAlightPoint, ccShiftIndexMap[crumbData.id])
                    : ccAlightPoint,
                  cY
                );

                const ccParams = crumbData.params;

                return (
                  <React.Fragment
                    key={`code-crumb-edge-${crumbData.name}-${crumbPosition.x}-${crumbPosition.y}`}
                  >
                    {!i &&
                      sourceDiagramOn && (
                        <PartEdge
                          sourcePosition={position}
                          parentName={file.name}
                          ccAlightPoint={crumbPosition.x}
                          singleCrumb={singleCrumb}
                        />
                      )}
                    {!singleCrumb &&
                      sourceDiagramOn && (
                        <CodeCrumbMultiEdge
                          sourcePosition={position}
                          targetPosition={crumbPosition}
                          ccAlightPoint={i && firstCrumbXPoint}
                        />
                      )}
                    <CodeCrumbName
                      position={crumbPosition}
                      loc={codeCrumbsLineNumbers ? crumbData.displayLoc : ''}
                      name={crumbData.name}
                      singleCrumb={singleCrumb}
                      cover={true}
                      selected={isCodeCrumbSelected(selectedCcFlowEdgeNodes, crumbData)}
                      flow={
                        ccParams.flow &&
                        ccParams.flow === currentSelectedCrumbedFlowKey &&
                        currentSelectedCrumbedFlowKey !== NO_TRAIL_FLOW
                      }
                      flowStep={ccParams.flowStep}
                      original={ccParams.original}
                      onClick={e => onCodeCrumbSelect(e, { fileNode: file, codeCrumb: crumbData })}
                    />
                  </React.Fragment>
                );
              })}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default Tree;
