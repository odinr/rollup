import { compiler, Compiler } from "./compile";
import { processor, Processor } from "./process";
import template, { Template } from "./template";
import browsers from "./browser";

import { PresetOptions } from "./plugins";

export interface Options {
  include?: string[];
  exclude?: string[];
  compress?: boolean;
  env?: PresetOptions;
  template?: Template;
  compiler?: Compiler;
  processor?: Processor;
}

export const options: Options = {
  include: ["**/*.scss"],
  exclude: [],
  compress: true,
  env: { browsers },
  template,
  compiler,
  processor
};

export default options;
