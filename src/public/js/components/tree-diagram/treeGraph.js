import { getCurvedPath } from '../../utils/svgPrimitives';
//TODO: move numbers to config per function
//create object instead
export const drawDot = (draw, shiftToCenterPoint, x, y, color = '#BFBFBF') => {
    const radius = 5;
    const halfRadius = radius / 2;
    const circlePoint = shiftToCenterPoint(x - halfRadius, y - halfRadius);

    draw
        .circle(radius)
        .fill(color)
        .move(circlePoint.x, circlePoint.y);
};

export const drawSourceEdge = (draw, shiftToCenterPoint, nX, nY, pX, pY) => {
    const edgeTurnDistance = 15;

    const P1 = shiftToCenterPoint(pX, pY);
    const P2 = shiftToCenterPoint(nX - edgeTurnDistance, pY);
    const P3 = shiftToCenterPoint(nX - edgeTurnDistance, nY);
    const P4 = shiftToCenterPoint(nX, nY);

    const polyline = draw.polyline([
        [P1.x, P1.y],
        [P2.x, P2.y],
        [P3.x, P3.y],
        [P4.x, P4.y]
    ]);

    polyline.fill('none').stroke({
        color: '#BFBFBF'
    });
};

export const drawFileText = (
    draw,
    shiftToCenterPoint,
    nX,
    nY,
    fileText = ''
) => {
    const text = draw.text(fileText);
    text.font({ fill: '#333', family: 'Menlo' });

    const fileTextPointShiftX = 16;
    const fileTextPointShiftY = 8;
    const fileTextPoint = shiftToCenterPoint(
        nX + fileTextPointShiftX,
        nY - fileTextPointShiftY
    );

    text.move(fileTextPoint.x, fileTextPoint.y);
};

export const drawFileIcon = (draw, shiftToCenterPoint, nX, nY) => {
    const fileIconPath = 'resources/js-file-format-symbol.svg';
    const fileIconSize = 15;
    const fileIconPointShiftX = 2;
    const fileIconPointShiftY = 6;
    const fileIconPoint = shiftToCenterPoint(
        nX + fileIconPointShiftX,
        nY - fileIconPointShiftY
    );

    draw
        .image(fileIconPath, fileIconSize, fileIconSize)
        .move(fileIconPoint.x, fileIconPoint.y);
};

export const drawFolderText = (
    draw,
    shiftToCenterPoint,
    nX,
    nY,
    folderText = ''
) => {
    const folderTextPointShiftX = 20;
    const folderTextPointShiftY = 17;

    const folderTextPoint = shiftToCenterPoint(
        nX + folderTextPointShiftX,
        nY - folderTextPointShiftY
    );

    //TODO: add the same for file text
    const textSize = folderText.length * 8.4;
    const rect = draw
        .rect(textSize, 13)
        .fill('#fff')
        .opacity(0.8);
    rect.move(folderTextPoint.x, folderTextPoint.y + 2);

    const text = draw.text(folderText);
    text.font({ fill: '#333', family: 'Menlo' });

    text.move(folderTextPoint.x, folderTextPoint.y);
};

export const drawFolderIcon = (draw, shiftToCenterPoint, nX, nY) => {
    const folderIconPath = 'resources/folder-2.svg';
    const folderIconSize = 16;
    const folderIconPointShiftX = 3;
    const folderIconPointShiftY = 17;
    const folderIconPoint = shiftToCenterPoint(
        nX + folderIconPointShiftX,
        nY - folderIconPointShiftY
    );

    draw
        .image(folderIconPath, folderIconSize, folderIconSize)
        .move(folderIconPoint.x, folderIconPoint.y);
};

/* Dependencies graph */
export const drawDependenciesEdge = (
    draw,
    shiftToCenterPoint,
    sX,
    sY,
    tX,
    tY
) => {
    const sourcePt = shiftToCenterPoint(sX, sY);
    const targetPt = shiftToCenterPoint(tX, tY);

    //calculate this based on dots positions
    const midPoint = {
        x: Math.abs(sourcePt.x - targetPt.x) / 2 + targetPt.x,
        y: Math.abs(sourcePt.y - targetPt.y) / 2 + targetPt.y - 40
    };

    const path = draw.path(
        `M${sourcePt.x} ${sourcePt.y} Q ${midPoint.x} ${midPoint.y}  ${
            targetPt.x
        } ${targetPt.y}`
    );

    path.fill('none').stroke({
        color: '#f06' //#1890ff'
    });

    //add arrow instead
    drawDot(draw, shiftToCenterPoint, tX + 1, tY, '#f06');
};
