var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/react-templates/brokerages-comparator/brokerages-comparator.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: __dirname + '/react-templates/brokerages-comparator/brokerages-comparator.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /public/],
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/, /public/],
        loader: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    filename: 'transformed.js',
    path: __dirname + '/build'
  },
  plugins: [HTMLWebpackPluginConfig]
};