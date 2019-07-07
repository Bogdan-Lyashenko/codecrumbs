import React from 'react';

import './index.less';

const styleUp = {
  transform: 'rotate(-90deg)',
  transformOrigin: '50% 50%'
};

const styleDown = {
  transform: 'rotate(90deg)',
  transformOrigin: '50% 50%'
};

export default ({ x, y, width, height, isUp, fill }) => (
  <svg
    version="1.1"
    x={x}
    y={y}
    viewBox="0 0 448.011 448.011"
    width={width}
    height={height}
    shapeRendering={'geometricPrecision'}
  >
    <g>
      <path
        className={'Animation'}
        style={isUp ? styleUp : styleDown}
        d="M438.731,209.463l-416-192c-6.624-3.008-14.528-1.216-19.136,4.48c-4.64,5.696-4.8,13.792-0.384,19.648l136.8,182.4    l-136.8,182.4c-4.416,5.856-4.256,13.984,0.352,19.648c3.104,3.872,7.744,5.952,12.448,5.952c2.272,0,4.544-0.48,6.688-1.472    l416-192c5.696-2.624,9.312-8.288,9.312-14.528S444.395,212.087,438.731,209.463z"
        fill={fill}
      />
    </g>
  </svg>
);
