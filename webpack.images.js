const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || "production",
  entry: {},
  output: {
    path: path.resolve(__dirname, '_site/'),
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
          from: '**/*',
          to: 'assets/fonts',
          context: 'node_modules/@uswds/uswds/dist/fonts',
        },
        {
          from: '*',
          to: 'assets/images/uswds/img',
          context: 'node_modules/@uswds/uswds/dist/img',
        },
        {
          from: '*',
          to: 'assets/images/uswds/usa-icons/',
          context: 'node_modules/@uswds/uswds/dist/img/usa-icons',
        },
        {
          from: 'usa-icons-bg/*',
          to: 'assets/images/uswds/',
          context: 'node_modules/@uswds/uswds/dist/img',
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
          from: '_includes/**/*',
        },
      ],
    }),
  ],
};
