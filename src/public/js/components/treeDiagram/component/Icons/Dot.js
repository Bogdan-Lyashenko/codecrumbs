import React from 'react';

import './index.less';

export default ({ position, selected }) => {
  return (
    <svg
      version="1.1"
      width="6px"
      height="6px"
      x={position.x - 2.5}
      y={position.y - 2.5}
      shapeRendering={'geometricPrecision'}
    >
      <circle
        className={'Animation'}
        r="2.5"
        cx="3"
        cy="3"
        fill={selected ? '#666666' : '#BFBFBF'}
      />
    </svg>
  );
};
