import React from 'react';

import './index.scss';
import { SYMBOL_WIDTH } from 'components/treeDiagram/store/constants';

const ICONS_DIR = 'resources/';

export const PartEdge = props => {
  const { sourcePosition, parentName } = props;

  const nameWidth = SYMBOL_WIDTH * parentName.length;
  const padding = 17;

  const P1 = { x: sourcePosition.x + nameWidth + padding, y: sourcePosition.y };
  const P2 = { x: P1.x + padding + 6, y: P1.y };

  const polylinePoints = [[P1.x, P1.y], [P2.x, P2.y]];

  return (
    <React.Fragment>
      <polyline
        points={polylinePoints.join(', ')}
        className={'CodeCrumbEdge'}
        strokeDasharray="2"
      />
      <line x1={P1.x} y1={P1.y - 2} x2={P1.x} y2={P1.y + 2} className={'CodeCrumbEdge'} />
    </React.Fragment>
  );
};

export const CodeCrumbEdge = props => {
  const { sourcePosition, targetPosition, parentName } = props;

  const nameWidth = SYMBOL_WIDTH * parentName.length;
  const padding = 40;
  const edgeTurnDistance = 20;

  const P1 = { x: sourcePosition.x + nameWidth + padding, y: sourcePosition.y };

  const P2 = { x: targetPosition.x - edgeTurnDistance, y: sourcePosition.y };
  const P3 = { x: targetPosition.x - edgeTurnDistance, y: targetPosition.y };
  const P4 = targetPosition;

  const polylinePoints = [[P1.x, P1.y], [P2.x, P2.y], [P3.x, P3.y], [P4.x, P4.y]];

  return (
    <polyline points={polylinePoints.join(', ')} className={'CodeCrumbEdge'} strokeDasharray="2" />
  );
};

export const CodeCrumbedFlowEdge = props => {
  const {
    sourcePosition,
    targetPosition,
    sourceName,
    singleCrumbSource,
    singleCrumbTarget,
    onClick = () => console.log('cc edge')
  } = props;

  const rHalf = 6.5;
  const sourcePt = {
    x: -1 - rHalf + (singleCrumbSource ? sourcePosition.x - 22 : sourcePosition.x),
    y: sourcePosition.y - rHalf
  };
  const targetPt = {
    x: -rHalf + (singleCrumbTarget ? targetPosition.x - 22 : targetPosition.x),
    y: targetPosition.y + rHalf
  };

  const padding = 19 - rHalf;
  const vTurn = 13.5;

  let polylinePoints = [];

  if (targetPt.y > sourcePt.y) {
    if (targetPt.x > sourcePt.x) {
      polylinePoints = [
        [sourcePt.x, sourcePt.y],
        [sourcePt.x, sourcePt.y - padding],
        [targetPt.x - 11, sourcePt.y - padding],
        [targetPt.x - 11, targetPt.y + vTurn],
        [targetPt.x, targetPt.y + vTurn],
        [targetPt.x, targetPt.y]
      ];
    } else {
      const nLength = sourceName.length < 10 ? sourceName.length * SYMBOL_WIDTH + 8 : 100;
      polylinePoints = [
        [sourcePt.x, sourcePt.y],
        [sourcePt.x, sourcePt.y - padding],
        [sourcePt.x + nLength, sourcePt.y - padding],
        [sourcePt.x + nLength, targetPt.y + vTurn],
        [targetPt.x, targetPt.y + vTurn],
        [targetPt.x, targetPt.y]
      ];
    }
  } else {
    if (Math.abs(sourcePt.x - targetPt.x) < 5 ) {
      polylinePoints = [
        [sourcePt.x, sourcePt.y],
        [targetPt.x, targetPt.y]
      ];
    } else {
      polylinePoints = [
        [sourcePt.x, sourcePt.y],
        [sourcePt.x, sourcePt.y - padding],
        [targetPt.x, sourcePt.y - padding],
        [targetPt.x, targetPt.y]
      ];
    }
  }

  const endPointConfig = {
    ...targetPt
  };

  endPointConfig.x -= 3.5;
  endPointConfig.y += 1;
  endPointConfig.iconSize = 7;
  endPointConfig.iconPath = `${ICONS_DIR}arrow/purple-arrow.svg`; // TODO: move to getter
  endPointConfig.angle = -90;

  return (
    <g className={'CodeCrumbEdge'}>
      <rect
        x={sourcePt.x - 1.5}
        y={sourcePt.y - 3}
        width={3}
        height={2}
        className={'CodeCrumbEdge-flow-source'}
      />
      <image
        x={endPointConfig.x}
        y={endPointConfig.y}
        xlinkHref={endPointConfig.iconPath}
        height={endPointConfig.iconSize}
        width={endPointConfig.iconSize}
        transform={`rotate(${endPointConfig.angle} ${endPointConfig.x +
          endPointConfig.iconSize / 2} ${endPointConfig.y + endPointConfig.iconSize / 2})`}
      />
      <polyline points={polylinePoints.join(', ')} className={'CodeCrumbEdge-flow'} />

      <polyline
        onClick={onClick}
        points={polylinePoints.join(', ')}
        className={'EdgeMouseHandler'}
      />
    </g>
  );
};
