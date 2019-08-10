const webpack = require('webpack');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'development',
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: false
    }),
    new webpack.DefinePlugin({
      'process.env.LOCAL': JSON.stringify(true),
      'process.env.DEV': JSON.stringify(true)
    })
  ]
});
