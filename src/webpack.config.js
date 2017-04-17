'use strict'
const path = require('path')

module.exports = {
  context: path.join(__dirname, '/src'),
  entry: {
    app: './app.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader'
        ]
      }
    ]
  },
  output: {
    path: path.join(__dirname, './../static/js'),
    filename: '[name].bundle.js'
  }
}
