import React from 'react';

import Icon from 'antd/es/icon'
import 'antd/es/icon/style'

import copy from 'copy-text-to-clipboard';

export const Copy = ({ copyText }) => (
  <a href="#" onClick={() => copy(copyText)} title={'Copy path'}>
    <Icon type="copy" theme="outlined" />
  </a>
);
