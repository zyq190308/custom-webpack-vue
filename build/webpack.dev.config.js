const path = require('path')
const merge = require('webpack-merge');
const baseWepackConfig = require('./webpack.base.config')

module.exports = merge(baseWepackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    hot: true
  }
})