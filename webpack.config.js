var path = require("path");
var hwp = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "/src/client/index.js"),
  output: {
    filename: "build.js",
    path: path.join(__dirname, "/dist")
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/ || /\.jsx$/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new hwp({ template: path.join(__dirname, "/src/client/index.html") })
  ]
};
