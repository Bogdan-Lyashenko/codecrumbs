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
    >
        {code}
    </SyntaxHighlighter>
);
