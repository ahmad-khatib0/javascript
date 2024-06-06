const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(css)$/, // match exactly .css
        use: [{ loader: 'style-loader' }, { loader: 'css-loader', options: { modules: true } }],
        // use: ['style-loader', 'css-loader'], // order does matter, it execute from right to left
      },
      {
        test: /.s[ac]ss$/,
        use: [
          { loader: 'style-loader' }, // puts all css files into index.html
          { loader: 'css-loader', options: { modules: true } },
          { loader: 'sass-loader' }, //so again, loaders execute from button to top
        ],
      },
    ],
  },
}
