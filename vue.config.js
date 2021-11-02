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
        }
    }
}