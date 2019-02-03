import * as TypeScript from "typescript";
import { Partial } from 'rollup-plugin-typescript2/dist/partial';
import { IOptions } from 'rollup-plugin-typescript2/dist/ioptions';
export interface Options extends Partial<IOptions> {
    typescript?: typeof TypeScript;
    verbosity?: number;
}
export declare const plugin: (o?: Partial<IOptions> | undefined) => any;
export default plugin;
