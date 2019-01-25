export const calculateLayoutSize = (list, padding = 80) => {
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

  list.each(node => {
    const [nX, nY] = [node.y, node.x];

    if (nX < minX) {
      minX = nX;
    }

    if (nY < minY) {
      minY = nY;
    }

    if (nX > maxX) {
      maxX = nX;
    }

    if (nY > maxY) {
      maxY = nY;
    }
  });

  const width = Math.round(Math.abs(maxX) + Math.abs(minX) + 3 * padding),
    height = Math.round(Math.abs(maxY) + Math.abs(minY) + 2 * padding);

  return {
    width,
    height,
    xShift: padding / 2,
    yShift: Math.round(Math.abs(minY)) + padding,
    bounds: {
      left: -width + padding,
      top: -height + padding,
      right: window.innerWidth + width - padding,
      bottom: window.innerHeight + height - padding
    }
  };
};

export const buildShiftToPoint = shift => (x, y) => ({
  x: Math.round(shift.x + x),
  y: Math.round(shift.y + y)
});
