var path = require('path')
let merge = require('webpack-merge');
// let commonConfig =  require('./webpack.common.js');

module.exports = merge({
  entry: './src/index.js',
  //entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './../dist'),
    publicPath: '/dist/',
    filename: 'dsui.min.js',
    library: 'vueDsUI',
    libraryTarget: 'umd',
    umdNamedDefine: true 
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(eot|woff|ico|svg|ttf|woff2|gif)(\?|$)/,
        loader: 'file-loader?name=[hash].[ext]'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
})


