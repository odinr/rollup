import { terser } from "rollup-plugin-terser";

export interface Options{
 warnings:boolean;
 module:boolean;
}

export const plugin = (options?: Options) => {
 const {warnings=true,module=true}=options||{};
  return terser({
    warnings: true,
    module: true
  });
};

export default plugin;
