import SVG from 'svg.js';
import React from 'react';
import {
    drawCodeCrumbEdge,
    drawPartEdge,
    drawCodeCrumbText
} from './drawHelpers';

import { FILE_NODE_TYPE, DIR_NODE_TYPE } from '../constants';
import { getFilesList } from '../treeLayout';

class CodeCrumbsTree extends React.Component {
    constructor(props) {
        super(props);

        this.svgDraw = null;
        this.svgElementsSet = null; //
    }

    componentDidMount() {
        const { width, height, iconsAndTextLayer } = this.props;

        this.svgDraw = SVG(iconsAndTextLayer).size(width, height);
        this.drawTree(this.svgDraw);
    }

    componentDidUpdate() {
        this.svgDraw.clear();
        this.drawTree(this.svgDraw);
    }

    drawTree(primaryDraw) {
        const { filesTreeLayoutNodes, shiftToCenterPoint } = this.props;

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

                    drawCodeCrumbText(primaryDraw, shiftToCenterPoint, {
                        x: cX,
                        y: cY,
                        name: crumb.data.name
                    });
                });
            }
        });
    }

    componentWillUnmount() {
        const { iconsAndTextLayer } = this.props;

        iconsAndTextLayer.removeChild(this.svgDraw.node);
    }

    render() {
        return null;
    }
}

export default CodeCrumbsTree;
