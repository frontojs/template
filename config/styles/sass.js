const { resolve } = require('path');

module.exports = { 
  loader: 'sass-loader', 
  options: { 
    sourceMap: true,
    includePaths: [
      resolve(__dirname, '..', '..', 'app'), 
      'node_modules'
    ]
  }
};
