//TODO: move numbers to config per function
export const drawDot = (draw, shiftToCenterPoint, x, y) => {
    const radius = 5;
    const halfRadius = radius / 2;
    const circlePoint = shiftToCenterPoint(x - halfRadius, y - halfRadius);

    draw
        .circle(radius)
        .fill('#ccc')
        .move(circlePoint.x, circlePoint.y);
};

export const drawEdge = (draw, shiftToCenterPoint, nX, nY, pX, pY) => {
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
        color: '#ccc'
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

    const fileTextPointShiftX = 18;
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
    const fileIconPointShiftX = 3;
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
    const text = draw.text(folderText);
    text.font({ fill: '#333', family: 'Menlo' });

    const folderTextPointShiftX = 19;
    const folderTextPointShiftY = 17;
    const folderTextPoint = shiftToCenterPoint(
        nX + folderTextPointShiftX,
        nY - folderTextPointShiftY
    );

    text.move(folderTextPoint.x, folderTextPoint.y);
};

export const drawFolderIcon = (draw, shiftToCenterPoint, nX, nY) => {
    const folderIconPath = 'resources/folder.svg';
    const folderIconSize = 15;
    const folderIconPointShiftX = 3;
    const folderIconPointShiftY = 16;
    const folderIconPoint = shiftToCenterPoint(
        nX + folderIconPointShiftX,
        nY - folderIconPointShiftY
    );

    draw
        .image(folderIconPath, folderIconSize, folderIconSize)
        .move(folderIconPoint.x, folderIconPoint.y);
};
