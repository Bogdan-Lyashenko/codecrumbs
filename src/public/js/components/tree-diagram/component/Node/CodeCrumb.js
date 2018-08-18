import React from 'react';

import './index.css';

export const CodeCrumbName = props => {
  // onMouseOver maybe use onMouseOver to show crumb details in popover
  const { position, loc, name, singleCrumb, onMouseOver, onClick } = props;

  const textPoint = { x: singleCrumb ? position.x - 20 : position.x, y: position.y };
  const symbolWidth = 6;
  const locWidth = loc.length * symbolWidth;

  return (
    <React.Fragment>
      <rect
        x={textPoint.x}
        y={textPoint.y - 6}
        width={locWidth}
        height={12}
        className={'CodeCrumbName-rect'}
      />
      <text
        x={textPoint.x + 3}
        y={textPoint.y + 3}
        onClick={onClick}
        className={'CodeCrumbName-loc'}
      >
        {loc}
      </text>
      {(name && (
        <text
          x={textPoint.x + 3 + locWidth - 1}
          y={textPoint.y + 4}
          onClick={onClick}
          className={'CodeCrumbName-text'}
        >
          :{name}
        </text>
      )) ||
        null}
    </React.Fragment>
  );
};
