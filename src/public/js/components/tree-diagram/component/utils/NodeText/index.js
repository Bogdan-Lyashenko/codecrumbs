import React from 'react';
import classNames from 'classnames';

import { FILE_NODE_TYPE, DIR_NODE_TYPE } from '../../../../../../../shared/constants';
import './index.css';

export const FileName = props => {
  const { position, name, onClick, purple } = props;

  const shiftX = 16;
  const shiftY = 5;

  return (
    <text
      x={position.x + shiftX}
      y={position.y + shiftY}
      onClick={onClick}
      className={classNames('NodeText-file-name', {
        'NodeText-file-name-purple': purple
      })}
    >
      {name}
    </text>
  );
};

export const FolderName = props => {
  const { position, name, disabled } = props;

  const shiftX = 20;
  const shiftY = -3;

  return (
    <text
      x={position.x + shiftX}
      y={position.y + shiftY}
      className={classNames('NodeText-folder-name', {
        'NodeText-folder-name-disabled': disabled
      })}
    >
      {name}
    </text>
  );
};
