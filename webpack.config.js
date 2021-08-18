const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

module.exports = {
  entry: { app: "./src/index.js" },
  output: {
    publicPath: "./",
    filename: "[name].[chunkhash:8].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.json$/i,
        use: ["a", "b", "c"],
      },
    ],
  },
  resolveLoader: {
    modules: [
      path.resolve(__dirname, "node_modules"),
      path.resolve(__dirname, "loaders"),
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Hello Loader",
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new WebpackManifestPlugin({
      basePath: "dist/",
    }),
  ],
};
