const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: './_assets/js/pagination.js',
  output: {
    path: path.resolve(__dirname, './_assets/js/', 'dist'),
    filename: 'pagination.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        options: {
          presets: ["@babel/preset-env"]
        },
        exclude: /node_modules/
      }
    ]
  }
};