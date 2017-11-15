const webpack = require('webpack');
const { join, resolve } = require('path');
const { sync } = require('glob');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const loadersDir = join(__dirname, 'config', 'loaders');

const entry = require('./entry');
const output = require('./output');

const loaders = {
  babel: require('./loaders/babel'),
  assets: require('./loaders/assets')
};

const css = require('./styles/css');
const postcss = require('./styles/postcss');
const sass = require('./styles/sass');

const config = {
  entry,
  output,

  module: {
    rules: [
      loaders.babel, loaders.assets, {
      test: /\.(scss|sass|css)$/i,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [css, postcss,'resolve-url-loader', sass]
      })
    }]
  },

  plugins: [
    require(resolve(__dirname, 'template')),
    new CleanWebpackPlugin(['dist'], { 
      root: resolve(__dirname, '..')
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
