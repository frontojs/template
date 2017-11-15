const webpack = require('webpack');
const { join, resolve } = require('path');
const { sync } = require('glob');

const entry = require('./entry');
const output = require('./output');

output.filename = 'javascripts/[name].[hash].js';
output.chunkFilename = 'javascripts/[name].[hash].chunk.js';

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
      use: [{ loader: 'style-loader' }, css, postcss, sass]
    }]
  },

  plugins: [
    require(resolve(__dirname, 'template')),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'],
      minChunks: Infinity
    })
  ],

  devtool: 'source-map',

  devServer: {
    hot: true,
    inline: true,
    watchOptions: {
      ignored: /node_modules/
    },
    historyApiFallback: true
  }
}

module.exports = config;
