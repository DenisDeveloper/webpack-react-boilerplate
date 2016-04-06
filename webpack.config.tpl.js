var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var assetsPath = path.join(__dirname, 'public/assets');
var publicPath = 'assets/';
var extensions = ['', '.js', '.jsx', '.styl'];

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle-[hash].min.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'my app',
      filename: 'index.html',
      template: 'index.html',
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      comments: false,
      sourceMap: false,
      mangle: true,
      minimize: true
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'app')
      }
    ]
  }
}
