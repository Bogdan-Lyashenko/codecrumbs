import React from 'react';
import { connect } from 'react-redux';

import { createConnection } from './connection';
import { SOCKET_MESSAGE_TYPE } from '../constants';
import {
  setInitialSourceData,
  setChangedSourceData,
  setPredefinedState,
  updateFiles
} from './actions';

class DataBusContainer extends React.PureComponent {
  componentDidMount() {
    const { standalone } = this.props;

    if (standalone) {
      return this.setupStandalone();
    }

    return this.setupLocal();
  }

  setupStandalone() {
    const { setPredefinedState, predefinedState } = this.props;
    predefinedState && setPredefinedState(predefinedState);
  }

  setupLocal() {
    createConnection(this.onSocketMessage.bind(this));
  }

  onSocketMessage(message) {
    const { type, data, namespace } = message;

    console.log(`Message '${type}' from server received`);

    switch (type) {
      case SOCKET_MESSAGE_TYPE.SOURCE_INIT_SOURCE_FILES_SYNC:
        return this.props.setInitialSourceData(data, namespace);

      case SOCKET_MESSAGE_TYPE.SOURCE_UPDATE_SOURCE_FILE_SYNC:
        return this.props.setChangedSourceData(data, namespace);

      case SOCKET_MESSAGE_TYPE.SOURCE_RESPONSE_FETCH_FILE:
        return this.props.updateFiles(data, namespace);

      default:
        console.warn(`Unhandled message in client: ${JSON.stringify(message)}`);
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
  setPredefinedState,
  updateFiles
};

export default connect(
  null,
  mapDispatchToProps
)(DataBusContainer);
