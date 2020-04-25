const path = require('path');
const config = require('./webpack.config');
const merge = require('webpack-merge');

module.exports = merge(config, {
  mode: 'production',
  //advised to have 'source-map' from webpack docs for production
  //devtool: 'source-map',
  output: {
    filename: 'bundle[contentHash].js',
    path: path.join(__dirname, 'public'),
  },
});