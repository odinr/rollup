import { Plugin } from "rollup";
import { createFilter } from "rollup-pluginutils";
import defaultOptions, { Options } from "./lib/options";
import createPlugins from "./lib/plugins";

export * from './lib/browser';
export {Options};
export const name = "lit-html-css";

export function plugin(args?: Options): Plugin {
  console.log(args);
  const { include, exclude, compress, env, template, compiler, processor } = {
    ...defaultOptions,
    ...args
  };
  const filter = createFilter(include, exclude);
  const plugins = createPlugins({ compress, env });
  return {
    name,
    transform(data: string, file: string): Promise<string> | void  {
      if(!filter(file) || !compiler || !processor) return;
      return compiler({ file, data }).then(res => processor({ ...res, plugins }).then(template));
    }
  };
}

export default plugin;
