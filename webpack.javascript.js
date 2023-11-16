const path = require('path');
const webpack = require('webpack');

function getGitBranch() {
  let child_process;
  try {
    child_process = require('child_process');
  } catch (e) {
    console.log('Unable to run git, using default ref for content', e);
    return undefined;
  }

  try {
    return child_process.execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
  } catch (e) {
    console.log('Unable to run git, using default ref for content', e);
    return undefined;
  }
}

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
  plugins: [
    new webpack.DefinePlugin({
      __WEBPACK_GIT_BRANCH__: getGitBranch(),
    }),
  ],
};
