module.exports = function(app) {
  app.cache(true);

  const presets = [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage'
      }
    ]
  ];

  const plugins = [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
    '@babel/plugin-syntax-dynamic-import'
  ];

  return {
    presets,
    plugins
  };
};
