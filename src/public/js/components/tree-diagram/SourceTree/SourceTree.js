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
        const {
            layoutNodes,
            shiftToCenterPoint,
            dependenciesDiagramOn
        } = this.props;

        //note: instance from d3-flex tree, not Array
        layoutNodes.each(node => {
            const [nX, nY] = [node.y, node.x];
            const parent = node.parent;

            if (parent) {
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
                    }
                });
            }

            //file: TODO: add another check, possible bug for empty folder
            if (!node.children) {
                drawDot(primaryDraw, shiftToCenterPoint, {
                    x: nX,
                    y: nY,
                    highlighted: dependenciesDiagramOn
                });

                drawFileText(primaryDraw, shiftToCenterPoint, {
                    x: nX,
                    y: nY,
                    name: node.data.name
                });
                drawFileIcon(primaryDraw, shiftToCenterPoint, { x: nX, y: nY });
                return;
            }

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
        });
    }

    componentWillUnmount() {
        const { sourceEdgesLayer, iconsAndTextLayer } = this.props;

        sourceEdgesLayer.removeChild(this.drawOnSourceEdgesLayer.node);
        iconsAndTextLayer.removeChild(this.drawOnIconsAndTextLayer.node);
    }

    render() {
        return null;
    }
}

export default SourceTree;
