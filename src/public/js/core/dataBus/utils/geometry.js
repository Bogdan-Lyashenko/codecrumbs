import { CC_NODE_TYPE } from '../../constants';

export const calculateLayoutProps = (list, padding = 120) => {
  if (!list) {
    return {
      width: 0,
      height: 0
    };
  }

  let minX = 0,
    minY = 0,
    maxX = 0,
    maxY = 0;

  let ccAlightPoint = 0;
  let maxCcWidth = 0;

  list.each(node => {
    const [x, y] = [node.y, node.x];
    const [xSize, ySize] = [node.ySize, node.xSize];

    // calc cc vertical line
    if (node.data.type === CC_NODE_TYPE) {
      if (xSize > maxCcWidth) {
        maxCcWidth = xSize;
      }
    } else {
      if (x + xSize > ccAlightPoint) {
        ccAlightPoint = x + xSize;
      }
    }

    if (x < minX) {
      minX = x;
    }

    if (y - ySize / 2 < minY) {
      minY = y - ySize / 2;
    }

    if (x + xSize > maxX) {
      maxX = x + xSize;
    }

    if (y + ySize / 2 > maxY) {
      maxY = y + ySize / 2;
    }
  });

  return {
    width: Math.round(Math.abs(maxX + maxCcWidth) + Math.abs(minX) + 2 * padding),
    height: Math.round(Math.abs(maxY) + Math.abs(minY) + 2 * padding),
    xShift: padding / 4,
    yShift: Math.abs(Math.round(minY)) > 2 * padding ? Math.abs(Math.round(minY)) : 2 * padding,
    ccAlightPoint
  };
};

export const buildShiftToPoint = shift => (x, y) => ({
  x: Math.round(shift.x + x),
  y: Math.round(shift.y + y)
});
