const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require('path')
const base = require('./webpack.config.base.js')

module.exports = {
  mode: 'production',
  ...base,
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      filename: 'index.[contenthash].css',
      chunkFilename: 'index.[contenthash].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
        ],
      },
    ],
  },
}