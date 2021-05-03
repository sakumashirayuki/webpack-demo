const webpack = require("webpack");
const path = require('path');

// path.join(__dirname, '../dist')

module.exports = {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
		contentBase: path.join(__dirname, '../dist'),
		open: true,
		port: 8080,
    watchContentBase: true,
	},
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
  }
};
