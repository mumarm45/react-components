const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin');

function plugins(dirname) {
    return [
        new HtmlWebpackPlugin({
            template: `${dirname}/src/index.html`,
            favicon: './assets/images/favicon.ico'
        }),
        new MiniCssExtractPlugin({
            linkType: 'text/css',
            filename: 'main.[fullhash].css'
          }),
              ]
}

module.exports = plugins;