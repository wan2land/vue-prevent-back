
var path = require('path')
var merge = require('webpack-merge');
var htmlWebpackPlugin = require('html-webpack-plugin');

var baseConfig = require('./webpack.base.conf');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = merge(baseConfig, {
  entry: resolve('example-src/entry.js'),
  output: {
    path: resolve('example'),
    filename: 'index.js',
  },
  resolve: {
    alias: {
      'vue-prevent-back': resolve('src'),
    }
  },
});

module.exports.plugins = (module.exports.plugins || []).concat([
  new htmlWebpackPlugin({
    template: resolve('build/template.html'),
    filename: resolve('index.html'),
  }),
]);
