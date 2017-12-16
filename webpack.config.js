const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template:'./index.html',
  filename: 'index.html',
  inject:'body'
})

module.exports = {
  entry: './src/components/App.jsx',
  output:{
    path:__dirname+'/dist',
    filename: 'bundle.js'
  },
  module:{
    loaders:[
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.s?css$/,loaders: ['style', 'css', 'sass'],}
    ]
  },
  plugins:[HtmlWebpackPluginConfig]
}
