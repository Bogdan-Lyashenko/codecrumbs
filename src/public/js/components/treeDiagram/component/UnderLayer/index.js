import React from 'react';

import './index.less';

export const UnderLayer = props => {
  const { width, height, onClick } = props;

  return (
    <rect x={0} y={0} width={width} height={height} className={'UnderLayer'} onClick={onClick} />
  );
};
