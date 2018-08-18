import React from 'react';
import './index.css';

const PADDING = 30;
const HALF_PADDING = PADDING / 2 - 5;

export const getSourcePt = (sourcePosition, targetPosition) => ({
  x: targetPosition.y > sourcePosition.y ? sourcePosition.x + 10 : sourcePosition.x + 8,
  y: targetPosition.y > sourcePosition.y ? sourcePosition.y + 7 : sourcePosition.y - 12
});

export const getSourceDotLinePoints = sourcePt => [
  [sourcePt.x - 3, sourcePt.y],
  [sourcePt.x + 3, sourcePt.y]
];

export const getConnectionLinePoints = (targetPosition, prevSourcePosition, sourcePt) => {
  if (!prevSourcePosition) {
    const P1 = { x: sourcePt.x, y: targetPosition.y + PADDING - 6 };
    const P2 = { x: targetPosition.x - HALF_PADDING, y: targetPosition.y + PADDING - 6 };
    const P3 = { x: targetPosition.x - HALF_PADDING, y: targetPosition.y };

    return [
      [sourcePt.x, sourcePt.y],
      [P1.x, P1.y],
      [P2.x, P2.y],
      [P3.x, P3.y],
      [targetPosition.x, targetPosition.y]
    ];
  }

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
  const connectionLinePoints = getConnectionLinePoints(
    targetPosition,
    prevSourcePosition,
    sourcePt
  );
  if (!connectionLinePoints) {
    return null;
  }

  const lastPt = connectionLinePoints[connectionLinePoints.length - 1];
  const endPointConfig = {
    radius: 2,
    x: lastPt[0],
    y: lastPt[1]
  };

  if (prevSourcePosition) {
    endPointConfig.radius = 2; // TODO: maybe we can use right away in SVG? it's static anyway!!
  } else {
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
          r={endPointConfig.radius}
          cx={endPointConfig.x}
          cy={endPointConfig.y}
        />
      ) : (
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
