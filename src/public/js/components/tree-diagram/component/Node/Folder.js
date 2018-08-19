import React from 'react';
import classNames from 'classnames';

import './index.css';

const ICONS_DIR = 'resources/';

export const FolderName = props => {
  const { position, name, disabled, closed, cover, onClick } = props;

  const iconPath = `${ICONS_DIR}${closed ? 'closed-' : ''}folder${disabled ? '-disabled' : ''}.svg`;
  const iconSize = closed ? 14 : 15;

  const iconPositionX = position.x + 3;
  const iconPositionY = position.y + (closed ? -16 : -17);

  // TODO: add cover for text, same as in File (check `cover` var)
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
      <text
        x={position.x + 20}
        y={position.y - 3}
        className={classNames('NodeText-folder-name', {
          'NodeText-folder-name-disabled': disabled
        })}
      >
        {name}
      </text>
    </React.Fragment>
  );
};
