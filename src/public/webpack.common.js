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
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
              '@babel/plugin-syntax-dynamic-import'
            ]
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
