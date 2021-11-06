const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: "development",
  devServer: {
    devMiddleware: {
      index: true,
      mimeTypes: { 'text/html': ['phtml'] },
      publicPath: '/dist',
      serverSideRender: true,
      writeToDisk: true,
    },
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    allowedHosts: 'all',
  },
  stats: {
   warnings: false
  }
};
