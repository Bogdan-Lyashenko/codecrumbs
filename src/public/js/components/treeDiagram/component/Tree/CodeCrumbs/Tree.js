import React from 'react';

import { NO_TRAIL_FLOW } from 'core/constants';
import { CodeCrumbName } from 'components/treeDiagram/component/Node/CodeCrumb';
import { PartEdge, CodeCrumbMultiEdge } from 'components/treeDiagram/component/Edge/CodeCrumbEdge';
import { isCodeCrumbSelected } from './helpers';

const Tree = props => {
  const {
    ccAlightPoint,
    shiftToCenterPoint,
    codecrumbsLayoutMap,
    filesMap,
    selectedCrumbedFlowKey,
    codeCrumbsMinimize,
    codeCrumbsLineNumbers,
    onCodeCrumbSelect,
    selectedCcFlowEdgeNodes
  } = props;

  return (
    <React.Fragment>
      {Object.keys(codecrumbsLayoutMap).map(key => {
        const node = codecrumbsLayoutMap[key];

        const [nX, nY] = [node.y, node.x];
        const position = shiftToCenterPoint(nX, nY);

        const file = filesMap[node.data.path];
        const singleCrumb = node.children.length === 1;

        return (
          <React.Fragment key={`code-crumb-${node.data.path}-${key}`}>
            {(!codeCrumbsMinimize && (
              <PartEdge
                sourcePosition={position}
                parentName={file.name}
                ccAlightPoint={ccAlightPoint}
                singleCrumb={singleCrumb}
              />
            )) ||
              null}

            {!codeCrumbsMinimize &&
              node.children.map(crumb => {
                const [cX, cY] = [crumb.y, crumb.x];
                const crumbPosition = shiftToCenterPoint(ccAlightPoint, cY);
                const crumbData = crumb.data;
                const ccParams = crumbData.params;

                return (
                  <React.Fragment key={`code-crumb-edge-${file.path}-${crumbData.name}`}>
                    {(!singleCrumb && (
                      <CodeCrumbMultiEdge
                        sourcePosition={position}
                        targetPosition={crumbPosition}
                      />
                    )) ||
                      null}
                    <CodeCrumbName
                      position={crumbPosition}
                      loc={codeCrumbsLineNumbers ? crumbData.displayLoc : ''}
                      name={crumbData.name}
                      singleCrumb={singleCrumb}
                      cover={true}
                      selected={isCodeCrumbSelected(selectedCcFlowEdgeNodes, crumbData)}
                      flow={
                        ccParams.flow &&
                        ccParams.flow === selectedCrumbedFlowKey &&
                        selectedCrumbedFlowKey !== NO_TRAIL_FLOW
                      }
                      flowStep={ccParams.flowStep}
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
