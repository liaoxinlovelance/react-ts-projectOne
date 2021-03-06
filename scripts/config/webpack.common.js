// const path = require('path')

// module.exports = {
//   entry: {
//     app: path.resolve(__dirname, '../../src/app.js'),
//   },
//   output: {
//     filename: 'js/[name].[hash:8].js',
//     path: path.resolve(__dirname, '../../dist'),
//   },
// }

const { resolve } = require('path')
//const { PROJECT_PATH } = require('../constant')
const { isDev, PROJECT_PATH } = require('../constant')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    app: resolve(PROJECT_PATH, './src/app.js'),
  },
  output: {
    //filename: 'js/[name].[hash:8].js',
    filename: `js/[name]${isDev ? '' : '.[hash:8]'}.js`,
    path: resolve(PROJECT_PATH, './dist'),
  },
  plugins: [
  	new HtmlWebpackPlugin({
      template: resolve(PROJECT_PATH, './public/index.html'),
      filename: 'index.html',
      cache: false, // 特别重要：防止之后使用v6版本 copy-webpack-plugin 时代码修改一刷新页面为空问题。
      minify: isDev ? false : {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        useShortDoctype: true,
      },
    }),
  ]
}
