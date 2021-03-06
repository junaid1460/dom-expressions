import babel from "rollup-plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";

const plugins = [
  nodeResolve({
    extensions: [".js", ".ts"]
  }),
  babel({
    extensions: [".js", ".ts"],
    presets: ["@babel/preset-typescript"],
    exclude: "node_modules/**",
    babelrc: false,
    configFile: false,
    retainLines: true
  })
];

export default {
  input: "src/index.ts",
  output: [
    {
      file: "lib/hyper-dom-expressions.js",
      format: "cjs"
    },
    {
      file: "dist/hyper-dom-expressions.js",
      format: "es"
    }
  ],
  plugins
};
