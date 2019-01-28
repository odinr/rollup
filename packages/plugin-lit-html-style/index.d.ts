import { Plugin } from "rollup";
import { Options } from "./lib/options";
export * from './lib/browser';
export { Options };
export declare const name = "lit-html-css";
export declare function plugin(args?: Options): Plugin;
export default plugin;
