import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/styles/hljs';

//TODO: add select with several themes
//TODO: scrool to/highlight crumbed lines
//https://github.com/conorhastings/react-syntax-highlighter/blob/master/README.md
export default ({ code, crumbedLines = [] }) => (
  <SyntaxHighlighter
    language="javascript"
    style={atomOneLight}
    customStyle={{ fontSize: '13px' }}
    showLineNumbers={true}
    wrapLines={true}
    lineProps={lineNumber => {
      if (crumbedLines.includes(lineNumber)) {
        return { style: { display: 'block', backgroundColor: 'rgba(255, 225, 244, 0.8)' } };
      }

      return {};
    }}
  >
    {code}
  </SyntaxHighlighter>
);
