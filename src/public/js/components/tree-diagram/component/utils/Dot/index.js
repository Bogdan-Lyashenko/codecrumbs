import React from 'react';
import classNames from 'classnames';

import './index.css';

export const Dot = props => {
  const { position, disabled, highlighted } = props;
  const radius = 5;
  const halfRadius = radius / 2;

  return (
    <circle
      r={radius}
      cx={position.x - halfRadius}
      cy={position.y - halfRadius}
      className={classNames('Dot')}
    />
  );
};
