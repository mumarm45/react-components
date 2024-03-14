/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const { SHOULD_OUTPUT_SOURCE_MAP } = require("./config");

const jsLoader = [{ loader: "babel-loader?cacheDirectory" }];

const cssLoader = {
  loader: "css-loader",
  options: {
    sourceMap: SHOULD_OUTPUT_SOURCE_MAP,
  },
};

const sass = [
  cssLoader,
  {
    loader: "postcss-loader",
    options: {
      sourceMap: SHOULD_OUTPUT_SOURCE_MAP,
      postcssOptions: {
        plugins: () => [autoprefixer("last 2 versions")],
      },
    },
  },
  {
    loader: "sass-loader",
    options: {
      sourceMap: SHOULD_OUTPUT_SOURCE_MAP,
      implementation: require("node-sass"),
    },
  },
  {
    loader: "sass-bulk-import-loader",
  },
];

function rules(dirname, isDevelopment) {
  return [
    {
      test: /\.(eot|woff|woff2|ttf|otf)$/,
      type: "asset/resource",
    },
    {
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: jsLoader,
      include: [path.join(dirname, "src")],
    },
    {
      test: /\.scss$/,
      include: /src/,
      use: [isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader, ...sass]
    },
    {
      test: /\.css$/,
      use: cssLoader
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      type: "asset/resource",
    },
    {
      test: /\.m?js$/,
      include: /node_modules/,
      resolve: {
        fullySpecified: false,
      },
    },
  ];
}

module.exports = rules;
