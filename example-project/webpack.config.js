/* global __dirname, require, module*/

const path = require('path');

const outputFile = 'bundle.js';

const config = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: outputFile
  },
  module: {
    rules: [ ]
  },
  resolve: {
    extensions: ['.js']
  },
  mode: 'development'
};

module.exports = config;
