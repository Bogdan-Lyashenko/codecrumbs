import React from 'react';

import metaInfo from '../../meta';

export default () => (
  <React.Fragment>
    <span>{`v${metaInfo.version}`}</span>
    <span>
      &#9400; Bohdan Liashenko
      {' • '}
      <a target="_blank" href="https://github.com/Bogdan-Lyashenko/codecrumbs">
        Github
      </a>
      {' • '}
      <a target="_blank" href="https://codecrumbs.io/">
        codecrumbs.io
      </a>
    </span>
  </React.Fragment>
);
