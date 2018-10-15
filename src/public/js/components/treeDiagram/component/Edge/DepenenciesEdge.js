import React from 'react';
import './index.scss';

import { LAYOUT_CONFIG, DepEdgeGroups } from 'components/treeDiagram/store/constants';
import classNames from 'classnames';
const { TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT } = DepEdgeGroups;

const V_SPACE = LAYOUT_CONFIG.spacing + LAYOUT_CONFIG.nodeSizeX;

const PADDING = 30;
const HALF_PADDING = PADDING / 2;
const crossShift = 2;
const ICONS_DIR = 'resources/';

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
  const direction = [TOP_LEFT, TOP_RIGHT].includes(groupName) ? 1 : -1;
  const vPadding = (V_SPACE / 2 - crossShift) * direction;

  return [
    [sourcePt.x, sourcePt.y],
    [sourcePt.x, targetPosition.y - vPadding],
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
      firstSourcePosition.x + (directionLeft ? V_SPACE : -HALF_PADDING),
      sourcePosition.y + vPadding
    ],
    [
      firstSourcePosition.x + (directionLeft ? V_SPACE : -HALF_PADDING),
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
  const directionLeft = [TOP_LEFT, BOTTOM_LEFT].includes(groupName);

  return [
    [
      sourcePosition.x + (directionLeft ? V_SPACE : -HALF_PADDING),
      targetPosition.y - (V_SPACE / 2) * directionY + crossShift * directionY
    ],
    [targetPosition.x + 2, targetPosition.y - (V_SPACE / 2 - crossShift) * directionY],
    [targetPosition.x + 2, targetPosition.y - 5 * directionY]
  ];
};

export const DependenciesOverlappingEdge = props => {
  const { groupName, targetPosition, sourcePosition, selected, onClick } = props;

  const sourcePt = getSourcePt(groupName, sourcePosition);
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

    endPointConfig.x -= 3.5;
    endPointConfig.y -= directionTop ? 6 : 1;
    endPointConfig.iconSize = 7;
    endPointConfig.iconPath = `${ICONS_DIR}${selected ? 'selected-' : ''}arrow.svg`; // TODO: move to getter
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
      ) : (
        <circle
          className={classNames('DependenciesEdge-end-dot', 'Animation', {
            'DependenciesEdge-end-dot-selected': selected
          })}
          r={2}
          cx={endPointConfig.x}
          cy={endPointConfig.y}
        />
      )}
    </React.Fragment>
  );
};
