import { Options as optionResolve } from "./plugins/resolve";
import { Options as optionStyle } from "./plugins/style";
import { Options as optionBabel } from "./plugins/babel";
import { Options as optionTerser } from './plugins/terser';
import { Options as optionTypescript } from './plugins/typescript';
import { Options as optionServer } from './plugins/server';
export interface Plugins {
    resolve?: optionResolve;
    typescript?: optionTypescript;
    style?: optionStyle;
    babel?: optionBabel;
    terser?: optionTerser;
    server?: optionServer;
}
export interface Options {
    name: string;
    input: string;
    ecma?: string;
    plugins?: Plugins;
    pkg?: any;
}
export declare const createConfig: (options: Options) => {
    input: string;
    external: string[];
    output: {
        format: string;
        file: string;
        name: string;
    };
    plugins: any[];
};
export default createConfig;
