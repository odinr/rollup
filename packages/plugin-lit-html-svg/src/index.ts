import { Plugin } from "rollup";
import { createFilter } from "rollup-pluginutils";
import Svgo from "svgo";

import outputTemplate from "./lib/template";
export {outputTemplate as template};

import {options as defaultPlugins} from './lib/options';

export interface Options {
  template: any;
  plugins: any[];
}

export const plugin: Plugin = (options: Options) => {
  const { template = outputTemplate, plugins = defaultPlugins } = options;
  const parser = new Svgo({plugins});
  const filter = createFilter();
  return {
    transform(data: string, file: string) {
      if(!filter(file)) return null;
      return parser.optimize(data, {path: file}).then(({ data }) => template(data));
    }
  };
};

export default plugin;
