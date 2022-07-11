const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, options) => {
  const mode = options.mode;
  const isDev = mode === 'development';

  const config = {
    context: path.resolve(__dirname, 'src'),
    mode: mode || 'development',
    entry: ['./index.js', './style.scss'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name][contenthash].js',
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
      new MiniCssExtractPlugin( {
        filename: "style.css"
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }, {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        }
      ]
    },
    devServer: {
      port: 4200,
      watchFiles: ['src/*.html'],
      hot: isDev,
    }
  }

  if(mode === 'development') {
    config.devtool = 'source-map';
    config.watch = true;
  }

  return config;
}