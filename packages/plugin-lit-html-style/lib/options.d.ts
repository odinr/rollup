import { Compiler } from "./compile";
import { Processor } from "./process";
import { Template } from "./template";
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
export declare const options: Options;
export default options;
