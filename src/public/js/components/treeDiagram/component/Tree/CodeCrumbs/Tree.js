import React from 'react';

import { NO_TRAIL_FLOW } from 'core/constants';
import { CodeCrumbName } from 'components/treeDiagram/component/Node/CodeCrumb';
import { FileName } from 'components/treeDiagram/component/Node/File';
import { PartEdge, CodeCrumbEdge } from 'components/treeDiagram/component/Edge/CodeCrumbEdge';
import { isCodeCrumbSelected } from './helpers';

const Tree = props => {
  const {
    language,
    shiftToCenterPoint,
    codecrumbsLayoutMap,
    filesMap,
    selectedCrumbedFlowKey,
    sourceDiagramOn,
    dependenciesDiagramOn,
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
        return (
          <React.Fragment key={`code-crumb-${file.name}`}>
            {!sourceDiagramOn && !dependenciesDiagramOn ? (
              <FileName
                language={language}
                position={position}
                name={file.name}
                purple={codeCrumbsMinimize}
              />
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
