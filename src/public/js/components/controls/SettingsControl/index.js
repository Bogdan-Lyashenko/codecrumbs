import React from 'react';
import { connect } from 'react-redux';
import { Menu, Dropdown, Button, Icon } from 'antd';

import { downloadStore } from 'components/dataBus/store/actions';

const SettingsControl = ({ onDownloadClick }) => {
  const menu = (
    <Menu>
      <Menu.Item key={'download'}>
        <a target="_blank" rel="noopener noreferrer" onClick={onDownloadClick}>
          Download store <Icon type="download" />
        </a>
      </Menu.Item>
      <Menu.Item key={'upload'}>
        <a target="_blank" rel="noopener noreferrer" onClick={onDownloadClick}>
          Upload store <Icon type="upload" />
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={'SettingsControl'}>
      <Dropdown overlay={menu} placement="bottomLeft">
        <Button size={'small'}>
          setup
          <Icon type="setting" />
        </Button>
      </Dropdown>
    </div>
  );
};

const mapDispatchToProps = {
  onDownloadClick: downloadStore
};

export default connect(
  null,
  mapDispatchToProps
)(SettingsControl);
