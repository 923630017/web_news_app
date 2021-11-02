const path = require('path');
// 插件用来缩小（压缩优化）js文件
const uglify = require('uglifyjs-webpack-plugin');
// 兼容浏览器css前缀
const autoprefixer = require('autoprefixer');
//将css单独打包成一个文件的插件，它为每个包含css的js文件都创建一个css文件。它支持css和sourceMaps的按需加载。
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development', //production development
  devtool: 'source-map',
  // 优化 禁止压缩 最小化
  optimization: {
    minimize: false,
  },
  // 入口 多入口
  entry: {
    index: path.resolve(__dirname, './src/js/index.js'),
    detail: path.resolve(__dirname, './src/js/detail.js'),
    collections: path.resolve(__dirname, './src/js/collections.js')
  },
  // 出口
  output: {
    //打包到文件路径
    path: path.resolve(__dirname + '/dist'),
    // 文件名
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
        query: {
          presets: ['latest'],
        },
      },
      {
        test: /\.tpl$/,
        loader: 'ejs-loader',
      },
      {
        test: /\.less$/,
        use: [
          // {
          //   loader: miniCssExtractPlugin.loader,
          //   options: {
          //     hmr: process.env.NODE_ENV === 'development',
          //   },
          // },
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [autoprefixer('last 5 versions')];
              },
            },
          },
          'less-loader'
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
        loader: [
          'url-loader?limit=l024&name=img/[name]-[hash:16].[ext]',
          'image-webpack-loader', 
        ] 
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 用minify会对生成的html文件进行压缩，默认是false
      minify: {
        removeComments: true, //去注释
        collapseWhitespace: true,  //是否去除空格
      },
      // title：生成的HTML模板的title
      title: '首页',
      // filename：生成的模板文件的名字
      filename: 'index.html',
      //  template：模板来源文件（html文件）
      template: path.resolve(__dirname, 'src/index.html'),
      // 引入js
      chunksSortMode: 'manual',
      chunks: ['index'], //按照顺序引入js
      excludeChunks: ['node-modules'],
      // hash：是否生成hash添加在引入文件地址的末尾，这个可以避免缓存带来的麻烦。默认为true。
      hash: true
    }),
    new HtmlWebpackPlugin({
      // 用minify会对生成的html文件进行压缩，默认是false
      minify: {
        removeComments: true, //去注释
        collapseWhitespace: true,  //是否去除空格
      },
      // title：生成的HTML模板的title
      title: '详情',
      // filename：生成的模板文件的名字
      filename: 'detail.html',
      //  template：模板来源文件（html文件）
      template: path.resolve(__dirname, 'src/detail.html'),
      // 引入js
      chunksSortMode: 'manual',
      chunks: ['detail'], //按照顺序引入js
      excludeChunks: ['node-modules'],
      // hash：是否生成hash添加在引入文件地址的末尾，这个可以避免缓存带来的麻烦。默认为true。
      hash: true
    }),
    new HtmlWebpackPlugin({
      // 用minify会对生成的html文件进行压缩，默认是false
      minify: {
        removeComments: true, //去注释
        collapseWhitespace: true,  //是否去除空格
      },
      // title：生成的HTML模板的title
      title: '合计',
      // filename：生成的模板文件的名字
      filename: 'collections.html',
      //  template：模板来源文件（html文件）
      template: path.resolve(__dirname, 'src/collections.html'),
      // 引入js
      chunksSortMode: 'manual',
      chunks: ['collections'], //按照顺序引入js
      excludeChunks: ['node-modules'],
      // hash：是否生成hash添加在引入文件地址的末尾，这个可以避免缓存带来的麻烦。默认为true。
      hash: true
    }),
    // new miniCssExtractPlugin({
    //   filename: 'css/[name].css' 
    // })
  ],
  devServer: {
    watchOptions: {
      ignored: /node_modules/
    },
    host: 'localhost',
    port: 8080
  }
};
