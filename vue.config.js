const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  pages: {
    index: {
      entry: 'examples/main.js', // 修改项目入口文件
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，使 packages 文件夹加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages'))
      .end()
      .use('babel-loader')
      .loader('babel-loader')
      .tap(options => {
        return options
      })

    config.module
      .rule('fonts')
      .test(/\.(ttf|woff)(\?.*)?$/)
      .type('asset/inline')
      .set('generator', {})
      .end();
  }
})
