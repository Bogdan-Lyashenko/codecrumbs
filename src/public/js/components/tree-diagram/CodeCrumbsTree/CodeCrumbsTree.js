import React from 'react';
import { withSvgDraw } from '../SvgDraw';
import {
    drawCodeCrumbEdge,
    drawPartEdge,
    drawCodeCrumbLoc
} from './drawHelpers';

import { FILE_NODE_TYPE, DIR_NODE_TYPE } from '../constants';
import { getFilesList } from '../treeLayout';

class CodeCrumbsTree extends React.Component {
    componentDidMount() {
        this.drawTree();
    }

    componentDidUpdate() {
        const { primaryDraw } = this.props;

        primaryDraw.clear();
        this.drawTree();
    }

    drawTree() {
        const {
            primaryDraw,
            filesTreeLayoutNodes,
            shiftToCenterPoint
        } = this.props;

        const filesList = getFilesList(filesTreeLayoutNodes);
        filesList.forEach(node => {
            const [nX, nY] = [node.y, node.x];

            if (node.children) {
                drawPartEdge(primaryDraw, shiftToCenterPoint, {
                    source: {
                        x: nX,
                        y: nY
                    },
                    parentName: node.data.name
                });

                node.children.forEach(crumb => {
                    const [cX, cY] = [crumb.y, crumb.x];
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
                    });

                    const loc = crumb.data.crumbedLineNode.loc.start;
                    drawCodeCrumbLoc(primaryDraw, shiftToCenterPoint, {
                        x: cX,
                        y: cY,
                        loc: `(${loc.line},${loc.column})`,
                        name: crumb.data.name
                    });
                });
            }
        });
    }

    render() {
        return null;
    }
}

export default withSvgDraw(CodeCrumbsTree);
