'use strict';

const paths = require('./paths');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
      historyApiFallback: true,
      contentBase: paths.game,
      open: true,
      openPage: 'game',
      compress: true,
      port: 80,
   },
});