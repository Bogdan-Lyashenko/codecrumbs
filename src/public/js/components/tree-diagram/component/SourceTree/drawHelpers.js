import { getCurvedPath } from '../../../../utils/svgPrimitives';
import { BLUE_COLOR, PURPLE_COLOR, SYMBOL_WIDTH } from '../../store/constants';

//TODO: move numbers to config per function
//create object instead
const ICONS_DIR = 'resources/';

export const drawDot = (
    draw,
    shiftToCenterPoint,
    { x, y, disabled, highlighted }
) => {
    const radius = 5;
    const halfRadius = radius / 2;
    const circlePoint = shiftToCenterPoint(x - halfRadius, y - halfRadius);

    let color = '#BFBFBF';
    if (disabled) {
        color = '#ccc';
    }
    if (highlighted) {
        color = BLUE_COLOR;
    }

    return draw
        .circle(radius)
        .fill(color)
        .move(circlePoint.x, circlePoint.y);
};

export const drawSourceEdge = (
    draw,
    shiftToCenterPoint,
    { target, source, disabled, singleChild }
) => {
    const edgeTurnDistance = 20;

    const START_PT = shiftToCenterPoint(source.x, source.y);
    const P2 = shiftToCenterPoint(target.x - edgeTurnDistance, source.y);
    const P3 = shiftToCenterPoint(target.x - edgeTurnDistance, target.y);
    const END_PT = shiftToCenterPoint(target.x, target.y);

    const points = singleChild
        ? [[START_PT.x, START_PT.y], [END_PT.x, END_PT.y]]
        : [
              [START_PT.x, START_PT.y],
              [P2.x, P2.y],
              [P3.x, P3.y],
              [END_PT.x, END_PT.y]
          ];

    const polyline = draw.polyline(points);

    const color = !disabled ? '#BFBFBF' : '#ccc';
    polyline.fill('none').stroke({
        color
    });

    return polyline;
};

export const drawFileText = (
    draw,
    shiftToCenterPoint,
    { x, y, purple, name = '' }
) => {
    const text = draw.text(name);
    text.font({ fill: purple ? PURPLE_COLOR : '#595959', family: 'Menlo' });

    const fileTextPointShiftX = 16;
    const fileTextPointShiftY = 8;
    const fileTextPoint = shiftToCenterPoint(
        x + fileTextPointShiftX,
        y - fileTextPointShiftY
    );
    text.move(fileTextPoint.x, fileTextPoint.y);

    return text;
};

export const drawFileIcon = (
    draw,
    shiftToCenterPoint,
    { x, y, purple, onClick }
) => {
    const fileIconPath =
        ICONS_DIR + (purple ? 'js-file-purple.svg' : 'js-file.svg');
    const fileIconSize = 15;
    const fileIconPointShiftX = 2;
    const fileIconPointShiftY = 10;
    const fileIconPoint = shiftToCenterPoint(
        x + fileIconPointShiftX,
        y - fileIconPointShiftY
    );

    const icon = draw
        .image(fileIconPath, fileIconSize, fileIconSize)
        .move(fileIconPoint.x, fileIconPoint.y);

    if (onClick) {
        icon.style({ cursor: 'pointer' }).on('click', onClick);
    }

    return icon;
};

export const drawFolderText = (
    draw,
    shiftToCenterPoint,
    { x, y, name = '', disabled }
) => {
    const folderTextPointShiftX = 20;
    const folderTextPointShiftY = 16;

    const folderTextPoint = shiftToCenterPoint(
        x + folderTextPointShiftX,
        y - folderTextPointShiftY
    );

    const fill = !disabled ? '#595959' : '#A9A8A8';
    const text = draw.text(name);

    text.font({ fill, family: 'Menlo' });
    text.move(folderTextPoint.x, folderTextPoint.y);

    return text;
};

export const drawFolderIcon = (
    draw,
    shiftToCenterPoint,
    { x, y, disabled, closed, onClick }
) => {
    const folderIconPath = `${ICONS_DIR}${closed ? 'closed-' : ''}folder${
        disabled ? '-disabled' : ''
    }.svg`;

    const folderIconSize = closed ? 14 : 15;
    const folderIconPointShiftX = closed ? 3 : 3;
    const folderIconPointShiftY = closed ? 16 : 17;
    const folderIconPoint = shiftToCenterPoint(
        x + folderIconPointShiftX,
        y - folderIconPointShiftY
    );

    let polyline = null;
    if (closed) {
        polyline = draw.polyline([
            folderIconPoint.x - 1,
            folderIconPoint.y + 16,
            folderIconPoint.x + 15,
            folderIconPoint.y + 16
        ]);

        const color = !disabled ? '#BFBFBF' : '#ccc';
        polyline.fill('none').stroke({
            color
        });
    }

    const icon = draw
        .image(folderIconPath, folderIconSize, folderIconSize)
        .move(folderIconPoint.x, folderIconPoint.y);

    if (onClick) {
        icon.style({ cursor: 'pointer' }).on('click', onClick);
    }

    if (!polyline) return icon;

    return [icon, polyline];
};
