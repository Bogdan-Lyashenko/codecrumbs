import React from 'react';
import classNames from 'classnames';

import { FILE_NODE_TYPE, DIR_NODE_TYPE } from '../../../../../../../shared/constants';
import './index.css';

export const FileName = props => {
  const { position, text, purple } = props;

  const fileTextPointShiftX = 16;
  const fileTextPointShiftY = -8;

  return (
    <text
      x={position.x + fileTextPointShiftX}
      y={position.y + fileTextPointShiftY}
      className={classNames('NodeText-file-name', {
        'NodeText-file-name-purple': !!purple
      })}
    >
      {text}
    </text>
  );
};

export const FolderName = (props) => {
  const { position, text } = props;

  return (
    <text
      x={position.x}
      y={position.y}
    >
      {text}
    </text>
  );
};