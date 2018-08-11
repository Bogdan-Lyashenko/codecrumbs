import React from 'react';
import classNames from 'classnames';

import './index.css';

const ICONS_DIR = 'resources/';

export const FileIcon = props => {
  const { position, onClick, purple } = props;

  const iconSize = 15;
  const shiftX = 2;
  const shiftY = -10;

  const iconPath = ICONS_DIR + (purple ? 'js-file-purple.svg' : 'js-file.svg');

  return (
    <image
      x={position.x + shiftX}
      y={position.y + shiftY}
      onClick={onClick}
      xlinkHref={iconPath}
      height={iconSize}
      width={iconSize}
      className={'NodeIcon'}
    />
  );
};

export const FolderIcon = props => {
  const { position, onClick, closed, disabled } = props;

  const iconSize = closed ? 14 : 15;
  const shiftX = 3;
  const shiftY = closed ? -16 : -17;

  const iconPath = `${ICONS_DIR}${closed ? 'closed-' : ''}folder${disabled ? '-disabled' : ''}.svg`;
  const iconPositionX = position.x + shiftX;
  const iconPositionY = position.y + shiftY;

  return (
    <React.Fragment>
      {closed ? (
        <polyline
          points={[
            iconPositionX - 1,
            iconPositionY + 16,
            iconPositionX + 16,
            iconPositionY + 16,
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
        onClick={onClick}
        xlinkHref={iconPath}
        height={iconSize}
        width={iconSize}
        className={'NodeIcon'}
      />
    </React.Fragment>
  );
};
