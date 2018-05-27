import React from 'react';
import { withSvgDraw } from '../SvgDraw';
import {
    drawCodeCrumbEdge,
    drawPartEdge,
    drawCodeCrumbLoc
} from './drawHelpers';
import { drawFileText, drawFileIcon } from '../SourceTree/drawHelpers';

import { FILE_NODE_TYPE, DIR_NODE_TYPE } from '../../store/constants';
import { getFilesList } from '../../../../utils/treeLayout';

class CodeCrumbsTree extends React.Component {
    constructor(props) {
        super(props);

        this.drawSet = null;
    }

    componentDidMount() {
        this.drawSet = this.props.primaryDraw.set();
        this.drawTree();
    }

    addToSet(list) {
        this.drawSet.add.apply(this.drawSet, [].concat(list));
    }

    clearDraw() {
        this.drawSet.each(function() {
            //TODO: remove event listener here
            this.remove();
        });
    }

    componentDidUpdate() {
        this.clearDraw();
        this.drawTree();
    }

    componentWillUnmount() {
        this.clearDraw();
    }

    shouldComponentUpdate(nextProps) {
        const oldProps = this.props;
        return oldProps.filesTreeLayoutNodes !== nextProps.filesTreeLayoutNodes;
    }

    drawTree() {
        const {
            primaryDraw,
            filesTreeLayoutNodes,
            shiftToCenterPoint,
            sourceDiagramOn,
            dependenciesDiagramOn,
            onCodeCrumbMouseOver
        } = this.props;

        const add = this.addToSet.bind(this);

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
                            y: nY
                        })
                    );
                }

                add(
                    drawPartEdge(primaryDraw, shiftToCenterPoint, {
                        source: {
                            x: nX,
                            y: nY
                        },
                        parentName: node.data.name
                    })
                );

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

                    const loc = crumb.data.crumbedLineNode.loc.start;
                    //TODO: use drawSet to remove event listeners
                    add(
                        drawCodeCrumbLoc(primaryDraw, shiftToCenterPoint, {
                            x: cX,
                            y: cY,
                            loc: `(${loc.line},${loc.column})`,
                            name: crumb.data.name,
                            singleCrumb,
                            onMouseOver(position) {
                                onCodeCrumbMouseOver(node.data, position);
                            },
                            onClick() {
                                console.log(node.data.fileCode);
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
