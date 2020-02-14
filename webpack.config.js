/* global __dirname, require, module*/

// const webpack = require('webpack');

let libraryName = 'wurd';

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: `${libraryName}${mode === 'production' ? '.min' : ''}.js`,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: {
    'react': 'react',
  }
};
