import React from 'react';
import { withSvgDraw } from '../utils/SvgDraw';
import {
    drawCodeCrumbEdge,
    drawPartEdge,
    drawCodeCrumbLoc,
    drawPopOver
} from './drawHelpers';
import { drawFileText, drawFileIcon } from '../SourceTree/drawHelpers';

import { FILE_NODE_TYPE, DIR_NODE_TYPE } from '../../store/constants';
import { getFilesList } from '../../../../utils/treeLayout';
import { createSet } from '../utils/SvgSet';

class CodeCrumbsTree extends React.Component {
    componentDidMount() {
        this.drawSet = createSet(this.props.primaryDraw);
        this.drawTree();
    }

    componentDidUpdate() {
        this.clearDraw();
        this.drawTree();
    }

    componentWillUnmount() {
        this.clearDraw();
    }

    shouldComponentUpdate(nextProps) {
        return true;
        //TODO: missing overlapping elements: text&icons
        /*const oldProps = this.props;
        return oldProps.filesTreeLayoutNodes !== nextProps.filesTreeLayoutNodes;*/
    }

    clearDraw() {
        this.drawSet.clearAll();
    }

    drawTree() {
        const {
            primaryDraw,
            filesTreeLayoutNodes,
            shiftToCenterPoint,
            sourceDiagramOn,
            dependenciesDiagramOn,
            codeCrumbsMinimize,
            onCodeCrumbSelect
        } = this.props;

        const { add } = this.drawSet;

        const filesList = getFilesList(filesTreeLayoutNodes);
        filesList.forEach(node => {
            const [nX, nY] = [node.y, node.x];

            if (node.children) {
                if (!sourceDiagramOn && !dependenciesDiagramOn) {
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
                }

                !codeCrumbsMinimize && add(
                    drawPartEdge(primaryDraw, shiftToCenterPoint, {
                        source: {
                            x: nX,
                            y: nY
                        },
                        parentName: node.data.name
                    })
                );

                !codeCrumbsMinimize && node.children.forEach((crumb, i, list) => {
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

                    const loc = crumb.data.crumbedLineNode.loc.start;
                    add(
                        drawCodeCrumbLoc(primaryDraw, shiftToCenterPoint, {
                            x: cX,
                            y: cY,
                            loc: `(${loc.line},${loc.column})`,
                            name: crumb.data.name,
                            singleCrumb,
                            onMouseOver() {
                                if (!crumb.data.params.details) return null;

                                return drawPopOver(
                                    primaryDraw,
                                    shiftToCenterPoint,
                                    {
                                        x: cX,
                                        y: cY,
                                        name: crumb.data.params.details
                                    }
                                );
                            },
                            onClick() {
                                onCodeCrumbSelect(node.data, crumb.data);
                            }
                        })
                    );
                });
            }
        });
    }

    render() {
        return null;
    }
}

export default withSvgDraw(CodeCrumbsTree);
