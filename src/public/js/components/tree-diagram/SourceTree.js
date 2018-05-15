import SVG from 'svg.js';
import React from 'react';
import { getTreeLayout } from './treeLayout';
import {
    drawDot,
    drawEdge,
    drawFileText,
    drawFileIcon,
    drawFolderText,
    drawFolderIcon
} from './treeGraph';
import { buildShiftToPoint } from '../../utils/geometry';

const BOX_SIZE = 800;
const DOT = {
    x: BOX_SIZE / 4,
    y: BOX_SIZE / 4
};

const shiftToCenterPoint = buildShiftToPoint(DOT);

class SourceTree extends React.Component {
    constructor(props) {
        super(props);

        this.svgDraw = null;
        this.svgElementsSet = null; //
    }

    componentDidMount() {
        this.svgDraw = SVG(this.svgMountNode).size(BOX_SIZE, BOX_SIZE); //TODO: props for size
    }

    componentDidUpdate() {
        this.svgDraw.clear();
        this.drawTree(this.props.treeData, this.svgDraw);
    }

    drawTree(treeData, draw) {
        const layoutNodes = getTreeLayout(treeData);

        layoutNodes.each(node => {
            const [nX, nY] = [node.y, node.x];

            drawDot(draw, shiftToCenterPoint, nX, nY);

            if (node.parent) {
                const [pX, pY] = [node.parent.y, node.parent.x];

                drawEdge(draw, shiftToCenterPoint, nX, nY, pX, pY);
            }

            if (!node.children) {
                drawFileText(draw, shiftToCenterPoint, nX, nY, node.data.name);
                drawFileIcon(draw, shiftToCenterPoint, nX, nY);
                return;
            }

            drawFolderText(draw, shiftToCenterPoint, nX, nY, node.data.name);
            drawFolderIcon(draw, shiftToCenterPoint, nX, nY);
        });
    }

    render() {
        return <div ref={ref => (this.svgMountNode = ref)} />;
    }
}

export default SourceTree;
