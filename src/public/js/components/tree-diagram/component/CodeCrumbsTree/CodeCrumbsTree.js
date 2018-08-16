import React from 'react';
import { drawCodeCrumbEdge, drawPartEdge, drawCodeCrumbLoc, drawPopOver } from './drawHelpers';
import { drawFileText, drawFileIcon } from '../SourceTree/drawHelpers';

import { getFilesList } from '../../../../utils/treeLayout';
import { FileName } from '../utils/NodeText';
import { FileIcon } from '../utils/NodeIcon';
import { PartEdge, CodeCrumbEdge } from '../utils/Edge/CodeCrumbEdge';

class CodeCrumbsTree extends React.Component {
  componentDidMount() {
    // this.drawSet = createSet(this.props.primaryDraw);
    // this.drawTree();
  }

  componentDidUpdate() {
    //this.clearDraw();
    //this.drawTree();
  }

  componentWillUnmount() {
    //this.clearDraw();
  }

  clearDraw() {
    //this.drawSet.clearAll();
  }

  drawTree() {
    const {
      primaryDraw,
      filesTreeLayoutNodes,
      shiftToCenterPoint,
      sourceDiagramOn,
      dependenciesDiagramOn,
      codeCrumbsMinimize,
      codeCrumbsDetails,
      onCodeCrumbSelect
    } = this.props;

    const { add } = this.drawSet;

    const filesList = getFilesList(filesTreeLayoutNodes);
    filesList.forEach(node => {
      const [nX, nY] = [node.y, node.x];

      if (node.children) {
        // done
        /*if (!sourceDiagramOn && !dependenciesDiagramOn) {
          add(
            drawFileText(primaryDraw, shiftToCenterPoint, {
              x: nX,
              y: nY,
              name: node.data.name
            })
          );

          add(
            drawFileIcon(primaryDraw, shiftToCenterPoint, {
              x: nX,
              y: nY,
              codeCrumbsMinimize
            })
          );
        }*/

        // done
        /*!codeCrumbsMinimize &&
          add(
            drawPartEdge(primaryDraw, shiftToCenterPoint, {
              source: {
                x: nX,
                y: nY
              },
              parentName: node.data.name
            })
          );*/

        !codeCrumbsMinimize &&
          node.children.forEach((crumb, i, list) => {
            const [cX, cY] = [crumb.y, crumb.x];
            const singleCrumb = list.length === 1;

            !singleCrumb &&
              add(
                drawCodeCrumbEdge(primaryDraw, shiftToCenterPoint, {
                  source: {
                    x: nX,
                    y: nY
                  },
                  target: {
                    x: cX,
                    y: cY
                  },
                  parentName: node.data.name
                })
              );

            //TODO: refactor mess
            const loc = crumb.data.crumbedLineNode.loc.start;
            add(
              drawCodeCrumbLoc(primaryDraw, shiftToCenterPoint, {
                x: cX,
                y: cY,
                loc: `(${loc.line},${loc.column})`,
                name: crumb.data.name,
                singleCrumb,
                onMouseOver() {
                  if (!crumb.data.params.details || codeCrumbsDetails) return null;

                  return drawPopOver(primaryDraw, shiftToCenterPoint, {
                    x: cX,
                    y: cY,
                    name: crumb.data.params.details,
                    singleCrumb
                  });
                },
                onClick() {
                  onCodeCrumbSelect(node.data, crumb.data);
                }
              })
            );

            if (codeCrumbsDetails && crumb.data.params.details) {
              add(
                drawPopOver(primaryDraw, shiftToCenterPoint, {
                  x: cX,
                  y: cY,
                  name: crumb.data.params.details,
                  singleCrumb
                })
              );
            }
          });
      }
    });
  }

  render() {
    const {
      filesTreeLayoutNodes,
      shiftToCenterPoint,
      sourceDiagramOn,
      dependenciesDiagramOn,
      codeCrumbsMinimize,
      codeCrumbsDetails,
      onCodeCrumbSelect
    } = this.props;

    const filesList = getFilesList(filesTreeLayoutNodes);
    return (
      <React.Fragment>
        {filesList.map(node => {
          const [nX, nY] = [node.y, node.x];
          const position = shiftToCenterPoint(nX, nY);

          if (!node.children) {
            return null;
          }

          return (
            <React.Fragment key={`code-crumb-${node.data.name}`}>
              {!sourceDiagramOn && !dependenciesDiagramOn ? (
                <React.Fragment>
                  <FileName position={position} name={node.data.name} />
                  <FileIcon position={position} purple={codeCrumbsMinimize} />
                </React.Fragment>
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
