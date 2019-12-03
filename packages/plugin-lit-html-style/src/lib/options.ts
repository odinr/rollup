import { compiler, Compiler } from "./compile";
import { importer } from './importer';
import { processor, Processor } from "./process";
import template, { Template } from "./template";
import esmodulesBrowser from "./browser";

import { PresetOptions } from "./plugins";

export interface Options {
  include?: string[];
  exclude?: string[];
  compress?: boolean;
  env?: PresetOptions;
  template?: Template;
  compiler?: Compiler;
  compilerOptions?: any;
  processor?: Processor;
  esmodules?: boolean;
}

export function options(esmodules: boolean = true): Options {
  return {
    include: ["**/*.scss"],
    exclude: [],
    compress: true,
    env: { browsers: esmodules ? esmodulesBrowser : 'defaults' },
    template,
    compiler,
    compilerOptions: {importer},
    processor
  };
}
export default options;
