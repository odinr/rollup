import nodeResolve, {Options} from "rollup-plugin-node-resolve";
// @ts-ignore
const plugin = (options?: Options): Plugin => nodeResolve(options);
export {plugin, Options};
export default plugin;