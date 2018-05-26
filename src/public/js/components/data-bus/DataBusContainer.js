import React from 'react';
import { connect } from 'react-redux';

import { createConnection } from '../../utils/connection';
import { SOCKET_EVENT_TYPE } from '../../../../shared/constants';
import {
    setInitialSourceData,
    calcFilesTreeLayoutNodes
} from './store/actions';

class DataBusContainer extends React.Component {
    componentDidMount() {
        createConnection(({ type, data }) => this.onSocketEvent(type, data));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.codeCrumbsDiagramOn === this.props.codeCrumbsDiagramOn) {
            return;
        }

        this.props.calcFilesTreeLayoutNodes(nextProps.codeCrumbsDiagramOn);
    }

    onSocketEvent(type, data) {
        switch (type) {
            case SOCKET_EVENT_TYPE.SYNC_SOURCE_FILES:
                const { filesTree, filesList, dependenciesList } = data.body;

                this.props.setInitialSourceData({
                    filesTree,
                    filesList,
                    dependenciesList
                });

                this.props.calcFilesTreeLayoutNodes(
                    this.props.codeCrumbsDiagramOn
                );
                break;

            default:
                break;
        }
    }

    render() {
        return <div className="DataBus-container" />;
    }
}

const mapStateToProps = state => {
    const { checkedState } = state.viewSwitches;

    return {
        codeCrumbsDiagramOn: checkedState.codeCrumbs
    };
};

const mapDispatchToProps = {
    setInitialSourceData,
    calcFilesTreeLayoutNodes
};

export default connect(mapStateToProps, mapDispatchToProps)(DataBusContainer);
