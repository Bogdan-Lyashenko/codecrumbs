import React from 'react';
import { buildShiftToPoint } from '../../utils/geometry';
import SourceTree from './SourceTree';
import DependenciesTree from './DependenciesTree';
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

    render() {
        const { filesTreeLayoutNodes, dependenciesList } = this.props;
        const { layersReady } = this.state;

        //TODO:move styles to class
        return (
            <div>
                <div className="TreeDiagram-layers">
                    <div
                        className="TreeDiagram-layer"
                        ref={ref => (this.sourceEdgesLayer = ref)}
                    />
                    <div
                        className="TreeDiagram-layer"
                        ref={ref => (this.dependenciesEdgesLayer = ref)}
                    />
                    <div
                        className="TreeDiagram-layer"
                        ref={ref => (this.iconsAndTextLayer = ref)}
                    />
                </div>

                {layersReady &&
                    filesTreeLayoutNodes && (
                        <SourceTree
                            layoutNodes={filesTreeLayoutNodes}
                            shiftToCenterPoint={shiftToCenterPoint}
                            width={BOX_SIZE}
                            height={BOX_SIZE}
                            sourceEdgesLayer={this.sourceEdgesLayer}
                            iconsAndTextLayer={this.iconsAndTextLayer}
                        />
                    )}

                {layersReady &&
                    dependenciesList &&
                    filesTreeLayoutNodes && (
                        <DependenciesTree
                            dependenciesList={dependenciesList}
                            filesTreeLayoutNodes={filesTreeLayoutNodes}
                            shiftToCenterPoint={shiftToCenterPoint}
                            width={BOX_SIZE}
                            height={BOX_SIZE}
                            dependenciesEdgesLayer={this.dependenciesEdgesLayer}
                        />
                    )}
            </div>
        );
    }
}

export default TreeDiagram;
