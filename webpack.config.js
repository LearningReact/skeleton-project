var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:8080',
    './src/js/app',
    './src/style.scss'
  ],

  output: {
    publicPath: '/',
    filename: 'bundle.js'
  },

  devtool: 'source-map',

  devServer: {
    contentBase: './src'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  },
  debug: true
};
