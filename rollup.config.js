import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";

export default {
  /*entry: './target/public/cljs-out/dev/main.js',*/
  /*dest: './target/public/cljs-out/dev/main_bundle.js',*/
  /*format: 'iife',*/
  /*sourceMap: 'inline',*/
  input: "./target/public/cljs-out/dev/main.js",
  output: {
    file: "./target/public/cljs-out/dev/main_bundle.js",
    sourcemap: "inline",
    format: "iife",
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    nodeResolve(),
    commonjs(),
  ],
};
