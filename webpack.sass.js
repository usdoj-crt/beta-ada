const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || "production",
  devtool: 'source-map',
  entry: {
    styles: '/_assets/sass/styles.scss',
  },
  output: {
    path: path.resolve(__dirname, './_assets/', 'css'),
    filename: 'styles.css',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['css-loader', 'resolve-url-loader', {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            sassOptions: {
              includePaths: [
                "./node_modules/uswds/dist/scss",
                "./node_modules/uswds/dist/scss/packages/_required",
                "./node_modules/uswds/dist/scss/packages/_global",
                "./node_modules/uswds/dist/scss/packages/_uswds-components",
                "./node_modules/uswds/dist/scss/packages/_uswds-utilities"
              ]
            }
          }
        }]
      }
    ]
  }
};