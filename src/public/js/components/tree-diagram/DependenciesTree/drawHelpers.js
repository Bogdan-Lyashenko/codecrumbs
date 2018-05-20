import { getCurvedPath } from '../../../utils/svgPrimitives';
import { BLUE_COLOR, PURPLE_COLOR } from '../colors';
//TODO: move numbers to config per function

const COLOR = BLUE_COLOR;

export const drawDependenciesEdge = (
    draw,
    shiftToCenterPoint,
    { source, target, prevSource }
) => {
    const padding = 20;
    const halfPadding = padding / 2;

    const sourcePt = shiftToCenterPoint(
        target.y > source.y ? source.x + 10 : source.x + 8,
        target.y > source.y ? source.y + 11 : source.y - 8
    );
    drawSourceDotLine(draw, sourcePt);

    if (!prevSource) {
        const targetPt = shiftToCenterPoint(target.x, target.y);

        const P1 = { x: sourcePt.x, y: targetPt.y + padding };
        const P2 = { x: targetPt.x - halfPadding, y: targetPt.y + padding };
        const P3 = { x: targetPt.x - halfPadding, y: targetPt.y };

        drawConnectionLine(draw, [
            [sourcePt.x, sourcePt.y],
            [P1.x, P1.y],
            [P2.x, P2.y],
            [P3.x, P3.y],
            [targetPt.x, targetPt.y]
        ]);

        drawArrow(draw, shiftToCenterPoint, target.x, target.y + 6);
    } else {
        if (prevSource.x < sourcePt.x) { //TODO: handle other cases
            const prevSourcePt = shiftToCenterPoint(prevSource.x, prevSource.y);

            const P1 = { x: sourcePt.x, y: sourcePt.y + halfPadding };
            const P2 = {
                x: prevSourcePt.x + halfPadding,
                y: sourcePt.y + halfPadding
            };

            drawConnectionLine(draw, [
                [sourcePt.x, sourcePt.y],
                [P1.x, P1.y],
                [P2.x, P2.y]
            ]);

            drawDot(draw, P2)
        }
    }
};

export const drawDot = (draw, { x, y }) => {
    const radius = 4;
    const halfRadius = radius / 2;

    draw
        .circle(radius)
        .fill(BLUE_COLOR)
        .move(x - halfRadius, y - halfRadius);
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
    const fileIconPath = 'resources/right-arrow.svg';
    const fileIconSize = 7;
    const fileIconPointShiftX = -4;
    const fileIconPointShiftY = 9.5;
    const fileIconPoint = shiftToCenterPoint(
        nX + fileIconPointShiftX,
        nY - fileIconPointShiftY
    );

    draw
        .rect(5, 6)
        .fill('#fff')
        .move(fileIconPoint.x + 2, fileIconPoint.y);

    draw
        .image(fileIconPath, fileIconSize, fileIconSize)
        .move(fileIconPoint.x, fileIconPoint.y);
};
