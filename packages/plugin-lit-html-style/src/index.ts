import { Plugin } from "rollup";
import { createFilter } from "rollup-pluginutils";
import defaultOptions, { Options } from "./lib/options";
import createPlugins from "./lib/plugins";

export const name = "lit-html-css";

export const plugin: Plugin = (args?: Options) => {
  const { include, exclude, compress, env, template, compiler, processor } = {
    ...defaultOptions,
    ...args
  };
  const filter = createFilter(include, exclude);
  const plugins = createPlugins({ compress, env });
  return {
    name,
    transform: (data: string, file: string) =>
      filter(file) && compiler && processor
        ? compiler({ file, data }).then(res =>
            processor({ ...res, plugins }).then(template)
          )
        : null
  };
}

export default plugin;
