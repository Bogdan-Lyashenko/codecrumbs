import React from 'react';
import { connect } from 'react-redux';

import { createConnection } from 'core/dataBus/connection';
import { SOCKET_EVENT_TYPE } from 'core/constants';
import { setInitialSourceData, setChangedSourceData, setPredefinedState } from './actions';

class DataBusContainer extends React.Component {
  componentDidMount() {
    const { standalone } = this.props;

    if (standalone) {
      return this.setupStandalone();
    }

    return this.setupLocal();
  }

  setupStandalone() {
    const { setPredefinedState, predefinedState } = this.props;
    setPredefinedState(predefinedState);
  }

  setupLocal() {
    createConnection(this.onSocketEvent.bind(this));
  }

  handleInitSyncEvent(dataBody) {
    const { setInitialSourceData } = this.props;
    setInitialSourceData(dataBody);
  }

  handleUpdateSyncEvent(dataBody) {
    const { setChangedSourceData } = this.props;
    setChangedSourceData(dataBody);
  }

  onSocketEvent(event) {
    // TODO: pass sourceProjectId to action name
    const { type, data, sourceProjectId, sourceProjectName } = event;

    switch (type) {
      case SOCKET_EVENT_TYPE.INIT_SOURCE_FILES_SYNC:
        return this.handleInitSyncEvent(data);

      case SOCKET_EVENT_TYPE.UPDATE_SOURCE_FILE_SYNC:
        return this.handleUpdateSyncEvent(data);

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
  setChangedSourceData,
  setPredefinedState
};

export default connect(
  null,
  mapDispatchToProps
)(DataBusContainer);
