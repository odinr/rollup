import babel from "rollup-plugin-babel";
import preset from "@babel/preset-env";

export interface Options {
  esmodules?: boolean;
  extensions?: string[];
}

export const defaultExtensions = [".js", ".mjs", ".ts", ".scss", ".svg"];

export const plugin = (options?: Options): Plugin => {
  const { esmodules = true, extensions = defaultExtensions } = options || {};
  const presets = [[preset, { targets: { esmodules } }]];
  return babel({ extensions, presets });
};

export default plugin;
