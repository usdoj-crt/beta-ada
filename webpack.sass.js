const path = require('path');
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> e75e6a3 (commit)
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

function relativePath(target) {
  return path.resolve(__dirname, target);
}

<<<<<<< HEAD
=======
=======
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

>>>>>>> a0b0a9d (commit)
=======
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

>>>>>>> a0b0a9d (commit)
>>>>>>> e75e6a3 (commit)
module.exports = {
  mode: process.env.NODE_ENV || 'production',
  devtool: 'source-map',
  entry: {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> e75e6a3 (commit)
    styles: '/assets/sass/styles.scss',
  },
  output: {
    path: path.resolve(__dirname, './assets/', 'css'),
<<<<<<< HEAD
=======
=======
=======
>>>>>>> a0b0a9d (commit)
    styles: '/_assets/sass/styles.scss',
  },
  output: {
    path: path.resolve(__dirname, './_assets/', 'css'),
<<<<<<< HEAD
>>>>>>> a0b0a9d (commit)
=======
>>>>>>> a0b0a9d (commit)
>>>>>>> e75e6a3 (commit)
    filename: 'styles.js',
  },
  module: {
    rules: [
      {
<<<<<<< HEAD
        test: /\.scss$/,
=======
<<<<<<< HEAD
<<<<<<< HEAD
        test: /\.scss$/,
=======
        test: /\.(scss|svg|png|jpe?g)$/,
>>>>>>> a0b0a9d (commit)
=======
        test: /\.(scss|svg|png|jpe?g)$/,
>>>>>>> a0b0a9d (commit)
>>>>>>> e75e6a3 (commit)
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
<<<<<<< HEAD
              sourceMap: true,
=======
<<<<<<< HEAD
<<<<<<< HEAD
              sourceMap: true,
=======
>>>>>>> a0b0a9d (commit)
=======
>>>>>>> a0b0a9d (commit)
>>>>>>> e75e6a3 (commit)
              url: false
            }
          },
          {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> e75e6a3 (commit)
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  require('autoprefixer')
                ]
              }
            },
          },
          {
<<<<<<< HEAD
=======
=======
>>>>>>> a0b0a9d (commit)
=======
>>>>>>> a0b0a9d (commit)
>>>>>>> e75e6a3 (commit)
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                includePaths: [
                  "./node_modules/@uswds",
                  "./node_modules/@uswds/uswds/packages",
                ],
              },
            },
          },
        ],
      },
    ],
  },
<<<<<<< HEAD
  plugins: [
    new MiniCssExtractPlugin({filename: '[name].css'}),
  ],
=======
<<<<<<< HEAD
<<<<<<< HEAD
  plugins: [
    new MiniCssExtractPlugin({filename: '[name].css'}),
  ],
=======
  plugins: [new MiniCssExtractPlugin({filename: '[name].css'})],
>>>>>>> a0b0a9d (commit)
=======
  plugins: [new MiniCssExtractPlugin({filename: '[name].css'})],
>>>>>>> a0b0a9d (commit)
>>>>>>> e75e6a3 (commit)
};
