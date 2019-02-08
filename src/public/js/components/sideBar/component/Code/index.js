import React from 'react';
import classNames from 'classnames';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/styles/hljs';

import './index.scss';

const FONT_SIZE = '12px';
//TODO: add select with several themes
//TODO: scrool to/highlight crumbed lines
//https://github.com/conorhastings/react-syntax-highlighter/blob/master/README.md
export default class extends React.Component {
  fixScroll() {
    const { dependenciesLines = [], crumbedLines = [] } = this.props;
    if (!this.codeRef || !this.codeRef.scrollTo) {
      return;
    }

    const lines = dependenciesLines.length
      ? dependenciesLines
      : crumbedLines.length
        ? crumbedLines
        : null;

    lines && this.codeRef.scrollTo(0, lines[0][0] * 15 - 5);
  }
  componentDidUpdate(prevProps) {
    this.fixScroll();
  }
  componentDidMount() {
    this.fixScroll();
  }

  render() {
    const { language, code, crumbedLines = [], dependenciesLines = [], limitedHeight } = this.props;

    // TODO: calc height for .Code based on dependenciesLines - it's not always need to be 300 px!!
    return (
      <div className={classNames('Code', { limitedHeight })} ref={el => (this.codeRef = el)}>
        <SyntaxHighlighter
          language={language}
          style={atomOneLight}
          showLineNumbers={true}
          wrapLines={true}
          customStyle={{ fontSize: FONT_SIZE }}
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
          {code || ''}
        </SyntaxHighlighter>
      </div>
    );
  }
}

const isMatchLineNumber = (lines, lineNumber) =>
  !!lines.find(lines => {
    if (lines[0] === lineNumber && lines[1] === lineNumber) {
      return true;
    }
    return lines[0] <= lineNumber && lines[1] >= lineNumber;
  });
