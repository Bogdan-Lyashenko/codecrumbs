import { Icon } from 'antd';
import React from 'react';
import copy from 'copy-text-to-clipboard';

export const Copy = ({ copyText }) => (
  <a href="#" onClick={() => copy(copyText)} title={'Copy path'}>
    <Icon type="copy" theme="outlined" />
  </a>
);
