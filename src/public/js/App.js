import React from 'react';
import devProcessTesting from './utils/dev-test';
import { createConnection } from './connection';
import SourceTree from './components/tree-diagram/SourceTree';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sourceTreeData: []
        };
    }

    componentDidMount() {
        createConnection(({ data }) => {
            this.setState({
                sourceTreeData: data.body
            });
        });
    }

    render() {
        return (
            <div>
                <SourceTree treeData={this.state.sourceTreeData} />
            </div>
        );
    }
}

export default App;
