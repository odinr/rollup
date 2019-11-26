import fs from 'fs';
import { Plugin } from "rollup";
import { createFilter } from "rollup-pluginutils";
import defaultOptions, { Options } from "./lib/options";
import createPlugins from "./lib/plugins";

export * from "./lib/browser";
export { Options };
export const name = "lit-html-css";

export function plugin(args?: Options): Plugin {
  const { esmodules = true } = args || {};
  const { include, exclude, compress, env, template, compiler, processor } = {
    ...defaultOptions(esmodules),
    ...args
  };
  const filter = createFilter(include, exclude);
  const plugins = createPlugins({ compress, env });
  return {
    name,
    load(file: string) {
      if(!filter(file)) return null;
      return String(fs.readFileSync(file));
    },
    transform(data: string, file: string): Promise<string> | undefined {
      if (!filter(file) || !compiler || !processor) return;
      return compiler({ file, data }).then(res =>
        processor({ file, plugins, data: res.data }).then(template)
      );
    }
  };
}

export default plugin;
