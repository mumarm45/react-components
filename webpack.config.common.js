const path = require('path');
const plugins = require('./webpack/plugins');
const rules = require('./webpack/rules');

const release = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
const isDevelopment = release == 'dev';
module.exports = {
 context: path.join(__dirname, '/src'),
 entry: ['@babel/polyfill', './index.js'],
 output: {
  chunkFilename: '[name].[chunkhash].js',
  filename: '[name].[chunkhash].js',
  path: path.join(__dirname, '/dist'),
  publicPath: '',
  clean: true,
  assetModuleFilename: "public/[name][ext]"
 },

 module: {
  rules: rules(__dirname, isDevelopment)
 },
 resolve: {
  extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.webpack.js', '.web.js', '.mjs', '.scss'],
  fallback: {
   // not present by default
   url: false
  }
 },
 plugins: plugins(__dirname)
};
