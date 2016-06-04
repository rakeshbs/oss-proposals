var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/build/',
    publicPath: '/build/',
    filename: 'bundle.js',
  },
  devServer: {
      outputPath: __dirname + '/build/',
    },
    plugins: [
        new CopyWebpackPlugin([
          {from: './node_modules/bootswatch/flatly/bootstrap.min.css'},
          {from: './issues.json'},
          {from: './index_build.html', to: 'index.html'}
        ])
      ],
      module: {
        loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react'],
          },
        }
        ],
      },
}
