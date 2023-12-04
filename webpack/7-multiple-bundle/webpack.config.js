const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    product: './src/products.js',
  },
  output: {
    filename: '[name].bundle.js', // => index.bundle.js and product.bundle.js
    path: path.resolve(__dirname, 'dist'),
  },
}
