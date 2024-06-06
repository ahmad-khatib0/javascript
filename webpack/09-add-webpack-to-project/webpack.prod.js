const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCss = require('mini-css-extract-plugin')
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin')
const glob = require('glob')

const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

const purgePath = { src: path.join(__dirname, 'src') }

module.exports = merge(commonConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCss.loader, 'css-loader'], // replaced style-loader with MiniCss loader to
        // prevent the webpack injecting the css styles inside the markup, instead split them separately
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCss.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/images/*'),
          to: path.resolve(__dirname, 'dist'),
          context: 'src', //without context, it will add also the src folder inside dist,
        },
      ],
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${purgePath.src}/**/*`, { nodir: true }),
    }),
    new MiniCss(),
  ],
})
