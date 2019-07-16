import React from 'react';
import { connect } from 'react-redux';

import Menu from 'antd/es/menu';
import 'antd/es/menu/style';
import Dropdown from 'antd/es/dropdown';
import 'antd/es/dropdown/style';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';
import Button from 'antd/es/button';
import 'antd/es/button/style';
import Upload from 'antd/es/upload';
import 'antd/es/upload/style';

import { downloadStore, uploadStore } from '../../../../core/dataBus/actions';
import './index.less';

const SettingsControl = ({ onDownload, onUpload }) => {
  const uploadProps = {
    beforeUpload: file => {
      onUpload(file);
      return false;
    },
    fileList: []
  };

  const menu = (
    <Menu>
      <Menu.Item key={'download'}>
        <a target="_blank" rel="noopener noreferrer" onClick={onDownload}>
          <Icon type="download" /> Download store
        </a>
      </Menu.Item>
      <Menu.Item key={'upload'} onClick={e => false}>
        <Upload {...uploadProps}>
          <Icon type="upload" /> Upload store
        </Upload>
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
  onDownload: downloadStore,
  onUpload: uploadStore
};

export default connect(
  null,
  mapDispatchToProps
)(SettingsControl);
