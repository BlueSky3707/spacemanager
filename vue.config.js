module.exports = {
  publicPath: './',
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        proxy: {
          '/postgisapi': {   
            target: 'http://10.61.5.63:8084',   
            changeOrigin: true,
            pathRewrite: {
              '^/postgisapi': ''
            }
          },
          '/api': {
            // 统一接口
            target: 'http://121.36.226.49:6022', // 线上
            changeOrigin: true,
            pathRewrite: {
              '^/api': ''
            }
          }
        }
    }
}