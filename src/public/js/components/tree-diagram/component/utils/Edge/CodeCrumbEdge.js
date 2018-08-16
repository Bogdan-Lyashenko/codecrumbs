import React from 'react';
import './index.css';

import { PURPLE_COLOR, SYMBOL_WIDTH } from '../../../store/constants';

export const PartEdge = props => {
  const { sourcePOistion: sourcePoistion, parentName } = props;

  const nameWidth = SYMBOL_WIDTH * parentName.length;
  const padding = 17;

  const P1 = { x: sourcePoistion.x + nameWidth + padding, y: sourcePoistion.y };
  const P2 = { x: P1.x + padding + 6, y: P1.y };

  const polylinePoints = [[P1.x, P1.y], [P2.x, P2.y]];

  return (
    <React.Fragment>
      <polyline points={polylinePoints.join(', ')} className={'CodeCrumbEdge'} />
      <line x1={P1.x} y1={P1.y - 2} x2={P1.x} y2={P1.y + 2} className={'CodeCrumbEdge'} />
    </React.Fragment>
  );
};
