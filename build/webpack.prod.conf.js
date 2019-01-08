const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const baseWebpackConfig = require('./webpack.base.conf')
const config = require('../config')

function resolve (dir) {
  return path.resolve(__dirname, '..', dir)
}
module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  devtool: false,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: {
      name: 'manifest'
    },
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          safe: true,
          discardComments: { removeAll: true }
        }
      }),
      new UglifyJsPlugin({
        test: /\.js$/,
        include: resolve('src'),
        exclude: /node_modules/,
        cache: true,
        parallel: true // 并行压缩
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: "[name].css"
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new CopyWebpackPlugin([{
      from: resolve('static'),
      to: config.dev.assetsSubDirectory,
      ignore: ['.*']
    }]),
    new VueLoaderPlugin(),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('../dist/vendor-manifest.json'),
    })
  ]
})