import serve from "rollup-plugin-serve";
export interface Options {
  verbose?: boolean;
  contentBase?: string[];
  port?: number|string;
}
export const plugin = (options?: Options) => {
  const { 
   verbose = false, 
   contentBase = ["dist", "demo", "node_modules"],
   port = 8080,
  } = options || {};
  return serve({
    verbose,
    contentBase,
    port
  });
};

export default plugin;
