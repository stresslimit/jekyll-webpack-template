var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var customProperties = require('postcss-custom-properties')
var nested = require('postcss-nested')
var autoprefixer = require('autoprefixer')
var postcssImport = require('postcss-import')
var csswring = require('csswring')


module.exports = {
  entry: {
    out: ['./_css']
  },
  output: {
    path: __dirname + '/assets/css/',
    filename: '[name].js'
  },
  debug: true,
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?importLoaders=1!postcss') }
    ]
  },
  postcss: [postcssImport, customProperties, nested, autoprefixer, csswring]
}
