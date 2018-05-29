import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { hybrid } from 'react-syntax-highlighter/styles/hljs';

//TODO: scrool to/highlight crumbed lines
//https://github.com/conorhastings/react-syntax-highlighter/blob/master/README.md
export default ({ code, crumbedLines = [] }) => (
    <SyntaxHighlighter
        language="javascript"
        style={hybrid}
        customStyle={{ fontSize: '14px' }}
        showLineNumbers={true}
    >
        {code}
    </SyntaxHighlighter>
);
