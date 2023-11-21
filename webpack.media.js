const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || "production",
  entry: {},
  output: {
    path: path.resolve(__dirname),
  },
  module: {
    rules: [
      {
        test: /.*/,
        use: [
          {loader: CopyPlugin.loader},
        ]
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: '*',
          to: 'assets/images/uswds/',
          context: 'node_modules/@uswds/uswds/dist/img',
        },
        {
          from: '*',
          to: 'assets/images/uswds/usa-icons/',
          context: 'node_modules/@uswds/uswds/dist/img/usa-icons',
        },
        {
          from: '*',
          to: 'assets/images/uswds/usa-icons-bg/',
          context: 'node_modules/@uswds/uswds/dist/img/usa-icons-bg',
        },
        {
          from: 'sprite.svg',
          to: 'assets/images/uswds/',
          context: 'node_modules/@uswds/uswds/dist/img',
        },
        {
          from: 'assets/_pdfs/**/*',
        },
        {
          from: '**/*',
          to: 'assets/fonts',
          context: 'node_modules/@uswds/uswds/dist/fonts',
        },
      ],
    }),
  ],
};
