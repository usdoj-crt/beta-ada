const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  devtool: 'source-map',
  entry: {
    styles: '/assets/sass/styles.scss',
  },
  output: {
    path: path.resolve(__dirname, './assets/', 'css'),
    filename: 'styles.js',
  },
  module: {
    rules: [
      {
        test: /\.(scss|svg|png|jpe?g)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false
            }
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
