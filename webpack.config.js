const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './client/index.js',
  mode: process.env.NODE_ENV || 'development',
  devServer: {
    contentBase: './dist',
    hot: true,
    watchOptions: {
      ignored: ['**/.git/**', '**/node_modules/**', '**/.#*'],
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.s?css$/, use: ['style-loader', 'css-loader', 'sass-loader?sourceMap'] },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        resolve: { extensions: ['.js', '.jsx'] },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
  ],
};
