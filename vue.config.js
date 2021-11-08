module.exports = {
  publicPath: './',
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        proxy: {
          '/postgisapi': {   
            target: 'http://localhost:8087',   
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