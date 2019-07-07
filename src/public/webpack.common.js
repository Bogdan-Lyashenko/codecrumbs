const path = require('path');

const PROJECT_NAME = 'codecrumbs';

module.exports = {
  entry: path.resolve(__dirname, 'js/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist/local/bundle/'),
    publicPath: '/bundle/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    library: PROJECT_NAME,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx?)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.less$/,
        include: [path.resolve(__dirname, './js/')],
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.less$/,
        include: [path.resolve(__dirname, '../../node_modules/antd/')],
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [path.resolve('../../node_modules')],
    extensions: ['.js']
  },

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
