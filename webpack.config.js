const { merge } = require("webpack-merge");
const common = require("./webpack.config.common.js");
const port = "8081";
module.exports = merge(common, {
  mode: "development",

  devtool: "eval-cheap-module-source-map",

  devServer: {
    client: {
      overlay: false,
    },
    hot: true,
    compress: true,
    port,
  },
  optimization: {
    runtimeChunk: 'single'
}
});
