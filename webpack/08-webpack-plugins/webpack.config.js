const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.js',
    product: './src/products.js',
  },
  output: {
    filename: '[name].bundle.js', // => index.bundle.js and product.bundle.js
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: './dist',
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      chunks: ['index'],
      inject: true,
      filename: 'index.html',
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/products.html'),
      chunks: ['product'],
      inject: true,
      filename: 'products.html',
    }),
  ],
}
