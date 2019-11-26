import fs from "fs";
import Svgo from "svgo";
import { Plugin, LoadHook } from "rollup";
import { createFilter } from "rollup-pluginutils";

import outputTemplate from "./lib/template";
export {outputTemplate as template};

import {options as defaultPlugins} from './lib/options';

export interface Options {
  template: any;
  plugins: any[];
}

export const name = "lit-html-svg";

export function plugin(options?: Options): Plugin {
  const { template = outputTemplate, plugins = defaultPlugins } = options||{};
  const parser = new Svgo({plugins});
  const filter = createFilter(["**/*.svg"],[]);
  return {
    name,
    load(file: string) {
      if(!filter(file)) return null;
      return String(fs.readFileSync(file));
    },
    transform(data: string, file: string): Promise<string> | undefined {
      if(!filter(file)) return;
      return parser.optimize(data, {path: file}).then(({ data }) => template(data));
    }
  };
}

export default plugin;
