import React from 'react';
import classNames from 'classnames';

import './index.less';

export const CodeCrumbName = props => {
  // onMouseOver maybe use onMouseOver to show crumb details in popover
  const {
    position,
    loc,
    name,
    singleCrumb,
    cover,
    flow,
    flowStep,
    selected,
    onMouseOver,
    onClick
  } = props;

  const textPoint = position;
  const symbolWidth = 6;
  const locWidth = loc.length ? loc.length * symbolWidth + 3 : 0;

  // TODO: refactor render
  return (
    <g className={'CodeCrumbNode'}>
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
      {(!flow &&
        locWidth && (
          <React.Fragment>
            <rect
              x={textPoint.x + (singleCrumb ? 2 : 0)}
              y={textPoint.y - 6}
              width={locWidth}
              height={12}
              strokeDasharray="2"
              className={'CodeCrumbName-rect'}
            />
            <text
              x={textPoint.x + 2.5 + (singleCrumb ? 2 : 0)}
              y={textPoint.y + 3}
              onClick={onClick}
              className={'CodeCrumbName-loc'}
            >
              {loc}
            </text>
          </React.Fragment>
        )) ||
        null}

      {(flow && (
        <React.Fragment>
          <rect
            x={textPoint.x - 13}
            y={textPoint.y - 7}
            width={13}
            height={13}
            className={selected ? 'CodeCrumbName-flow-step-selected' : 'CodeCrumbName-flow-step'}
          />
          <text
            x={textPoint.x - 10.5}
            y={textPoint.y + 3.5}
            onClick={onClick}
            className={'CodeCrumbName-flow'}
          >
            {flowStep}
          </text>
        </React.Fragment>
      )) ||
        null}

      {(name && (
        <React.Fragment>
          {(cover && (
            <rect
              x={textPoint.x + 2 + (!flow ? locWidth : 0)}
              y={position.y - 6}
              width={name.length * 7.5}
              height={13}
              className={'NodeText-cover'}
            />
          )) ||
            null}
          <text
            x={textPoint.x + 3 + (!flow ? locWidth + (singleCrumb ? 2 : 0) : 0) - 1}
            y={textPoint.y + 4}
            onClick={onClick}
            className={classNames('CodeCrumbName-text', {
              'CodeCrumbName-text-selected': selected
            })}
          >
            {!locWidth && !flow ? (
              <React.Fragment>
                &#9686;
                {name}
              </React.Fragment>
            ) : (
              name
            )}
          </text>
        </React.Fragment>
      )) ||
        null}
    </g>
  );
};
