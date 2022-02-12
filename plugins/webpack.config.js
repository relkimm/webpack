var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var SpeedMeasureWebpackPlugin = require("speed-measure-webpack-plugin");
var { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  mode: "none",
  entry: "./src/App.tsx",
  output: {
    filename: "bundle.[chunkhash].js",
    path: path.resolve(__dirname, "build"),
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "scss-loader",
        ],
      },
      {
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: /(node_modules)/,
        use: ["swc-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    // new CleanWebpackPlugin(),
  ],
  devServer: {
    port: 3000,
  },
  stats: {},
};

var smp = new SpeedMeasureWebpackPlugin();

const configWithSpeedMeasure = smp.wrap(config);
configWithSpeedMeasure.plugins.push(new MiniCssExtractPlugin());

module.exports = configWithSpeedMeasure;
