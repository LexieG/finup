const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./base')
const root = path.resolve(__dirname, '../')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(baseConfig, {
    entry: [
        path.join(root, 'src/main.js')
      ],
    devServer: {
      port: 3000, // 服务器端口
    },
    devtool: 'source-map', // 用于标记编译后的文件与编译前的文件对应位置，便于调试
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
          template: path.join(root, 'index.html'), // 模板文件
          inject: 'body' // js的script注入到body底部
        })
      ]
  })
  