import React from 'react';
import { buildShiftToPoint } from '../../../utils/geometry';
import SourceTree from './SourceTree/SourceTree';
import DependenciesTree from './DependenciesTree/DependenciesTree';
import CodeCrumbsTree from './CodeCrumbsTree/CodeCrumbsTree';
import './TreeDiagram.css';

const BOX_SIZE = 800;
const DOT = {
    x: BOX_SIZE / 4,
    y: BOX_SIZE / 4
};

const shiftToCenterPoint = buildShiftToPoint(DOT);

class TreeDiagram extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.setState({ layersReady: true });
    }

    renderLayers() {
        return (
            <div className="TreeDiagram-layers">
                <div
                    data-name="sourceEdgesLayer"
                    className="TreeDiagram-layer"
                    ref={ref => (this.sourceEdgesLayer = ref)}
                />
                <div
                    data-name="dependenciesEdgesLayer"
                    className="TreeDiagram-layer"
                    ref={ref => (this.dependenciesEdgesLayer = ref)}
                />
                <div
                    data-name="iconsAndTextLayer"
                    className="TreeDiagram-layer"
                    ref={ref => (this.iconsAndTextLayer = ref)}
                />
            </div>
        );
    }

    renderDiagrams() {
        const {
            filesTreeLayoutNodes,
            dependenciesList,
            sourceDiagramOn,
            dependenciesDiagramOn,
            codeCrumbsDiagramOn,
            onCodeCrumbMouseOver
        } = this.props;

        return (
            <React.Fragment>
                {filesTreeLayoutNodes &&
                    sourceDiagramOn && (
                        <SourceTree
                            layoutNodes={filesTreeLayoutNodes}
                            shiftToCenterPoint={shiftToCenterPoint}
                            width={BOX_SIZE}
                            height={BOX_SIZE}
                            secondaryLayer={this.sourceEdgesLayer}
                            primaryLayer={this.iconsAndTextLayer}
                            dependenciesDiagramOn={dependenciesDiagramOn}
                        />
                    )}

                {dependenciesList &&
                    filesTreeLayoutNodes &&
                    dependenciesDiagramOn && (
                        <DependenciesTree
                            dependenciesList={dependenciesList}
                            filesTreeLayoutNodes={filesTreeLayoutNodes}
                            shiftToCenterPoint={shiftToCenterPoint}
                            width={BOX_SIZE}
                            height={BOX_SIZE}
                            primaryLayer={this.dependenciesEdgesLayer}
                            sourceDiagramOn={sourceDiagramOn}
                            codeCrumbsDiagramOn={codeCrumbsDiagramOn}
                        />
                    )}

                {filesTreeLayoutNodes &&
                    codeCrumbsDiagramOn && (
                        <CodeCrumbsTree
                            filesTreeLayoutNodes={filesTreeLayoutNodes}
                            shiftToCenterPoint={shiftToCenterPoint}
                            width={BOX_SIZE}
                            height={BOX_SIZE}
                            primaryLayer={this.iconsAndTextLayer}
                            onCodeCrumbMouseOver={onCodeCrumbMouseOver}
                            sourceDiagramOn={sourceDiagramOn}
                            dependenciesDiagramOn={dependenciesDiagramOn}
                        />
                    )}
            </React.Fragment>
        );
    }

    render() {
        const { layersReady } = this.state;

        return (
            <div className="TreeDiagram-container">
                {this.renderLayers()}
                {layersReady && this.renderDiagrams()}
            </div>
        );
    }
}

export default TreeDiagram;
