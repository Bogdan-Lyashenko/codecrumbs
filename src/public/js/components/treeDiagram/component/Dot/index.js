import React from 'react';
import classNames from 'classnames';
import { ICONS_DIR } from 'utils/constants';

import './index.scss';

export const Dot = props => {
  const { position, disabled, selected, type } = props;
  const iconPath = `${ICONS_DIR}dot/${type ? `${type}-` : ''}${selected ? 'selected-' : ''}dot.svg`;
  const iconSize = 6;

  return (
    <image
      x={position.x - 2.5}
      y={position.y - 2.5}
      xlinkHref={iconPath}
      height={iconSize}
      width={iconSize}
    />
  );
};
