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
    filename: 'javascripts/[name].[chunkhash].js',
    chunkFilename: 'javascripts/[name].[chunkhash].js',
    publicPath: '/',
    path: resolve(__dirname, 'dist')
  },

  module: {
    rules: sync(join(loadersDir, '*.js')).map(loader => require(loader))
  },

  plugins: [
    new UglifyJSPlugin(),
    new ExtractTextPlugin({
      'stylesheets/[name].[contentHash].css', allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      filename: 'app-[hash].min.js'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor-[hash].min.js'
    })
  ]
};

