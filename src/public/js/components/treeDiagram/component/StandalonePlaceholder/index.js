import React from 'react';
import { connect } from 'react-redux';

import Upload from 'antd/es/upload';
import 'antd/es/upload/style';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';

import { uploadStore } from '../../../../core/dataBus/actions';
import './index.less';

const Dragger = Upload.Dragger;

const StandalonePlaceholder = props => {
  const { onUpload } = props;

  const uploaderProps = {
    beforeUpload: file => {
      onUpload(file);
      return false;
    },
    fileList: []
  };

  return (
    <div className={'StandalonePlaceholder'}>
      <Dragger {...uploaderProps}>
        <p className="ant-upload-drag-icon">
          <Icon type="inbox" />
        </p>
        <p className="ant-upload-text">
          Click or drag `codecrumbs` json file to this area to upload
        </p>
        <p className="ant-upload-hint">All magic will happen automatically right after!</p>
      </Dragger>
    </div>
  );
};

const mapDispatchToProps = {
  onUpload: uploadStore
};

export default connect(
  null,
  mapDispatchToProps
)(StandalonePlaceholder);
