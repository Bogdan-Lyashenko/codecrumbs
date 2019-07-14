const packageJson = require('../../package');

module.exports = function(app) {
  app.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions']
        },
        modules: false
      }
    ],
    '@babel/preset-react'
  ];

  const plugins = [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    [
      'transform-define',
      {
        'process.env.CODECRUMBS_VERSION': packageJson.version
      }
    ]
  ];

  return {
    presets,
    plugins
  };
};
