import React from 'react';
import { connect } from 'react-redux';

import { createConnection } from 'utils/connection';
import { SOCKET_EVENT_TYPE } from 'utils/constants';
import { setInitialSourceData, setChangedSourceData } from './store/actions';

class DataBusContainer extends React.Component {
  componentDidMount() {
    createConnection(({ type, data }) => this.onSocketEvent(type, data));
  }

  handleInitSyncEvent(dataBody) {
    const { setInitialSourceData } = this.props;

    setInitialSourceData({
      ...dataBody,
      dependenciesRootEntryName: 'example-project/index.js' // TODO: fix, should be passed from server
    });
  }

  handleUpdateSyncEvent(dataBody) {
    const { setChangedSourceData } = this.props;

    setChangedSourceData({
      ...dataBody
    });
  }

  onSocketEvent(type, data) {
    switch (type) {
      case SOCKET_EVENT_TYPE.INIT_SOURCE_FILES_SYNC:
        return this.handleInitSyncEvent(data.body);

      case SOCKET_EVENT_TYPE.UPDATE_SOURCE_FILE_SYNC:
        return this.handleUpdateSyncEvent(data.body);

      default:
        break;
    }
  }

  render() {
    return <div className="DataBus-container" />;
  }
}

const mapDispatchToProps = {
  setInitialSourceData,
  setChangedSourceData
};

export default connect(
  null,
  mapDispatchToProps
)(DataBusContainer);
