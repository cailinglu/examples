const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    client: './src/client/main.ts',
  },
  output: {
    path: __dirname + '/dist',
    filename: 'src/[name]/[name]-bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['./src', 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.html$/,
        use: 'raw-loader',
        exclude: ['./src/client/index.html']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
      filename: 'src/client/index.html'
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist/src/client'
  }
};
