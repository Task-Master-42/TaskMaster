const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    static: {
      directory: path.resolve(__dirname, './assets'),
      publicPath: '/assets'
    },
    proxy: {
      '/api': 'http://localhost:3000'
    },
    headers: {'Access-Control-Allow-Origin': '*'},
  },
  entry: path.join(__dirname, 'client/App.jsx'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /.s?[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images',
                },
            },
        ],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'client/index.html'),
    }),
  ],
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
};
