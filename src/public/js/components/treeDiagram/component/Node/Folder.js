import React from 'react';
import classNames from 'classnames';
import { FOLDER_OPEN_STATE } from '../../../../core/constants';
import {
  OpenFolder as OpenFolderIcon,
  CloseFolder as CloseFolderIcon
} from '../Icons/Folder';

import './index.less';
import { SYMBOL_WIDTH } from '../constants';

export const FolderName = props => {
  const { position, name, cover, disabled, openedState, onNodeClick } = props;

  const closed = openedState === FOLDER_OPEN_STATE.CLOSED;
  const notActiveChildrenCollapsed = openedState === FOLDER_OPEN_STATE.OPEN_ACTIVE_CHILDREN_ONLY;

  const iconPositionX = position.x + 3;
  const iconPositionY = position.y + (closed ? -16 : -17);
  const nameWidth = name.length * SYMBOL_WIDTH;

  const icon = closed ? (
    <CloseFolderIcon
      x={iconPositionX}
      y={iconPositionY}
      height={14}
      width={14}
      fill={!disabled ? '#1890ff' : '#ccc'}
    />
  ) : (
    <OpenFolderIcon
      x={iconPositionX}
      y={iconPositionY}
      height={15}
      width={15}
      fill={!disabled ? '#1890ff' : '#ccc'}
    />
  );

  return (
    <g className={'FolderNode'} onClick={onNodeClick}>
      {cover ? (
        <rect
          x={position.x + 2}
          y={position.y - 16}
          width={16}
          height={15}
          className={'NodeText-cover'}
        />
      ) : null}
      {cover ? (
        <rect
          x={position.x + 20}
          y={position.y - 16}
          width={nameWidth}
          height={15}
          className={'NodeText-cover'}
        />
      ) : null}
      {closed ? (
        <polyline
          points={[
            iconPositionX - 1,
            iconPositionY + 17,
            iconPositionX + 16,
            iconPositionY + 17
          ].join(', ')}
          strokeDasharray="2"
          className={classNames('NodeIcon-folder-line', {
            'NodeIcon-folder-line-disabled': disabled
          })}
        />
      ) : null}
      {icon}
      {notActiveChildrenCollapsed ? (
        <g>
          <rect
            x={position.x + 6}
            y={position.y - 6}
            width={11}
            height={4}
            className={'Folder-collapsed-children-rect'}
          />
          <text x={position.x + 7} y={position.y - 3} className={'Folder-collapsed-children-text'}>
            ..
          </text>
        </g>
      ) : null}
      <text
        x={position.x + 20}
        y={position.y - 3}
        className={classNames('NodeText-folder-name', {
          'NodeText-folder-name-disabled': disabled
        })}
      >
        {name}
      </text>
    </g>
  );
};
