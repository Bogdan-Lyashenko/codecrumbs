/* global __dirname, require, module*/

const webpack = require('webpack');
const path = require('path');

const libraryName = 'codecrumbs';
const outputFile = 'bundle.js';

const config = {
    entry: __dirname + '/js/index.js',
    devtool: 'source-map',
    output: {
        path: __dirname,
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx?)$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                query: {
                    presets: ['es2015', 'stage-2'],
                    plugins: ['transform-react-jsx']
                }
            }
        ]
    },
    resolve: {
        modules: [path.resolve('../../node_modules'), path.resolve('./js')],
        extensions: ['.json', '.js']
    },
    mode: 'development'
};

module.exports = config;
