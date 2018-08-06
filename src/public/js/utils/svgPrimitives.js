export const getCurvedPath = (points, theme) => {
  const pointStr = points
    .map((point, i) => {
      if (!i) return `M${point.x}, ${point.y}`;

      let previousPoint = points[i - 1];

      if (i <= 1) {
        return getLinePointStr(point, previousPoint, theme.curveTurnRadius);
      }

      return `Q${previousPoint.x} ${previousPoint.y}
                ${getArcEndPointStr(point, previousPoint, theme.curveTurnRadius)}
                ${getLinePointStr(point, previousPoint, 2 * theme.curveTurnRadius)}`;
    })
    .join(' ');

  return pointStr;
};

const getLinePointStr = (point, previousPoint, radius) => {
  if (point.x === previousPoint.x) {
    return `L${point.x} ${getShiftedByArcNextPointValue(point.y, previousPoint.y, radius)}`;
  }

  if (point.y === previousPoint.y) {
    return `L${getShiftedByArcNextPointValue(point.x, previousPoint.x, radius)} ${point.y} `;
  }
};

const getShiftedByArcNextPointValue = (pointValue, previousPointValue, radius) =>
  pointValue > previousPointValue ? pointValue - radius : pointValue + radius;

const getArcEndPointStr = (point, previousPoint, radius) => {
  if (point.x === previousPoint.x) {
    return `${previousPoint.x} ${getArcEndPointValue(point.y, previousPoint.y, radius)}`;
  }

  if (point.y === previousPoint.y) {
    return `${getArcEndPointValue(point.x, previousPoint.x, radius)} ${previousPoint.y}`;
  }
};

const getArcEndPointValue = (pointValue, previousPointValue, radius) =>
  pointValue > previousPointValue ? previousPointValue + radius : previousPointValue - radius;
