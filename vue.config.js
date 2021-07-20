
const path = require('path')
module.exports = {
    lintOnSave: false,
      chainWebpack: (config) => {   // 解决vue-cli3脚手架创建的项目压缩html 干掉<!-- shell -->导致骨架屏不生效
        if (process.env.NODE_ENV !== 'development') {
          config.plugin('html').tap(opts => {
            opts[0].minify.removeComments = false
            return opts
          })
        }
    
      },
}