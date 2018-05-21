import { PURPLE_COLOR, SYMBOL_WIDTH } from '../constants';

export const drawCodeCrumbEdge = (
    draw,
    shiftToCenterPoint,
    { target, source, parentName }
) => {
    const nameWidth = SYMBOL_WIDTH * parentName.length;
    const padding = 40;
    const edgeTurnDistance = 20;

    const P1 = shiftToCenterPoint(source.x + nameWidth + padding, source.y);

    const P2 = shiftToCenterPoint(target.x - edgeTurnDistance, source.y);
    const P3 = shiftToCenterPoint(target.x - edgeTurnDistance, target.y);
    const P4 = shiftToCenterPoint(target.x, target.y);

    const polyline = draw.polyline([
        [P1.x, P1.y],
        [P2.x, P2.y],
        [P3.x, P3.y],
        [P4.x, P4.y]
    ]);

    polyline.fill('none').stroke({
        color: PURPLE_COLOR
    });
};

export const drawPartEdge = (
    draw,
    shiftToCenterPoint,
    { source, parentName }
) => {
    const nameWidth = SYMBOL_WIDTH * parentName.length;
    const padding = 18;

    const P1 = shiftToCenterPoint(source.x + nameWidth + padding, source.y);
    const P2 = { x: P1.x + padding + 4, y: P1.y };

    const polyline = draw.polyline([[P1.x, P1.y], [P2.x, P2.y]]);

    polyline.fill('none').stroke({
        color: PURPLE_COLOR
    });

    draw.line(P1.x, P1.y - 2, P1.x, P1.y + 2).stroke({ color: PURPLE_COLOR });
};

export const drawCodeCrumbText = (
    draw,
    shiftToCenterPoint,
    { x, y, name = '' }
) => {
    const text = draw.text(name);
    text.font({ fill: '#595959', family: 'Menlo' });

    const textPointShiftX = 3;
    const textPointShiftY = 8;
    const textPoint = shiftToCenterPoint(x, y);

    text.move(textPoint.x + textPointShiftX, textPoint.y - textPointShiftY);

    draw
        .circle(4)
        .fill(PURPLE_COLOR)
        .move(textPoint.x - 2, textPoint.y - 2);
};
