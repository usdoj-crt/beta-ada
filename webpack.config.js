const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || "production",
  entry: {
    pagination: './_assets/js/pagination.js',
    accordion: './_assets/js/expand-accordions.js',
    taResources: './_assets/js/ta-selectors.js',
    print: './_assets/js/print.js',
    printButton: "./_assets/js/print-button.js"
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