import React from 'react';
import devProcessTesting from './utils/dev-test';
import { createConnection } from './utils/connection';
import { SOCKET_EVENT_TYPE } from '../../shared/constants';
import ViewsSwitchList from './components/controls/ViewsSwitchList';
import SourceTree from './components/tree-diagram/SourceTree';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filesTree: [],
            filesList: [],
            dependenciesList: []
        };
    }

    componentDidMount() {
        createConnection(({ type, data }) => this.onSocketEvent(type, data));
    }

    onSocketEvent(type, data) {
        switch (type) {
            case SOCKET_EVENT_TYPE.SYNC_SOURCE_FILES:
                const { filesTree, filesList, dependenciesList } = data.body;

                this.setState({
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
        return (
            <div className="App-container">
                <div>
                    <ViewsSwitchList
                        onChange={(key, checked) => {
                            console.log(`Switch to ${checked} for ${key}`);
                        }}
                    />
                </div>
                <SourceTree treeData={this.state.filesTree} />
            </div>
        );
    }
}

export default App;
