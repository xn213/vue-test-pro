const path = require('path')

// 开发环境代理
const proxyConfig = {
  target: 'http://jx.1000phone.net'
}

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        // vue$: 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        utils: resolve('src/utils'),
        api: resolve('src/api'),
        components: resolve('src/components'),
        pages: resolve('src/pages')
      }
    },
    devServer: {
      proxy: {
        // proxy api request to dev box
        '/api': {
          changeOrigin: true,
          ...proxyConfig,
          pathRewrite: {
            '^/api': '/'
          }
          // headers: {
          //   'Content-Type': 'application/json',
          // },
        }
      }
    }
  }
}
