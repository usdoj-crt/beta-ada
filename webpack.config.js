const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    pagination: './_assets/js/pagination.js'
  },
  output: {
    path: path.resolve(__dirname, './_assets/js/', 'dist'),
    filename: '[name]-compiled.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};