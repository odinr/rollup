import { Plugin } from "rollup";
import outputTemplate from "./lib/template";
export { outputTemplate as template };
export interface Options {
    template: any;
    plugins: any[];
}
export declare const plugin: Plugin;
export default plugin;
