import React from 'react';
import devProcessTesting from './utils/dev-test';
import { createConnection } from './utils/connection';
import { SOCKET_EVENT_TYPE } from '../../shared/constants';
import ViewsSwitchList from './components/controls/ViewsSwitchList';
import TreeDiagram from './components/tree-diagram/TreeDiagram';
import { getTreeLayout } from './components/tree-diagram/treeLayout';

import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filesTreeLayoutNodes: null,
            filesTree: null,
            filesList: null,
            dependenciesList: null
        };
    }

    componentDidMount() {
        createConnection(({ type, data }) => this.onSocketEvent(type, data));
    }

    onSocketEvent(type, data) {
        switch (type) {
            case SOCKET_EVENT_TYPE.SYNC_SOURCE_FILES:
                const { filesTree, filesList, dependenciesList } = data.body;
                const filesTreeLayoutNodes = getTreeLayout(filesTree);

                this.setState({
                    filesTreeLayoutNodes,
                    filesTree,
                    filesList,
                    dependenciesList
                });
                break;

            default:
                break;
        }
    }

    render() {
        const {
            filesTreeLayoutNodes,
            dependenciesList
        } = this.state;

        return (
            <div className="App-container">
                <ViewsSwitchList
                    onChange={(key, checked) => {
                        console.log(`Switch to ${checked} for ${key}`);
                    }}
                />

                <TreeDiagram
                    filesTreeLayoutNodes={filesTreeLayoutNodes}
                    dependenciesList={dependenciesList}
                />
            </div>
        );
    }
}

export default App;
