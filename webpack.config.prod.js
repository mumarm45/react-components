const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.config.common.js');
const { SHOULD_OUTPUT_SOURCE_MAP, SHOULD_MINIMIZE_OUTPUT } = require('./webpack/config');

module.exports = merge(common, {
 mode: 'production',
 devtool: 'inline-source-map',
 optimization: {
  minimize: true,
  minimizer: [
   new TerserPlugin({
    terserOptions: {
     parse: {},
     compress: true,
     mangle: SHOULD_MINIMIZE_OUTPUT,
     sourceMap: SHOULD_OUTPUT_SOURCE_MAP
    },
    extractComments: true
   })
  ]
 },
 performance: {
  hints: false
 }
});
