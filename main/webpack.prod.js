const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const common = require('./webpack.config.js');


const output = merge({
  mode: 'production',
  devtool: 'source-map',
  plugins: [ 
    new webpack.ContextReplacementPlugin(
      /moment[\/\\]locale$/,
      /ru/
    ),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify("production"),
    })
  ],
}, common);

module.exports = output;
