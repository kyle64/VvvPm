var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
let buildPath = 'dist'

module.exports = {
  entry: {
    app: ['./src/index.js', './css/index.css' ],
    user: "./src/user.js"
  },
  output: {
    path: __dirname+buildPath,
    publishPath: buildPath,
    filename: '[name]-[hash].js'
  },
  module: {
    loaders: [
      {test: /\.vue$/, loader: 'vue'},
      {test: /\.css$/, loader: cssLoader},
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
    ]
  },
  plugins: [
    new ExtractTextPlugin("./[name].css")
  ],
  resolve: {
    alias: {
      extension: ['', '.js'],
      vue: 'vue/dist/vue.js'
    }
  },
  devServer: {
    historyApiFallback: true
  },
  devtool: 'source-map'
}
