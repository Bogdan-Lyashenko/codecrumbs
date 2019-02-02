const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: [path.resolve(__dirname, 'js/public-path.js'), path.resolve(__dirname, 'js/index.js')],
  output: {
    path: path.resolve(__dirname, 'dist/standalone/bundle/'),
    publicPath: ''
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.STANDALONE': JSON.stringify(true),
      'process.env.VERSION': JSON.stringify(require('../../package.json').version)
    })
  ],
  mode: 'production'
});
