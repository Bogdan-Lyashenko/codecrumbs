import SVG from 'svg.js';
import React from 'react';
import { drawDependenciesEdge } from './drawHelpers';

class DependenciesTree extends React.Component {
    constructor(props) {
        super(props);

        this.svgDraw = null;
        this.svgElementsSet = null; //
    }

    componentDidMount() {
        const { width, height, dependenciesEdgesLayer } = this.props;

        this.svgDraw = SVG(dependenciesEdgesLayer).size(width, height); //TODO: props for size
        this.drawTree(this.svgDraw);
    }

    componentDidUpdate() {
        this.svgDraw.clear();
        this.drawTree(this.svgDraw);
    }

    componentWillUnmount() {
        const { dependenciesEdgesLayer } = this.props;
        dependenciesEdgesLayer.removeChild(this.svgDraw.node);
    }

    //move to utils
    findNodeByPathName = (list = [], pathName) => {
        return list.find(l => l.data.path === pathName);
    };

    drawTree(draw) {
        const {
            filesTreeLayoutNodes,
            dependenciesList,
            shiftToCenterPoint
        } = this.props;

        const moduleFilesList = filesTreeLayoutNodes.leaves();

        dependenciesList.forEach(({ moduleName, importedModuleNames }) => {
            const moduleNode = this.findNodeByPathName(
                moduleFilesList,
                moduleName
            );

            const [mX, mY] = [moduleNode.y, moduleNode.x];

            importedModuleNames.reduce((prevSource, name) => {
                const importedNode = this.findNodeByPathName(
                    moduleFilesList,
                    name
                );

                const [iX, iY] = [importedNode.y, importedNode.x];
                //TODO: implementation iterations:
                //1) done: first with sharp angles + overlay
                //2) done: without overlaying
                //3) rounded angles
                const source = { x: iX, y: iY };
                drawDependenciesEdge(draw, shiftToCenterPoint, {
                    source,
                    target: { x: mX, y: mY },
                    prevSource
                });

                return source;
            }, null);
        });
    }

    render() {
        return null;
    }
}

export default DependenciesTree;
