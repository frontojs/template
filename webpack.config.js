const webpack = require('webpack');
const { join, resolve } = require('path');
const { sync } = require('glob');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
    require(resolve(__dirname, 'config', 'template')),
    new CleanWebpackPlugin(['dist'], { 
      root: resolve(__dirname)
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new UglifyJSPlugin({}),
    new ExtractTextPlugin({
      filename: 'stylesheets/[name].[contentHash].css', allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'],
      minChunks: Infinity
    }),
  ]
};

module.exports = config;
