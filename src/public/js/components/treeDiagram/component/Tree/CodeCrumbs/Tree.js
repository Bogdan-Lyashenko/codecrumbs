import React from 'react';

import { NO_TRAIL_FLOW } from 'core/constants';
import { CodeCrumbName } from 'components/treeDiagram/component/Node/CodeCrumb';
import { FileName } from 'components/treeDiagram/component/Node/File';
import { PartEdge, CodeCrumbEdge } from 'components/treeDiagram/component/Edge/CodeCrumbEdge';

const Tree = props => {
  const {
    shiftToCenterPoint,
    filesLayoutMap,
    filesMap,
    selectedCrumbedFlowKey,
    sourceDiagramOn,
    dependenciesDiagramOn,
    codeCrumbsMinimize,
    codeCrumbsLineNumbers,
    onCodeCrumbSelect
  } = props;

  return (
    <React.Fragment>
      {Object.keys(filesLayoutMap).map(key => {
        const node = filesLayoutMap[key];

        const [nX, nY] = [node.y, node.x];
        const position = shiftToCenterPoint(nX, nY);

        if (!node.children) {
          return null;
        }

        const file = filesMap[node.data.path];
        return (
          <React.Fragment key={`code-crumb-${file.name}`}>
            {!sourceDiagramOn && !dependenciesDiagramOn ? (
              <FileName position={position} name={file.name} purple={codeCrumbsMinimize} />
            ) : null}
            {(!codeCrumbsMinimize && (
              <PartEdge sourcePosition={position} parentName={file.name} />
            )) ||
              null}

            {!codeCrumbsMinimize &&
              node.children.map((crumb, i, list) => {
                const [cX, cY] = [crumb.y, crumb.x];
                const crumbPosition = shiftToCenterPoint(cX, cY);
                const singleCrumb = list.length === 1;
                const crumbData = crumb.data;
                const ccParams = crumbData.params;

                return (
                  <React.Fragment key={`code-crumb-edge-${file.path}-${crumbData.name}`}>
                    {(!singleCrumb && (
                      <CodeCrumbEdge
                        sourcePosition={position}
                        targetPosition={crumbPosition}
                        parentName={file.name}
                      />
                    )) ||
                      null}
                    <CodeCrumbName
                      position={crumbPosition}
                      loc={codeCrumbsLineNumbers ? crumbData.displayLoc : ''}
                      name={crumbData.name}
                      singleCrumb={singleCrumb}
                      cover={true}
                      flow={
                        ccParams.flow &&
                        ccParams.flow === selectedCrumbedFlowKey &&
                        selectedCrumbedFlowKey !== NO_TRAIL_FLOW
                      }
                      flowStep={ccParams.flowStep}
                      onClick={() => onCodeCrumbSelect({ fileNode: file, codeCrumb: crumbData })}
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
