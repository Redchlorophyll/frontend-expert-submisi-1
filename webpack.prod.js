const path = require('path');
const { merge } = require('webpack-merge');  // eslint-disable-line
const { CleanWebpackPlugin } = require('clean-webpack-plugin');  // eslint-disable-line
const MiniCssExtractPlugin = require('mini-css-extract-plugin');  // eslint-disable-line
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');  // eslint-disable-line
const TerserPlugin = require('terser-webpack-plugin');  // eslint-disable-line
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js',
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: '[name].[hash].css' }),
  ],
});
