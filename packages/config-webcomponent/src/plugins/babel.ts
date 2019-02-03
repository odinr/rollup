import babel from "rollup-plugin-babel";
import preset from "@babel/preset-env";

export interface Options{
 esmodules?: boolean;
 extensions?: string[];
}

export const plugin = (options?: Options): Plugin => {
 const {
  esmodules = true,
  extensions = [".js", ".mjs", ".ts", ".scss", ".svg"]
 } = options || {};
  return babel({
    extensions,
    presets: [[preset, { targets: { esmodules } }]]
  });
};

export default plugin;
