const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || "production",
  entry: {
    accordion: './_assets/js/expand-accordions.js',
    main: "./_assets/js/main.js",
    pagination: './_assets/js/pagination.js',
    taResources: './_assets/js/ta-selectors.js',
    backToTop: './_assets/js/utils/backToTop.js'
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