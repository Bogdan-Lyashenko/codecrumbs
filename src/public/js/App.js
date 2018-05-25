import React from 'react';
import { connect } from 'react-redux';
import devProcessTesting from './utils/dev-test';

import { createConnection } from './utils/connection';
import { getTreeLayout } from './utils/treeLayout';
import { SOCKET_EVENT_TYPE } from '../../shared/constants';

import ViewsSwitches from './components/controls/ViewSwitches/ViewSwitchesContainer';
import TreeDiagram from './components/tree-diagram/TreeDiagramContainer';

//TODO: move out logic, just pass
import { SWITCH_KEYS } from './components/controls/ViewSwitches/store/constants';

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

    componentWillReceiveProps(nextProps) {
        if (nextProps.codeCrumbsDiagramOn === this.props.codeCrumbsDiagramOn) {
            return;
        }

        this.setState({
            ...this.state,
            filesTreeLayoutNodes: getTreeLayout(
                this.state.filesTree,
                nextProps.codeCrumbsDiagramOn
            )
        });
    }

    onSocketEvent(type, data) {
        switch (type) {
            case SOCKET_EVENT_TYPE.SYNC_SOURCE_FILES:
                const { codeCrumbsDiagramOn } = this.props;

                const { filesTree, filesList, dependenciesList } = data.body;
                const filesTreeLayoutNodes = getTreeLayout(
                    filesTree,
                    codeCrumbsDiagramOn
                );

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
        const { filesTreeLayoutNodes, dependenciesList } = this.state;

        return (
            <div className="App-container">
                <ViewsSwitches />

                <TreeDiagram
                    filesTreeLayoutNodes={filesTreeLayoutNodes}
                    dependenciesList={dependenciesList}
                />

                <footer className="App-footer">
                    Bohdan Liashenko{' '}
                    <a href="https://github.com/Bogdan-Lyashenko/codecrumbs">
                        Project Github
                    </a>
                </footer>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { checkedState } = state.viewSwitches;

    return {
        codeCrumbsDiagramOn: checkedState[SWITCH_KEYS.CODE_CRUMBS]
    };
};

export default connect(mapStateToProps)(App);
