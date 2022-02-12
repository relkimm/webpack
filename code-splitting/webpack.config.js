var path = require("path");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "none",
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"],
      },
      {
        test: /\.js$/,
        use: ["swc-loader"],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  devtool: "source-map",
};
