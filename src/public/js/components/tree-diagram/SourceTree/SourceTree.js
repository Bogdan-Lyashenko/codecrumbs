import React from 'react';
import { withSvgDraw } from '../SvgDraw';
import {
    drawDot,
    drawSourceEdge,
    drawFileText,
    drawFileIcon,
    drawFolderText,
    drawFolderIcon
} from './drawHelpers';

import { FILE_NODE_TYPE, DIR_NODE_TYPE } from '../constants';

class SourceTree extends React.Component {
    componentDidMount() {
        this.drawTree();
    }

    componentDidUpdate() {
        const { primaryDraw, secondaryDraw } = this.props;

        primaryDraw.clear();
        secondaryDraw.clear();

        this.drawTree();
    }

    drawTree() {
        const {
            primaryDraw,
            secondaryDraw,
            layoutNodes,
            shiftToCenterPoint,
            dependenciesDiagramOn
        } = this.props;

        //note: instance from d3-flex tree, not Array
        layoutNodes.each(node => {
            const [nX, nY] = [node.y, node.x];
            const parent = node.parent;

            if (parent && parent.data.type === DIR_NODE_TYPE) {
                const [pX, pY] = [parent.y, parent.x];

                drawSourceEdge(secondaryDraw, shiftToCenterPoint, {
                    disabled: dependenciesDiagramOn,
                    target: {
                        x: nX,
                        y: nY
                    },
                    source: {
                        x: pX,
                        y: pY
                    },
                    singleChild: parent.children.length === 1
                });
            }

            if (node.data.type === FILE_NODE_TYPE) {
                drawDot(secondaryDraw, shiftToCenterPoint, {
                    x: nX,
                    y: nY,
                    disabled: dependenciesDiagramOn
                });

                drawFileText(primaryDraw, shiftToCenterPoint, {
                    x: nX,
                    y: nY,
                    name: node.data.name
                });
                drawFileIcon(primaryDraw, shiftToCenterPoint, { x: nX, y: nY });
                return;
            }

            if (node.data.type === DIR_NODE_TYPE) {
                drawDot(primaryDraw, shiftToCenterPoint, {
                    x: nX,
                    y: nY,
                    disabled: dependenciesDiagramOn
                });

                drawFolderText(primaryDraw, shiftToCenterPoint, {
                    x: nX,
                    y: nY,
                    name: node.data.name,
                    disabled: dependenciesDiagramOn
                });
                drawFolderIcon(primaryDraw, shiftToCenterPoint, {
                    x: nX,
                    y: nY,
                    disabled: dependenciesDiagramOn
                });
                return;
            }
        });
    }

    render() {
        return null;
    }
}

export default withSvgDraw(SourceTree);
