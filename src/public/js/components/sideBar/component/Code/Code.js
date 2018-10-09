import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/styles/hljs';
import './Code.scss';

const isMatchLineNumber = (lines, lineNumber) =>
  !!lines.find(lines => {
    if (lines[0] === lineNumber && lines[1] === lineNumber) {
      return true;
    }
    return lines[0] <= lineNumber && lines[1] >= lineNumber;
  });

//TODO: add select with several themes
//TODO: scrool to/highlight crumbed lines
//https://github.com/conorhastings/react-syntax-highlighter/blob/master/README.md
export default ({ code, crumbedLines = [], dependenciesLines = [] }) => (
  <div className={'Code'}>
    <SyntaxHighlighter
      language="javascript"
      style={atomOneLight}
      customStyle={{ fontSize: '13px' }}
      showLineNumbers={true}
      wrapLines={true}
      lineProps={lineNumber => {
        if (isMatchLineNumber(crumbedLines, lineNumber)) {
          return { className: 'crumbedLine' };
        }

        if (isMatchLineNumber(dependenciesLines, lineNumber)) {
          return { className: 'importedDependencyLine' };
        }

        return {};
      }}
    >
      {code}
    </SyntaxHighlighter>
  </div>
);
