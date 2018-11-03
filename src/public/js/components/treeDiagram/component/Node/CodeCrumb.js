import React from 'react';
import classNames from 'classnames';

import './index.scss';
import { SYMBOL_WIDTH } from 'components/treeDiagram/store/constants';

export const CodeCrumbName = props => {
  // onMouseOver maybe use onMouseOver to show crumb details in popover
  const { position, loc, name, singleCrumb, cover, flow, flowStep, onMouseOver, onClick } = props;

  const textPoint = { x: singleCrumb ? position.x - 22 : position.x, y: position.y };
  const symbolWidth = 6;
  const locWidth = loc.length ? loc.length * symbolWidth + 3 : 0;

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
              x={textPoint.x}
              y={textPoint.y - 6}
              width={locWidth}
              height={12}
              strokeDasharray="2"
              className={'CodeCrumbName-rect'}
            />
            <text
              x={textPoint.x + 2.5}
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
            className={'CodeCrumbName-flow-step'}
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
              width={name.length * 7.7}
              height={13}
              className={'NodeText-cover'}
            />
          )) ||
            null}
          <text
            x={textPoint.x + 3 + (!flow ? locWidth : 0) - 1}
            y={textPoint.y + 4}
            onClick={onClick}
            className={classNames('CodeCrumbName-text', {
              'CodeCrumbName-text-flow': flow
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
