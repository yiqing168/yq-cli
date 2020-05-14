const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    vendors: [
      "react",
      "react-dom",
      "react-router-dom"
    ]
  },
  output: {
    path: path.resolve(__dirname, "../dll"),
    filename: "[name].dll.[contenthash:8].js",
    library: "_dll_[name]"                      // 打包库文件

  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        path.resolve(__dirname, "../dll")
      ]
    }),
    new webpack.DllPlugin({
      name: "_dll_[name]",
      path: path.join(__dirname, "../dll", "[name].manifest.json")
    })
  ]
}