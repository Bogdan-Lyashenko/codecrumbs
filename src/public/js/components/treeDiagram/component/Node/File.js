import React from 'react';
import classNames from 'classnames';

import { SYMBOL_WIDTH } from 'components/treeDiagram/store/constants';
import './index.scss';

const ICONS_DIR = 'resources/';

export const FileName = props => {
  const { position, name, onTextClick, onIconClick, purple, selected, dependency } = props;

  // TODO: move out to switch
  const iconPath = `${ICONS_DIR}${purple ? 'purple-' : ''}${
    dependency
      ? selected && !purple
        ? 'selected-two-circles.svg'
        : 'two-circles.svg'
      : 'js-file.svg'
  }`;

  const iconSize = 15;
  const nameWidth = name.length * SYMBOL_WIDTH;

  const imageOffset = !dependency ? { x: 2, y: -10 } : { x: 0, y: -7.5 };

  return (
    <React.Fragment>
      {(dependency && (
        <React.Fragment>
          <rect
            x={position.x - 1}
            y={position.y - 3}
            width={16}
            height={5}
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
        x={position.x + imageOffset.x}
        y={position.y + imageOffset.y}
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
          'NodeText-file-name-purple': purple,
          'NodeText-file-name-selected': dependency && selected && !purple
        })}
      >
        {name}
      </text>
    </React.Fragment>
  );
};
