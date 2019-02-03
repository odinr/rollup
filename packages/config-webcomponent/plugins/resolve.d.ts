import { Options } from "rollup-plugin-node-resolve";
declare const plugin: (options?: Options | undefined) => Plugin;
export { plugin, Options };
export default plugin;
