# webpack相关配置
  1. html-webpack-plugin(@3.2.0): 作用html引入其他文件（js/css),需要对html压缩；
  2. babel-core(@6.26.3)/babel-loader(@7.1.5)/babel-preset-latest(@6.24.1): 作用是将es6或者更高版得es语法转化为es5语法
  3. babel-plugin-transform-runtime(@6.23.0): 解析async await;
  4. css-loader(@2.1.1)/node-sass(@4.11.0)/sass-loader(@7.1.0)/style-loader(@0.23.1): 处理css一系列得包
  5. ejs-loader(@0.3.3):将EJS模板文件当做一个函数输出；
  6. url-loader(@1.1.2)/file-laoder(@3.0.1): 处理一些静态资源文件，比如图片字体等;
  7. postcss-loader(@3.0.0)/autoprefixer(@9.5.1): 处理css和添加浏览器前缀
  8. webpack(@4.30.0)/webpack-cli(@3.3.0): 前者是打包作用，后者是创建打包的环建得脚手架；
  9. webpack-dev-server(@3.7.2): 开发环境需要启动的静态服务
# 启动命令行
  scripts: {
     "serve": "webpack-dev-server",
     "build": "webpack"    
  }