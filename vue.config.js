
// const { defineConfig } = require('@vue/cli-service')
const path = require("path")
const webpack = require("webpack")
 
// 后端真实的请求地址
const realApiUrl = process.env.VUE_APP_API
console.log(realApiUrl);
// 后端真实的请求地址前缀
const realApiPrefix = process.env.VUE_APP_API_PREFIX

module.exports = {
    // transpileDependencies: true,
   
    // 前端代理服务器
    devServer: {
      proxy: {
        // proxyon为代理前缀，如果请求中包含该前缀，就走代理
        '/api': {
          // 真实的后端服务器地址
          target: `http://localhost:3005/`,
          ws: true,
          // 控制请求头中的host
          changeOrigin: true,
          // 将代理前缀名称替换为后端的真实前缀名称
          pathRewrite: {
            '^/api': `http://localhost:3005/`
          }
        },
      }
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, 'src/css/minx.less')
            ]
        }
    }
}
