var path = require('path')
var webpack = require('webpack')
const devModule = require('./webpack-config/dev');
const prodModule = require('./webpack-config/prod');
const testModule = require('./webpack-config/test');
let finalModule = {};
let ENV = process.env.NODE_ENV;

switch (ENV) {
  case 'development':
    finalModule = devModule;
    break;
  case 'prod':
    finalModule = prodModule;
    break;
  case 'dev':
    finalModule = testModule;
    break;
  case 'testprod':
    finalModule = testModule;
    break;
  default:
    break;
}

module.exports = finalModule;

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'testprod') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
