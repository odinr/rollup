import { plugins, AcceptedPlugin } from "./plugins";
export interface Options {
    file: string;
    data: string;
    plugins: AcceptedPlugin[];
}
export interface Processor {
    (options: Options): Promise<string>;
}
export declare const processor: Processor;
export default process;
export { plugins };
