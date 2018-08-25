import React from 'react';
import './index.css';

import { LAYOUT_CONFIG, DepEdgeGroups } from 'components/tree-diagram/store/constants';
const { TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT } = DepEdgeGroups;

const V_SPACE = LAYOUT_CONFIG.spacing + LAYOUT_CONFIG.nodeSizeX;

const PADDING = 30;
const HALF_PADDING = PADDING / 2;

// Arrow can go from top ot bottom of file icon
const getSourcePt = (groupName, sourcePosition) => ({
  x: sourcePosition.x + 11,
  y: [TOP_LEFT, TOP_RIGHT].includes(groupName) ? sourcePosition.y + 6 : sourcePosition.y - 6
});

const getSourceDotLinePoints = (groupName, sourcePt) => {
  const shiftY = [TOP_LEFT, TOP_RIGHT].includes(groupName) ? 1 : -1;
  return [
    [sourcePt.x - 2, sourcePt.y - shiftY],
    [sourcePt.x, sourcePt.y + shiftY],
    [sourcePt.x + 2, sourcePt.y - shiftY]
  ];
};

const getConnectionLine = (groupName, targetPosition, sourcePosition, sourcePt) => {
  const yDiff = targetPosition.y - sourcePosition.y;
  const vPadding = Math.abs(yDiff) <= V_SPACE ? V_SPACE / 2 : V_SPACE / 2; //TODO

  const direction = [TOP_LEFT, TOP_RIGHT].includes(groupName) ? 1 : -1;
  return [
    [sourcePt.x, sourcePt.y],
    [sourcePt.x, targetPosition.y - vPadding * direction],
    [targetPosition.x + 2, targetPosition.y - vPadding * direction],
    [targetPosition.x + 2, targetPosition.y - 5 * direction]
  ];
};

const getConnectionLineToFirstSource = (
  groupName,
  targetPosition,
  firstSourcePosition,
  sourcePosition,
  sourcePt
) => {
  const directionY = [TOP_LEFT, TOP_RIGHT].includes(groupName) ? 1 : -1;
  let directionLeft = [TOP_LEFT, BOTTOM_LEFT].includes(groupName);

  return [
    [sourcePt.x, sourcePt.y],
    [sourcePt.x, sourcePosition.y + (V_SPACE / 2) * directionY],
    [
      firstSourcePosition.x + (directionLeft ? V_SPACE : -PADDING / 2),
      sourcePosition.y + (V_SPACE / 2) * directionY
    ],
    [
      firstSourcePosition.x + (directionLeft ? V_SPACE : -PADDING / 2),
      targetPosition.y - (V_SPACE / 2) * directionY
    ]
  ];
};

export const DependenciesEdge = props => {
  const {
    groupName,
    targetPosition,
    sourcePosition,
    firstSourcePosition,
    onClick = () => console.log('on dependencies edge')
  } = props;

  //TODO: replace groupName with direction boolean if no need for sides
  const sourcePt = getSourcePt(groupName, sourcePosition);
  const sourceDotLinePoints = getSourceDotLinePoints(groupName, sourcePt);
  const connectionLinePoints = !firstSourcePosition
    ? getConnectionLine(groupName, targetPosition, sourcePosition, sourcePt)
    : getConnectionLineToFirstSource(
        groupName,
        targetPosition,
        firstSourcePosition,
        sourcePosition,
        sourcePt
      );

  if (!connectionLinePoints) {
    return null;
  }

  const lastPt = connectionLinePoints[connectionLinePoints.length - 1];
  const endPointConfig = {
    x: lastPt[0],
    y: lastPt[1]
  };

  if (!firstSourcePosition) {
    const directionTop = [TOP_LEFT, TOP_RIGHT].includes(groupName);

    endPointConfig.x -= 3;
    endPointConfig.y -= directionTop ? 6 : 1;
    endPointConfig.iconSize = 7;
    endPointConfig.iconPath = 'resources/right-arrow.svg'; // TODO: move to getter
    endPointConfig.angle = directionTop ? 90 : -90;
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
      {firstSourcePosition ? (
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
          transform={`rotate(${endPointConfig.angle} ${endPointConfig.x +
            endPointConfig.iconSize / 2} ${endPointConfig.y + endPointConfig.iconSize / 2})`}
        />
      )}
    </React.Fragment>
  );
};
