const webpack = require('webpack');
const path = require('path');


module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /(\.js)$/,
        loader: 'babel-loader'
      }
    ]
  }
};
