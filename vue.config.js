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
          '/severapi': {   
            target: 'http://localhost:8089',   
            changeOrigin: true,
            pathRewrite: {
              '^/severapi': ''
            }
          },
        }
    }
}