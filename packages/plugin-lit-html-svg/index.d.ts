import { Plugin } from "rollup";
import outputTemplate from "./lib/template";
export { outputTemplate as template };
export interface Options {
    template: any;
    plugins: any[];
}
export declare const name = "lit-html-svg";
export declare function plugin(options?: Options): Plugin;
export default plugin;
