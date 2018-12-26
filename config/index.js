const path = require('path')
module.exports = {
  build: {
    // html模版路径
    index: path.resolve(__dirname, '../dist/index.html'),
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
  },
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    proxyTable: {},

    host: '0.0.0.0',
    port: 8080,
    autoOpenBrowser: true,
    errorOverlay: true, // 报错会在屏幕上的浮层显示
  },
  test: {}
}