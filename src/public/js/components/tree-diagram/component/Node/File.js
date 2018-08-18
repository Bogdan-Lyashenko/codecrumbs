import React from 'react';
import classNames from 'classnames';

import './index.css';

const ICONS_DIR = 'resources/';

export const FileName = props => {
  const { position, name, onTextClick, onIconClick, purple } = props;

  const iconPath = ICONS_DIR + (purple ? 'js-file-purple.svg' : 'js-file.svg');
  const iconSize = 15;

  return (
    <React.Fragment>
      <image
        x={position.x + 2}
        y={position.y - 10}
        onClick={onIconClick}
        xlinkHref={iconPath}
        height={iconSize}
        width={iconSize}
        className={'NodeIcon'}
      />
      <text
        x={position.x + 16}
        y={position.y + 5}
        onClick={onTextClick}
        className={classNames('NodeText-file-name', {
          'NodeText-file-name-purple': purple
        })}
      >
        {name}
      </text>
    </React.Fragment>
  );
};
