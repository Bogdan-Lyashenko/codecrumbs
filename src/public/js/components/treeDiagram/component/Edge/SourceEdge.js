import React from 'react';
import classNames from 'classnames';
import './index.scss';

export const SourceEdge = props => {
  const { targetPosition, sourcePosition, disabled, singleChild, selected } = props;

  const edgeTurnDistance = 20;

  const START_PT = sourcePosition;
  const P2 = { x: targetPosition.x - edgeTurnDistance, y: sourcePosition.y };
  const P3 = { x: targetPosition.x - edgeTurnDistance, y: targetPosition.y };
  const END_PT = targetPosition;

  const points = singleChild
    ? [[START_PT.x, START_PT.y], [END_PT.x, END_PT.y], [END_PT.x, END_PT.y]]
    : [[START_PT.x, START_PT.y], [P2.x, P2.y], [P3.x, P3.y], [END_PT.x, END_PT.y]];

  return (
    <React.Fragment>
      <polyline
        points={points.join(', ')}
        className={classNames('SourceEdge', {
          'SourceEdge-disabled': disabled,
          'SourceEdge-selected': selected
        })}
      />
    </React.Fragment>
  );
};
