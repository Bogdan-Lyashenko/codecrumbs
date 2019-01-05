import React from 'react';
import classNames from 'classnames';

import { SYMBOL_WIDTH } from 'components/treeDiagram/store/constants';
import FileIcon from 'components/treeDiagram/component/Icons/File';
import DepCirclesIcon from 'components/treeDiagram/component/Icons/DepCircles';
import './index.scss';

export const FileName = props => {
  const {
    position,
    name,
    path,
    onNodeClick,
    codeCrumbs,
    purple,
    selected,
    dependency,
    dependencyImportedOnly
  } = props;

  const iconSize = 15;
  const nameWidth = name.length * SYMBOL_WIDTH;

  const icon = !dependency ? (
    <FileIcon x={position.x + 2} y={position.y - 10} height={iconSize} width={iconSize} />
  ) : (
    <DepCirclesIcon
      x={position.x}
      y={position.y - 7.5}
      height={iconSize}
      width={iconSize}
      fill={selected ? '#754BC3' : '#1890ff'}
    />
  );

  return (
    <g className={'FileNode'} onClick={onNodeClick}>
      {((dependency || codeCrumbs) && (
        <React.Fragment>
          <rect
            x={position.x + 3}
            y={position.y - 3}
            width={16}
            height={5}
            className={'NodeText-cover'}
          />
          <rect
            x={position.x + 16}
            y={position.y - 8}
            width={nameWidth}
            height={16}
            className={'NodeText-cover'}
          />
        </React.Fragment>
      )) ||
        null}
      {icon}
      {dependency &&
        dependencyImportedOnly && (
          <circle
            cx={position.x + 2.5}
            cy={position.y}
            r={2.5}
            className={'NodeText-file-dependencyImportedOnly'}
          />
        )}
      <g>
        <title>{path}</title>
        <text
          x={position.x + 16}
          y={position.y + 5}
          className={classNames('NodeText-file-name', {
            'NodeText-file-name-purple': purple,
            'NodeText-file-name-selected': dependency && selected && !purple
          })}
        >
          {name}
        </text>
      </g>
    </g>
  );
};
