import React from 'react';
import classNames from 'classnames';

import './index.scss';

export const Dot = props => {
  const { position, disabled, selected } = props;
  const radius = 2;

  // TODO: replace with file img to have circle
  return (
    <circle
      r={radius}
      cx={position.x}
      cy={position.y}
      className={classNames('Dot', {
        'Dot-disabled': !!disabled,
        'Dot-selected': !!selected
      })}
    />
  );
};
