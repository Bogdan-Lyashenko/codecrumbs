export const buildShiftToPoint = shift => (x, y) => ({
  x: Math.round(shift.x + x),
  y: Math.round(shift.y + y)
});
