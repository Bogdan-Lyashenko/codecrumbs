import React from 'react';
import { buildShiftToPoint } from '../../../../utils/geometry';

export const BOX_SIZE = { W: 1000, H: 800 };
export const DOT = {
  x: 50,
  y: 500
};

export const withSvgDraw = Component => props => {
  const { width = BOX_SIZE.W, height = BOX_SIZE.H, dot = DOT } = props;

  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <Component {...props} shiftToCenterPoint={buildShiftToPoint(dot)} />
    </svg>
  );
};
