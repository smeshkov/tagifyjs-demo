const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const { NODE_ENV = 'development' } = process.env;
const isDevelopment = NODE_ENV === 'development';

module.exports = {
  entry: './src/index.js',
  devtool: isDevelopment ? 'inline-source-map' : false,
  mode: isDevelopment ? 'development' : 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new webpack.DefinePlugin({
      __DEV__: isDevelopment,
      __PROD__: !isDevelopment,
    })
  ]
};
