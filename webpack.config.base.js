const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode: 'development',//老师没写
  entry: './src/index.js',
  output: {
    filename: 'index.[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin( {
      title: '蛮大人',
      template: 'src/assets/index.html'
}),

], 
module: {
  rules: [
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: ["file-loader"]
    },
    {
      test: /\.styl$/,
      loader: ["style-loader", "css-loader", "stylus-loader"]
    },
    {
      test: /\.less$/,
      loader: ["style-loader", "css-loader", "less-loader"]
    },
    {
      test: /\.scss$/i,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            implementation: require("dart-sass")
          }
        }
      ]
    }
  ]
}
};



  