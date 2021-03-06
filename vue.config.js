module.exports = {
  publicPath: './',
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        proxy: {
          '/postgisapi': {   
            target: 'http://121.36.226.49:8087',   
            changeOrigin: true,
            pathRewrite: {
              '^/postgisapi': ''
            }
          },
          '/gisa': {
            // 统一接口
            target: 'http://121.36.226.49:6022', // 线上
            changeOrigin: true,
            pathRewrite: {
              '^/gisa': ''
            }
          }
        }
    }
}