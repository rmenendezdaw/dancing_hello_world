const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
 entry: { index: path.resolve(__dirname, "js", "main.js") },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "." ,"index.html")
    })
  ]
};