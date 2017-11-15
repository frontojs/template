const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = new HtmlWebpackPlugin({
  chunks: ['vendor', 'app', 'manifest'],
  filename: 'index.html',
  name: 'Codemy',
  minify: { 
    collapseWhitespace: true
  },
  title: 'Codemy.net - Anyone Can Code',
  template: 'template.ejs',
  links: [
    'https://fonts.googleapis.com/icon?family=Material+Icons|Source+Sans+Pro'
  ],
  scripts: [
    'https://cdn.omise.co/omise.js.gz'
  ],
  inject: false
})