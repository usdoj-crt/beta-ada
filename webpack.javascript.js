const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || "production",
  entry: {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> e75e6a3 (commit)
    accordion: './assets/js/expand-accordions.js',
    main: "./assets/js/main.js",
    pagination: './assets/js/pagination.js',
    taResources: './assets/js/ta-selectors.js',
    backToTop: './assets/js/utils/backToTop.js',
    clickTracking: './assets/js/click-tracking.js',
    netlifyPreview: './assets/js/netlify/preview.js',
    redirect404: './assets/js/redirect404.js',
<<<<<<< HEAD
=======
=======
=======
>>>>>>> a0b0a9d (commit)
    accordion: './_assets/js/expand-accordions.js',
    main: "./_assets/js/main.js",
    pagination: './_assets/js/pagination.js',
    taResources: './_assets/js/ta-selectors.js',
    backToTop: './_assets/js/utils/backToTop.js',
    clickTracking: './_assets/js/click-tracking.js',
    netlifyPreview: './_assets/js/netlify/preview.js',
    redirect404: './_assets/js/redirect404.js',
<<<<<<< HEAD
>>>>>>> a0b0a9d (commit)
=======
>>>>>>> a0b0a9d (commit)
>>>>>>> e75e6a3 (commit)
  },
  experiments: {
      topLevelAwait: true
  },
  output: {
<<<<<<< HEAD
    path: path.resolve(__dirname, './assets/js/', 'dist'),
=======
<<<<<<< HEAD
<<<<<<< HEAD
    path: path.resolve(__dirname, './assets/js/', 'dist'),
=======
    path: path.resolve(__dirname, './_assets/js/', 'dist'),
>>>>>>> a0b0a9d (commit)
=======
    path: path.resolve(__dirname, './_assets/js/', 'dist'),
>>>>>>> a0b0a9d (commit)
>>>>>>> e75e6a3 (commit)
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
<<<<<<< HEAD
  },
=======
<<<<<<< HEAD
<<<<<<< HEAD
  },
=======
  }
>>>>>>> a0b0a9d (commit)
=======
  }
>>>>>>> a0b0a9d (commit)
>>>>>>> e75e6a3 (commit)
};
