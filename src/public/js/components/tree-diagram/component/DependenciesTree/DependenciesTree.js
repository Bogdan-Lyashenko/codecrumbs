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
            const entryModule = dependenciesList.find(
                d => d.moduleName === entryPoint.path
            );
            return [entryModule];
        }

        const dependenciesStore = [];
        this.collectDependencies(
            entryPoint.path,
            dependenciesList,
            dependenciesStore
        );
        return dependenciesStore;
    }

    collectDependencies(entryModuleName, dependenciesList, store = []) {
        const entryModule = dependenciesList.find(
            d => d.moduleName === entryModuleName
        );

        store.push(entryModule);

        entryModule.importedModuleNames.forEach(name =>
            this.collectDependencies(name, dependenciesList, store)
        );
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
