import SVG from 'svg.js';
import React from 'react';
import {
    drawDot,
    drawSourceEdge,
    drawFileText,
    drawFileIcon,
    drawFolderText,
    drawFolderIcon
} from './treeGraph';

class SourceTree extends React.Component {
    constructor(props) {
        super(props);

        this.svgDraw = null;
        this.svgElementsSet = null; //
    }

    componentDidMount() {
        const {
            width,
            height,
            iconsAndTextLayer,
            sourceEdgesLayer
        } = this.props;

        this.drawOnIconsAndTextLayer = SVG(iconsAndTextLayer).size(
            width,
            height
        );

        this.drawOnSourceEdgesLayer = SVG(sourceEdgesLayer).size(width, height);

        this.drawTree({
            primaryDraw: this.drawOnIconsAndTextLayer,
            secondaryDraw: this.drawOnSourceEdgesLayer
        });
    }

    componentDidUpdate() {
        this.drawOnSourceEdgesLayer.clear();
        this.drawOnIconsAndTextLayer.clear();

        this.drawTree({
            primaryDraw: this.drawOnIconsAndTextLayer,
            secondaryDraw: this.drawOnSourceEdgesLayer
        });
    }

    drawTree({ primaryDraw, secondaryDraw }) {
        const { layoutNodes, shiftToCenterPoint } = this.props;

        //note: instance from d3-flex tree, not Array
        layoutNodes.each(node => {
            const [nX, nY] = [node.y, node.x];

            drawDot(secondaryDraw, shiftToCenterPoint, nX, nY);

            if (node.parent) {
                const [pX, pY] = [node.parent.y, node.parent.x];
                drawSourceEdge(secondaryDraw, shiftToCenterPoint, nX, nY, pX, pY);
            }

            if (!node.children) {
                drawFileText(primaryDraw, shiftToCenterPoint, nX, nY, node.data.name);
                drawFileIcon(primaryDraw, shiftToCenterPoint, nX, nY);
                return;
            }

            drawFolderText(primaryDraw, shiftToCenterPoint, nX, nY, node.data.name);
            drawFolderIcon(primaryDraw, shiftToCenterPoint, nX, nY);
        });
    }

    render() {
        return <div />;
    }
}

export default SourceTree;
