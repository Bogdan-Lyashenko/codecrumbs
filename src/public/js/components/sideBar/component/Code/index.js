import React from 'react';
import classNames from 'classnames';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/styles/hljs';

import './index.scss';

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
export default class extends React.Component {
  fixScroll() {
    const { dependenciesLines } = this.props;
    if (
      !this.codeRef ||
      !this.codeRef.scrollTo ||
      !dependenciesLines ||
      !dependenciesLines.length
    ) {
      return;
    }

    this.codeRef.scrollTo(0, dependenciesLines[0][0] * 15 - 5);
  }
  componentDidUpdate(prevProps) {
    // TODO: doesn't work
    if (prevProps.dependenciesLines !== this.props.dependenciesLines) {
      this.fixScroll();
    }
  }
  componentDidMount() {
    this.fixScroll();
  }

  render() {
    const { code, crumbedLines = [], dependenciesLines = [], limitedHeight } = this.props;

    // TODO: calc height for .Code based on dependenciesLines - it's not always need to be 300 px!!
    return (
      <div className={classNames('Code', { limitedHeight })} ref={el => (this.codeRef = el)}>
        <SyntaxHighlighter
          language="javascript"
          style={atomOneLight}
          showLineNumbers={true}
          wrapLines={true}
          customStyle={{ fontSize: '13px' }}
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
  }
}
