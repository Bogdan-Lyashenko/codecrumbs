import React from 'react';
import classNames from 'classnames';

import { SYMBOL_WIDTH, NODE_NAME_X_SHIFT } from '../constants';

import FileIcon from '../Icons/language/File';
import CppFileIcon from '../Icons/language/CppFile';
import JavaScriptFileIcon from '../Icons/language/JavaScriptFile';
import PythonFileIcon from '../Icons/language/PythonFile';

import DepCirclesIcon from '../Icons/DepCircles';
import './index.scss';

const getFileIcon = ({ position, iconSize, language }) => {
  switch (language) {
    case 'cpp':
      return (
        <CppFileIcon
          x={position.x + 2}
          y={position.y - 10}
          height={iconSize + 1}
          width={iconSize + 1}
        />
      );

    case 'javascript':
      return (
        <JavaScriptFileIcon
          x={position.x + 2}
          y={position.y - 10}
          height={iconSize}
          width={iconSize}
        />
      );

    case 'python':
      return (
        <PythonFileIcon
          x={position.x + 2}
          y={position.y - 10}
          height={iconSize + 1}
          width={iconSize + 1}
        />
      );

    default:
      return <FileIcon x={position.x + 2} y={position.y - 9} height={iconSize} width={iconSize} />;
  }
};

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
    dependencyImportedOnly,
    language // use to detect icon
  } = props;

  const iconSize = 15;
  const nameWidth = name.length * SYMBOL_WIDTH;

  const iconFile = getFileIcon({ position, iconSize, language });
  const icon = !dependency ? (
    iconFile
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
            width={NODE_NAME_X_SHIFT}
            height={5}
            className={'NodeText-cover'}
          />
          <rect
            x={position.x + NODE_NAME_X_SHIFT}
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
          x={position.x + NODE_NAME_X_SHIFT}
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
