const path = require('path')
const webpack = require('webpack')
module.exports = {
  publicPath : './',
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        modifyVars: {
          // 直接覆盖变量
          // 'nav-bar-background-color': '#007bff',
          // 'nav-bar-title-text-color': '#fff',
          // 'tabs-bottom-bar-color': '#007bff',
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          hack: `true; @import "${path.join(__dirname, '/src/styles/cover.less')}";`
        }
      }
    }
  },
  devServer:{
    proxy:{
      '/api':{
        target:'http://124.223.191.233:8090',
        changeOrigin:true,
        pathRewrite: {
          '^/api': '' 
        }
      }
    }
  },
  chainWebpack: config => {
    //引入ProvidePlugin
    config.plugin("provide").use(webpack.ProvidePlugin, [{
        $: "jquery",
        jquery: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
    }, ]);
  },
}
