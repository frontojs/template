const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { resolve } = require('path');

module.exports = {
  test: /\.(scss|sass|css)$/i,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      { loader: 'css-loader', options: { 
          minimize: false, 
        } 
      },
      { loader: 'postcss-loader', options: { 
        sourceMap: true,
        plugins: function() {
          return [require('autoprefixer')]
        } 
      } },
      'resolve-url-loader',
      { loader: 'sass-loader', options: { 
        sourceMap: true,
        includePaths: [
          resolve(__dirname, '..', '..', '..', 'lib'), 
          resolve(__dirname, '..', '..', '..', 'src'), 
          'node_modules'
        ]
      }}
    ]
  })
}
