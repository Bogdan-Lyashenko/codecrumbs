import React from 'react';

import './index.scss';

export const CodeCrumbName = props => {
  // onMouseOver maybe use onMouseOver to show crumb details in popover
  const { position, loc, name, singleCrumb, cover, onMouseOver, onClick } = props;

  const textPoint = { x: singleCrumb ? position.x - 20 : position.x, y: position.y };
  const symbolWidth = 6;
  const locWidth = loc.length * symbolWidth;

  return (
    <React.Fragment>
      {(cover && (
        <rect
          x={textPoint.x - 3}
          y={position.y - 9}
          width={locWidth + 4}
          height={18}
          className={'NodeText-cover'}
        />
      )) ||
        null}
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
        <React.Fragment>
          {(cover && (
            <rect
              x={textPoint.x + 2 + locWidth}
              y={position.y - 6}
              width={(name.length + 1) * 7.5}
              height={13}
              className={'NodeText-cover'}
            />
          )) ||
            null}
          <text
            x={textPoint.x + 3 + locWidth - 1}
            y={textPoint.y + 4}
            onClick={onClick}
            className={'CodeCrumbName-text'}
          >
            :{name}
          </text>
        </React.Fragment>
      )) ||
        null}
    </React.Fragment>
  );
};
