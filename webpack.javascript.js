const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || "production",
  entry: {
    accordion: './assets/js/expand-accordions.js',
    main: "./assets/js/main.js",
    pagination: './assets/js/pagination.js',
    taResources: './assets/js/ta-selectors.js',
    backToTop: './assets/js/utils/backToTop.js',
    clickTracking: './assets/js/click-tracking.js',
    netlifyPreview: './assets/js/netlify/preview.js',
    redirect404: './assets/js/redirect404.js',
  },
  experiments: {
      topLevelAwait: true
  },
  output: {
    path: path.resolve(__dirname, './assets/js/', 'dist'),
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
  },
};
