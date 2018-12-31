const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const libraryName = 'codecrumbs';
const outputFile = 'bundle.js';

module.exports = {
  entry: __dirname + '/js/index.js',
  output: {
    path: __dirname + '/dist',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx?)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }]]
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    modules: [path.resolve('../../node_modules'), path.resolve(__dirname, 'js/')],
    alias: {
      'app.package.json': path.resolve(__dirname, '../../package.json'),
      'shared-with-server-src': path.resolve(__dirname, '../shared')
    },
    extensions: ['.js']
  },

  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    })
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: '/node_modules/'
        }
      }
    }
  }
};
