import React from 'react';
import classNames from 'classnames';

import './index.scss';

const ICONS_DIR = 'resources/';

export const FolderName = props => {
  const { position, name, dependency, disabled, openedState, onIconClick, onTextClick } = props;

  const closed = openedState === 0; //TODO: replace with constants
  const notActiveChildrenCollapsed = openedState === 1;

  const iconPath = `${ICONS_DIR}${disabled ? 'disabled-' : ''}${
    closed ? 'closed-' : 'open-'
  }folder.svg`;
  const iconSize = closed ? 14 : 15;

  const iconPositionX = position.x + 3;
  const iconPositionY = position.y + (closed ? -16 : -17);

  return (
    <g className={'FolderNode'}>
      {dependency ? (
        <rect
          x={position.x + 2}
          y={position.y - 16}
          width={16}
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
            iconPositionY + 17,
            iconPositionX + 16,
            iconPositionY + 14
          ].join(', ')}
          className={classNames('NodeIcon-folder-line', {
            'NodeIcon-folder-line-disabled': disabled
          })}
        />
      ) : null}
      <image
        x={iconPositionX}
        y={iconPositionY}
        onClick={onIconClick}
        xlinkHref={iconPath}
        height={iconSize}
        width={iconSize}
        className={'NodeIcon'}
      />
      {notActiveChildrenCollapsed ? (
        <g onClick={onIconClick} className={'NodeIcon'}>
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
        onClick={onTextClick}
        className={classNames('NodeText-folder-name', {
          'NodeText-folder-name-disabled': disabled
        })}
      >
        {name}
      </text>
    </g>
  );
};
