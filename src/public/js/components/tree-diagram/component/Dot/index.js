import React from 'react';
import classNames from 'classnames';

import './index.css';

export const Dot = props => {
  const { position, disabled, highlighted } = props;
  const radius = 2.5;

  return (
    <circle
      r={radius}
      cx={position.x}
      cy={position.y}
      className={classNames('Dot', {
        'Dot-disabled': !!disabled,
        'Dot-highlighted': !!highlighted
      })}
    />
  );
};
