const path = require('path');

module.exports = {
  entry: "./target/public/cljs-out/dev/main.js",
  mode: "development",
  output: {
    path:path.resolve(__dirname, "./target/public/cljs-out/dev/"),
    filename: 'main_bundle.js'
  },
  stats: "detailed",
  devtool: "eval-cheap-source-map",
  resolve: {
    /*alias: {*/
      /*"@firebase": path.resolve(__dirname, './node_modules/firebase/'),*/
    /*},*/
    alias: {
      '@firebase/app': path.resolve(__dirname, './node_modules/@firebase/app/'),
      '@firebase/auth': path.resolve(__dirname, './node_modules/@firebase/auth/')
    }
  },
}



