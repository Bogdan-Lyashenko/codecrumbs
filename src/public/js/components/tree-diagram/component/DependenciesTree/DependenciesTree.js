import React from 'react';
import { drawDependenciesEdge } from './drawHelpers';
import { drawFileText, drawFileIcon } from '../SourceTree/drawHelpers';
import { getFilesList } from '../../../../utils/treeLayout';
import { withSvgDraw } from '../utils/SvgDraw';

class DependenciesTree extends React.Component {
    componentDidMount() {
        this.drawTree();
    }

    componentDidUpdate() {
        const { primaryDraw } = this.props;

        primaryDraw.clear();
        this.drawTree();
    }
    //move to utils
    findNodeByPathName = (list = [], pathName) => {
        return list.find(l => l.data.path === pathName);
    };

    getFilteredDependenciesList() {
        const {
            dependenciesList,
            dependenciesEntryPoint,
            dependenciesShowOneModule
        } = this.props;

        const entryPoint = dependenciesEntryPoint || {
            path: dependenciesList[0].moduleName
        };

        if (dependenciesShowOneModule) {
            return [
                dependenciesList.find(d => d.moduleName === entryPoint.path)
            ];
        }

        return this.collectDependencies(entryPoint.path, dependenciesList);
    }

    collectDependencies(entryModuleName, dependenciesList) {
        let queue = [].concat(entryModuleName),
            store = [];

        while (queue.length) {
            let moduleName = queue.shift(),
                entryModule = dependenciesList.find(
                    d => d.moduleName === moduleName
                );

            store.push(entryModule);

            const nodeBody = entryModule.importedModuleNames;
            if (nodeBody) {
                queue = [...queue, ...nodeBody];
            }
        }

        return store;
    }

    drawTree() {
        const {
            primaryDraw,
            filesTreeLayoutNodes,
            shiftToCenterPoint,
            sourceDiagramOn
        } = this.props;

        const moduleFilesList = getFilesList(filesTreeLayoutNodes);
        const filteredDependenciesList = this.getFilteredDependenciesList();

        filteredDependenciesList.forEach(
            ({ moduleName, importedModuleNames }) => {
                const moduleNode = this.findNodeByPathName(
                    moduleFilesList,
                    moduleName
                );

                if (!moduleNode) return;

                const [mX, mY] = [moduleNode.y, moduleNode.x];

                if (!sourceDiagramOn) {
                    drawFileText(primaryDraw, shiftToCenterPoint, {
                        x: mX,
                        y: mY,
                        name: moduleNode.data.name
                    });
                    drawFileIcon(primaryDraw, shiftToCenterPoint, {
                        x: mX,
                        y: mY
                    });
                }

                importedModuleNames.reduce((prevSource, name) => {
                    const importedNode = this.findNodeByPathName(
                        moduleFilesList,
                        name
                    );

                    if (!importedNode) return;

                    const [iX, iY] = [importedNode.y, importedNode.x];
                    //TODO: implementation iterations:
                    //1) done: first with sharp angles + overlay
                    //2) done: without overlaying, not fot all cases
                    //3) rounded angles
                    const source = { x: iX, y: iY };
                    drawDependenciesEdge(primaryDraw, shiftToCenterPoint, {
                        source,
                        target: { x: mX, y: mY },
                        prevSource
                    });

                    return source;
                }, null);
            }
        );
    }

    render() {
        return null;
    }
}

export default withSvgDraw(DependenciesTree);
