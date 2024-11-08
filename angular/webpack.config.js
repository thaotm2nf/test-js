// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.ts',             // Điểm bắt đầu của ứng dụng
  output: {
    filename: 'bundle.js',            // Tên file đầu ra
    path: path.resolve(__dirname, 'dist'), // Thư mục đầu ra
    clean: true                       // Dọn dẹp thư mục dist trước khi build
  },
  resolve: {
    extensions: ['.ts', '.js'],       // Đuôi file có thể import mà không cần chỉ định
  },
  module: {
    rules: [
      {
        test: /\.ts$/,                // Sử dụng ts-loader cho file .ts
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,              // Sử dụng raw-loader cho file .html
        use: 'raw-loader',
        exclude: /index.html/,
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',   // Template HTML gốc
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 1234,                       // Cổng cho server phát triển
    hot: true,
  },
  mode: 'development',                // Có thể chuyển sang 'production' khi build
};
