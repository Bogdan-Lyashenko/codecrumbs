import React from 'react';
import classNames from 'classnames';

import './index.css';
import { drawDependenciesEdge, drawDot } from '../../DependenciesTree/drawHelpers';

export const SourceEdge = props => {
  const {
    targetPosition,
    sourcePosition,
    disabled,
    singleChild,
    onClick = () => console.log('on edge')
  } = props;

  const edgeTurnDistance = 20;

  const START_PT = sourcePosition;
  const P2 = { x: targetPosition.x - edgeTurnDistance, y: sourcePosition.y };
  const P3 = { x: targetPosition.x - edgeTurnDistance, y: targetPosition.y };
  const END_PT = targetPosition;

  const points = singleChild
    ? [[START_PT.x, START_PT.y], [END_PT.x, END_PT.y]]
    : [[START_PT.x, START_PT.y], [P2.x, P2.y], [P3.x, P3.y], [END_PT.x, END_PT.y]];

  return (
    <React.Fragment>
      <polyline
        points={points.join(', ')}
        className={classNames('SourceEdge', {
          'SourceEdge-disabled': disabled
        })}
      />
      <polyline onClick={onClick} points={points.join(', ')} className={'EdgeMouseHandler'} />
    </React.Fragment>
  );
};

export const DependenciesEdge = props => {
  const { targetPosition, sourcePosition, prevSourcePosition } = props;

  const padding = 30;
  const halfPadding = padding / 2 - 5;

  const sourcePt = {
    x: targetPosition.y > sourcePosition.y ? sourcePosition.x + 10 : sourcePosition.x + 8,
    y: targetPosition.y > sourcePosition.y ? sourcePosition.y + 7 : sourcePosition.y - 12
  };
  //drawSourceDotLine(draw, sourcePt);

  if (!prevSourcePosition) {
    const P1 = { x: sourcePt.x, y: targetPosition.y + padding - 6 };
    const P2 = { x: targetPosition.x - halfPadding, y: targetPosition.y + padding - 6 };
    const P3 = { x: targetPosition.x - halfPadding, y: targetPosition.y };

    /*drawConnectionLine(draw, [
      [sourcePt.x, sourcePt.y],
      [P1.x, P1.y],
      [P2.x, P2.y],
      [P3.x, P3.y],
      [targetPosition.x, targetPosition.y]
    ]);
*/
    //drawArrow(draw, shiftToCenterPoint, targetPosition.x, targetPosition.y + 6);
    const points = [
      [sourcePt.x, sourcePt.y],
      [P1.x, P1.y],
      [P2.x, P2.y],
      [P3.x, P3.y],
      [targetPosition.x, targetPosition.y]
    ];

    return (
      <React.Fragment>
        <polyline points={points.join(', ')} className={'DependenciesEdge'} />
      </React.Fragment>
    );
  } else {
    if (prevSourcePosition.x < sourcePt.x) {
      //TODO: handle other cases
      const P1 = { x: sourcePt.x, y: sourcePt.y + halfPadding - 3 };
      const P2 = {
        x: prevSourcePosition.x + halfPadding,
        y: sourcePt.y + halfPadding - 3
      };

      //drawConnectionLine(draw, [[sourcePt.x, sourcePt.y], [P1.x, P1.y], [P2.x, P2.y]]);

      //drawDot(draw, P2);

      const points = [[sourcePt.x, sourcePt.y], [P1.x, P1.y], [P2.x, P2.y]];
      return (
        <React.Fragment>
          <polyline points={points.join(', ')} className={'DependenciesEdge'} />
        </React.Fragment>
      );
    }
  }
};
