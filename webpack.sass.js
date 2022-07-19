const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  devtool: 'source-map',
  entry: {
    styles: '/_assets/sass/styles.scss',
  },
  output: {
    path: path.resolve(__dirname, './_assets/', 'css'),
    filename: 'styles.js',
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss|svg|png|jpe?g)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false
            }
          },
          {
            loader: 'resolve-url-loader', //resolve-url-loader needs to come *BEFORE* sass-loader
            options: {
              sourceMap: true,
            },
          },
          {
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
  plugins: [new MiniCssExtractPlugin({filename: '[name].css'})],
};
