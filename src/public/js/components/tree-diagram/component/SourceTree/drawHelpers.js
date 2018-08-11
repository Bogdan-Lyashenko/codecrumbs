import { BLUE_COLOR, PURPLE_COLOR, SYMBOL_WIDTH } from '../../store/constants';

//TODO: move numbers to config per function
//create object instead
const ICONS_DIR = 'resources/';

export const drawFileText = (draw, shiftToCenterPoint, { x, y, purple, name = '', onClick }) => {
  const text = draw.text(name);
  text.font({ fill: purple ? PURPLE_COLOR : '#595959', family: 'Menlo' });

  const fileTextPointShiftX = 16;
  const fileTextPointShiftY = 8;
  const fileTextPoint = shiftToCenterPoint(x + fileTextPointShiftX, y - fileTextPointShiftY);
  text.move(fileTextPoint.x, fileTextPoint.y);

  if (onClick) {
    text.style({ cursor: 'pointer' }).on('click', onClick);
  }

  return text;
};

export const drawFileIcon = (draw, shiftToCenterPoint, { x, y, purple, onClick }) => {
  const fileIconPath = ICONS_DIR + (purple ? 'js-file-purple.svg' : 'js-file.svg');
  const fileIconSize = 15;
  const fileIconPointShiftX = 2;
  const fileIconPointShiftY = 10;
  const fileIconPoint = shiftToCenterPoint(x + fileIconPointShiftX, y - fileIconPointShiftY);

  const icon = draw
    .image(fileIconPath, fileIconSize, fileIconSize)
    .move(fileIconPoint.x, fileIconPoint.y);

  if (onClick) {
    icon.style({ cursor: 'pointer' }).on('click', onClick);
  }

  return icon;
};
