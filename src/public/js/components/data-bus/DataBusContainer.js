import React from 'react';
import { connect } from 'react-redux';

import { createConnection } from '../../utils/connection';
import { SOCKET_EVENT_TYPE } from '../../../../shared/constants';
import { setInitialSourceData, calcFilesTreeLayoutNodes } from './store/actions';

class DataBusContainer extends React.Component {
  componentDidMount() {
    createConnection(({ type, data }) => this.onSocketEvent(type, data));
  }

  onSocketEvent(type, data) {
    switch (type) {
      case SOCKET_EVENT_TYPE.SYNC_SOURCE_FILES:
        const { filesTree, filesList, dependenciesList } = data.body;
        const { setInitialSourceData, calcFilesTreeLayoutNodes } = this.props;

        setInitialSourceData({
          filesTree,
          filesList,
          dependenciesList
        });

        calcFilesTreeLayoutNodes();
        break;

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
  calcFilesTreeLayoutNodes
};

export default connect(
  null,
  mapDispatchToProps
)(DataBusContainer);
