const webpack = require('webpack');
const { join, resolve } = require('path');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const loadersDir = join(__dirname, 'config', 'loaders');

const config = {
  entry: {
    app: resolve(__dirname, 'app'),
    vendor: resolve(__dirname, 'vendor')
  },

  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: resolve(__dirname, 'dist')
  },

  module: {
    rules: sync(join(loadersDir, '*.js')).map(loader => require(loader))
  } 

}
