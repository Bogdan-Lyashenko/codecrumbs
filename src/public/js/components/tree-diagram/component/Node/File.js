import React from 'react';
import classNames from 'classnames';

import { SYMBOL_WIDTH } from 'components/tree-diagram/store/constants';
import './index.css';

const ICONS_DIR = 'resources/';

export const FileName = props => {
  const { position, name, onTextClick, onIconClick, purple, cover } = props;

  const iconPath = ICONS_DIR + (purple ? 'js-file-purple.svg' : 'js-file.svg');
  const iconSize = 15;
  const nameWidth = name.length * SYMBOL_WIDTH;

  return (
    <React.Fragment>
      {(cover && (
        <React.Fragment>
          <rect
            x={position.x + 3}
            y={position.y - 12}
            width={14}
            height={19}
            className={'NodeText-cover'}
          />
          <rect
            x={position.x + 16}
            y={position.y - 8}
            width={nameWidth}
            height={16}
            className={'NodeText-cover'}
          />
        </React.Fragment>
      )) ||
        null}
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
