const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',

  entry: {
    vendor: ['vue']
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].dll.js',
    library: '[name]-[hash]'
  },

  plugins: [
    new webpack.DllPlugin({
      name: '[name]-[hash]',
      context: __dirname,
      path: path.join(__dirname, '../dist', '[name]-manifest.json')
    })
  ]
}