const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || "production",
  devtool: 'source-map',
  entry: {
    styles: '/sass/styles.scss',
  },
  output: {
    path: path.resolve(__dirname, './_assets/', 'css'),
    filename: 'styles.css',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['css-loader','sass-loader']
      }
    ]
  }
};