import React from 'react';
import SourceTree from './SourceTree/SourceTree';
import DependenciesTree from './DependenciesTree/DependenciesTree';
import CodeCrumbsTree from './CodeCrumbsTree/CodeCrumbsTree';
import './TreeDiagram.css';

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
            codeCrumbsMinimize,
            codeCrumbsDetails,
            onFileSelect,
            onCodeCrumbSelect
        } = this.props;

        const sharedProps = {
            sourceDiagramOn,
            dependenciesDiagramOn,
            codeCrumbsDiagramOn,
            codeCrumbsMinimize,
            codeCrumbsDetails
        };

        return (
            <React.Fragment>
                {filesTreeLayoutNodes &&
                    sourceDiagramOn && (
                        <SourceTree
                            layoutNodes={filesTreeLayoutNodes}
                            secondaryLayer={this.sourceEdgesLayer}
                            primaryLayer={this.iconsAndTextLayer}
                            onFileSelect={onFileSelect}
                            {...sharedProps}
                        />
                    )}

                {dependenciesList &&
                    filesTreeLayoutNodes &&
                    dependenciesDiagramOn && (
                        <DependenciesTree
                            dependenciesList={dependenciesList}
                            filesTreeLayoutNodes={filesTreeLayoutNodes}
                            primaryLayer={this.dependenciesEdgesLayer}
                            {...sharedProps}
                        />
                    )}

                {filesTreeLayoutNodes &&
                    codeCrumbsDiagramOn && (
                        <CodeCrumbsTree
                            filesTreeLayoutNodes={filesTreeLayoutNodes}
                            primaryLayer={this.iconsAndTextLayer}
                            onCodeCrumbSelect={onCodeCrumbSelect}
                            {...sharedProps}
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
