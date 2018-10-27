import React from 'react';
import './index.scss';

import { Dot } from 'components/treeDiagram/component/Dot/';
import { LAYOUT_CONFIG, DepEdgeGroups } from 'components/treeDiagram/store/constants';
import classNames from 'classnames';
const { TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT } = DepEdgeGroups;

const V_SPACE = LAYOUT_CONFIG.spacing + LAYOUT_CONFIG.nodeSizeX;

const PADDING = 30;
const HALF_PADDING = PADDING / 2;
const crossShift = 2;
const ICONS_DIR = 'resources/';

// Arrow can go from top ot bottom of file icon
const getSourcePt = (groupName, sourcePosition, targetPt) => {
  const topDirection =
    sourcePosition.y !== targetPt.y ? [TOP_LEFT, TOP_RIGHT].includes(groupName) : true;

  return {
    x: sourcePosition.x + 11,
    y: topDirection ? sourcePosition.y + 6 : sourcePosition.y - 6
  };
};

const getSourceDotLinePoints = (groupName, sourcePt, sourcePosition, targetPosition) => {
  const shiftY =
    sourcePosition.y !== targetPosition.y
      ? [TOP_LEFT, TOP_RIGHT].includes(groupName)
        ? 1
        : -1
      : 1;

  return [
    [sourcePt.x - 2, sourcePt.y - shiftY],
    [sourcePt.x, sourcePt.y + shiftY],
    [sourcePt.x + 2, sourcePt.y - shiftY]
  ];
};

const getConnectionLine = (groupName, targetPosition, sourcePosition, sourcePt) => {
  const direction = [TOP_LEFT, TOP_RIGHT].includes(groupName) ? 1 : -1;
  const vPadding = (V_SPACE / 2 - crossShift) * direction;

  const siblingNodesDistance = 40;
  if (Math.abs(sourcePt.y - targetPosition.y) < siblingNodesDistance) {
    return [
      [sourcePt.x, sourcePt.y],
      [sourcePt.x, targetPosition.y - vPadding],
      [targetPosition.x + 2, targetPosition.y - vPadding],
      [targetPosition.x + 2, targetPosition.y - 5 * direction]
    ];
  }

  const workAroundXShift = 7;
  return [
    [sourcePt.x, sourcePt.y],
    [sourcePt.x, sourcePt.y + vPadding],

    [targetPosition.x - workAroundXShift, sourcePt.y + vPadding],
    [targetPosition.x - workAroundXShift, targetPosition.y - vPadding],

    [targetPosition.x + 2, targetPosition.y - vPadding],
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
  const vPadding = (V_SPACE / 2) * directionY;

  const directionLeft = [TOP_LEFT, BOTTOM_LEFT].includes(groupName);
  return [
    [sourcePt.x, sourcePt.y],
    [sourcePt.x, sourcePosition.y + vPadding],
    [
      firstSourcePosition.x + 8 + (directionLeft ? V_SPACE : -HALF_PADDING),
      sourcePosition.y + vPadding
    ],
    [
      firstSourcePosition.x + 8 + (directionLeft ? V_SPACE : -HALF_PADDING),
      targetPosition.y - vPadding + crossShift * directionY
    ],
    [
      targetPosition.x + (directionLeft ? -1 : 1) * 2,
      targetPosition.y - vPadding + crossShift * directionY
    ]
  ];
};

export const DependenciesEdge = props => {
  const {
    groupName,
    targetPosition,
    sourcePosition,
    firstSourcePosition,
    selected,
    isAnyDependencyEdgesSelected,
    onClick
  } = props;

  //TODO: replace groupName with direction boolean if no need for sides
  const sourcePt = getSourcePt(groupName, sourcePosition, targetPosition);
  const sourceDotLinePoints = getSourceDotLinePoints(
    groupName,
    sourcePt,
    sourcePosition,
    targetPosition
  );
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

  return (
    <React.Fragment>
      <polyline
        points={sourceDotLinePoints.join(', ')}
        className={classNames('DependenciesEdge', {
          Animation: !isAnyDependencyEdgesSelected,
          'DependenciesEdge-selected': selected
        })}
      />
      <polyline
        points={connectionLinePoints.join(', ')}
        className={classNames('DependenciesEdge', {
          Animation: !isAnyDependencyEdgesSelected,
          'DependenciesEdge-selected': selected
        })}
      />
      <polyline
        onClick={onClick}
        points={connectionLinePoints.join(', ')}
        className={'EdgeMouseHandler'}
      />
      {getLineEndIcon({
        lastPt: connectionLinePoints[connectionLinePoints.length - 1],
        groupName,
        isArrow: !firstSourcePosition,
        selected
      })}
    </React.Fragment>
  );
};

const getOverlappingConnectionLine = (groupName, targetPosition, sourcePosition) => {
  const directionY = [TOP_LEFT, TOP_RIGHT].includes(groupName) ? 1 : -1;
  const xShift = [TOP_LEFT, BOTTOM_LEFT].includes(groupName) ? 0 : -7;

  return [
    [
      sourcePosition.x + xShift,
      targetPosition.y - (V_SPACE / 2) * directionY + crossShift * directionY
    ],
    [targetPosition.x + 2, targetPosition.y - (V_SPACE / 2 - crossShift) * directionY],
    [targetPosition.x + 2, targetPosition.y - 5 * directionY]
  ];
};

export const DependenciesOverlappingEdge = props => {
  const { groupName, targetPosition, sourcePosition, selected, onClick } = props;

  const sourcePt = getSourcePt(groupName, sourcePosition, targetPosition);
  const connectionLinePoints = getOverlappingConnectionLine(
    groupName,
    targetPosition,
    sourcePosition,
    sourcePt
  );

  if (!connectionLinePoints) {
    return null;
  }

  return (
    <React.Fragment>
      <polyline
        points={connectionLinePoints.join(', ')}
        className={classNames('DependenciesEdge', 'Animation', {
          'DependenciesEdge-selected': selected
        })}
      />
      <polyline
        onClick={onClick}
        points={connectionLinePoints.join(', ')}
        className={'EdgeMouseHandler'}
      />
      {getLineEndIcon({
        lastPt: connectionLinePoints[connectionLinePoints.length - 1],
        groupName,
        isArrow: true,
        selected
      })}
    </React.Fragment>
  );
};

export const getLineEndIcon = ({ lastPt, groupName, isArrow, selected }) => {
  const endPointConfig = {
    x: lastPt[0],
    y: lastPt[1]
  };

  if (isArrow) {
    const directionTop = [TOP_LEFT, TOP_RIGHT].includes(groupName);

    endPointConfig.x -= 3;
    endPointConfig.y -= directionTop ? 6 : 1;
    endPointConfig.iconSize = 7;
    endPointConfig.iconPath = `${ICONS_DIR}arrow/${selected ? 'selected-' : ''}arrow.svg`; // TODO: move to getter
    endPointConfig.angle = directionTop ? 90 : -90;
  }

  return (
    <React.Fragment>
      {isArrow ? (
        <image
          x={endPointConfig.x}
          y={endPointConfig.y}
          xlinkHref={endPointConfig.iconPath}
          height={endPointConfig.iconSize}
          width={endPointConfig.iconSize}
          className={'Animation'}
          transform={`rotate(${endPointConfig.angle} ${endPointConfig.x +
            endPointConfig.iconSize / 2} ${endPointConfig.y + endPointConfig.iconSize / 2})`}
        />
      ) : null}
    </React.Fragment>
  );
};
