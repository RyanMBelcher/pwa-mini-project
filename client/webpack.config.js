const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { GenerateSW } = require('workbox-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin')

const path = require('path');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js',
      cards: './src/js/cards.js'
    },

    // TODO: Add the correct output
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },

    // TODO: Add the correct plugins
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Webpack Plugin'
      }),
      new MiniCssExtractPlugin(),
      new GenerateSW(),
      new WebpackPwaManifest({

      })
    ],

    // TODO: Add the correct modules
    module: {

    }
  };
};
