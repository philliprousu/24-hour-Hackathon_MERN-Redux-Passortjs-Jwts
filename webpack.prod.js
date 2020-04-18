const path = require('path');
const config = require('./webpack.config');
const merge = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = merge(config, {
  mode: 'production',
  output: {
    filename: 'bundle[contentHash].js',
    path: path.join(__dirname, 'public'),
  },
  plugins: [new CleanWebpackPlugin()]
});