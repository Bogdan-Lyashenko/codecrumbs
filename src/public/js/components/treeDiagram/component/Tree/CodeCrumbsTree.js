import React from 'react';

import { CodeCrumbName } from 'components/treeDiagram/component/Node/CodeCrumb';
import { FileName } from 'components/treeDiagram/component/Node/File';
import { PartEdge, CodeCrumbEdge } from 'components/treeDiagram/component/Edge/CodeCrumbEdge';

class CodeCrumbsTree extends React.Component {
  render() {
    const {
      fileNodesMap,
      shiftToCenterPoint,
      sourceDiagramOn,
      dependenciesDiagramOn,
      codeCrumbsMinimize,
      codeCrumbsLineNumbers,
      onCodeCrumbSelect
    } = this.props;

    return (
      <React.Fragment>
        {Object.keys(fileNodesMap).map(key => {
          const node = fileNodesMap[key];

          const [nX, nY] = [node.y, node.x];
          const position = shiftToCenterPoint(nX, nY);

          if (!node.children) {
            return null;
          }

          return (
            <React.Fragment key={`code-crumb-${node.data.name}`}>
              {!sourceDiagramOn && !dependenciesDiagramOn ? (
                <FileName position={position} name={node.data.name} purple={codeCrumbsMinimize} />
              ) : null}
              {(!codeCrumbsMinimize && (
                <PartEdge sourcePosition={position} parentName={node.data.name} />
              )) ||
                null}

              {!codeCrumbsMinimize &&
                node.children.map((crumb, i, list) => {
                  const [cX, cY] = [crumb.y, crumb.x];
                  const crumbPosition = shiftToCenterPoint(cX, cY);
                  const singleCrumb = list.length === 1;

                  return (
                    <React.Fragment key={`code-crumb-edge-${i}`}>
                      {(!singleCrumb && (
                        <CodeCrumbEdge
                          sourcePosition={position}
                          targetPosition={crumbPosition}
                          parentName={node.data.name}
                        />
                      )) ||
                        null}
                      <CodeCrumbName
                        position={crumbPosition}
                        loc={codeCrumbsLineNumbers ? crumb.data.displayLoc : ''}
                        name={crumb.data.name}
                        singleCrumb={singleCrumb}
                        cover={dependenciesDiagramOn}
                        onClick={() => onCodeCrumbSelect(node.data, crumb.data)}
                      />
                    </React.Fragment>
                  );
                })}
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}

export default CodeCrumbsTree;
