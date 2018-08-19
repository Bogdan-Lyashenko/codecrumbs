import React from 'react';
import './index.css';

import { LAYOUT_CONFIG } from 'components/tree-diagram/store/constants';

const V_SPACE = LAYOUT_CONFIG.spacing + LAYOUT_CONFIG.nodeSizeX;

const PADDING = 30;
const HALF_PADDING = PADDING / 2 - 5;

// Arrow can go from top ot bottom of file icon
const getSourcePt = (sourcePosition, targetPosition) => ({
  x: targetPosition.y > sourcePosition.y ? sourcePosition.x + 10 : sourcePosition.x + 8,
  y: targetPosition.y > sourcePosition.y ? sourcePosition.y + 7 : sourcePosition.y - 12
});

const getSourceDotLinePoints = sourcePt => [
  [sourcePt.x - 3, sourcePt.y],
  [sourcePt.x + 3, sourcePt.y]
];

const getConnectionLine = (targetPosition, sourcePosition, sourcePt) => {
  const yDiff = targetPosition.y - sourcePosition.y;
  const vPadding = Math.abs(yDiff) <= V_SPACE ? V_SPACE / 2 : V_SPACE / 2;

  const P1 = { x: sourcePt.x, y: targetPosition.y - vPadding };
  const P2 = { x: targetPosition.x - HALF_PADDING, y: targetPosition.y - vPadding };
  const P3 = { x: targetPosition.x - HALF_PADDING, y: targetPosition.y };

  return [
    [sourcePt.x, sourcePt.y],
    [P1.x, P1.y],
    [P2.x, P2.y],
    [P3.x, P3.y],
    [targetPosition.x, targetPosition.y]
  ];
};

const getConnectionLineWithPrevSource = (targetPosition, prevSourcePosition, sourcePt) => {
  if (prevSourcePosition.x < sourcePt.x) {
    //TODO: handle other cases
    const P1 = { x: sourcePt.x, y: sourcePt.y + HALF_PADDING - 3 };
    const P2 = {
      x: prevSourcePosition.x + HALF_PADDING,
      y: sourcePt.y + HALF_PADDING - 3
    };

    return [[sourcePt.x, sourcePt.y], [P1.x, P1.y], [P2.x, P2.y]];
  }
};

export const DependenciesEdge = props => {
  const {
    targetPosition,
    sourcePosition,
    prevSourcePosition,
    onClick = () => console.log('on dependencies edge')
  } = props;

  const sourcePt = getSourcePt(sourcePosition, targetPosition);
  const sourceDotLinePoints = getSourceDotLinePoints(sourcePt);
  const connectionLinePoints = !prevSourcePosition
    ? getConnectionLine(targetPosition, sourcePosition, sourcePt)
    : getConnectionLineWithPrevSource(targetPosition, prevSourcePosition, sourcePt);

  if (!connectionLinePoints) {
    return null;
  }

  const lastPt = connectionLinePoints[connectionLinePoints.length - 1];
  const endPointConfig = {
    x: lastPt[0],
    y: lastPt[1]
  };

  if (!prevSourcePosition) {
    endPointConfig.x -= 5;
    endPointConfig.y -= 4;
    endPointConfig.iconSize = 8;
    endPointConfig.iconPath = 'resources/right-arrow.svg'; // TODO: move to getter
  }

  return (
    <React.Fragment>
      <polyline points={sourceDotLinePoints.join(', ')} className={'DependenciesEdge'} />
      <polyline points={connectionLinePoints.join(', ')} className={'DependenciesEdge'} />
      <polyline
        onClick={onClick}
        points={connectionLinePoints.join(', ')}
        className={'EdgeMouseHandler'}
      />
      {prevSourcePosition ? (
        <circle
          className={'DependenciesEdge-end-dot'}
          r={2}
          cx={endPointConfig.x}
          cy={endPointConfig.y}
        />
      ) : (
        // use rotate to handle different directions
        <image
          x={endPointConfig.x}
          y={endPointConfig.y}
          xlinkHref={endPointConfig.iconPath}
          height={endPointConfig.iconSize}
          width={endPointConfig.iconSize}
        />
      )}
    </React.Fragment>
  );
};
