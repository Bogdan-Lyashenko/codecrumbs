import { getCurvedPath } from '../../../utils/svgPrimitives';
import { BLUE_COLOR, PURPLE_COLOR } from '../colors';
//TODO: move numbers to config per function

const COLOR = BLUE_COLOR;

export const drawDependenciesEdge = (
    draw,
    shiftToCenterPoint,
    sX,
    sY,
    tX,
    tY
) => {
    const sourcePt = shiftToCenterPoint(
        tY > sY ? sX + 10 : sX + 8,
        tY > sY ? sY + 11 : sY - 8
    );
    const targetPt = shiftToCenterPoint(tX, tY);
    const padding = 20;

    const P1 = { x: sourcePt.x, y: targetPt.y + padding };
    const P2 = { x: targetPt.x, y: targetPt.y + padding };

    drawConnectionLine(draw, [
        [sourcePt.x, sourcePt.y],
        [P1.x, P1.y],
        [P2.x, P2.y],
        [targetPt.x, targetPt.y]
    ]);

    drawArrow(draw, shiftToCenterPoint, tX, tY + 6);
    drawSourceDotLine(draw, sourcePt);
};

const drawConnectionLine = (draw, points) => {
    const polyline = draw.polyline(points);

    polyline.fill('none').stroke({
        color: COLOR
    });
};

const drawSourceDotLine = (draw, { x, y }) => {
    draw.line(x - 3, y, x + 3, y).stroke({ width: 1, color: COLOR });
};

const drawArrow = (draw, shiftToCenterPoint, nX, nY) => {
    const fileIconPath = 'resources/up-arrow.svg';
    const fileIconSize = 6;
    const fileIconPointShiftX = -3;
    const fileIconPointShiftY = 3;
    const fileIconPoint = shiftToCenterPoint(
        nX + fileIconPointShiftX,
        nY - fileIconPointShiftY
    );

    draw
        .image(fileIconPath, fileIconSize, fileIconSize)
        .move(fileIconPoint.x, fileIconPoint.y);
};
