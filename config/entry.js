const { resolve } = require('path');

module.exports = {
  app: resolve(__dirname, '..', 'app', 'main'),
  vendor: resolve(__dirname, '..', 'app', 'vendor')
};
