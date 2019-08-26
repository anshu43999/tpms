module.exports = {
  publicPath: "./",
  // publicPath: process.env.NODE_ENV === "binheSportSystem" ? "./" : "/",
  outputDir: "dist",
  assetsDir : 'static',
  filenameHashing: false,
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    proxy: {
      //配置代理
      // '/api':{
      //     target: 'http://wechatspq.free.idcfengye.com/binheSportSystem/',
      //     changeOrigin: true,
      //     pathRewrite: {
      //         '^/api': '/'
      //     }
      // }
      "/sexLady": {
        target: "https://spq.free.idcfengye.com/binheSportSystem/",
        changeOrigin: true,
        // ws: true,
        pathRewrite: {
          "^/sexLady": "/"
        }
      }
    }
  },
  // ie 兼容   （失败）
  chainWebpack : config => {
    // config.module
    //   .rule("iview")
    //   .test(/iview.src.*?js$/)
    //   .use('babel')
    //     .loader("babel-loader")
    //     .end()
     // 其他配置
     config.entry('main').add('babel-polyfill') // main是入口js文件

  }
};
