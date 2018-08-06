export const buildShiftToPoint = shift => (x, y) => ({
  x: shift.x + x,
  y: shift.y + y
});
