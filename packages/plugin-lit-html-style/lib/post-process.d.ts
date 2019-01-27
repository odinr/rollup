import { plugins, AcceptedPlugin } from './plugins';
export interface Options {
    file: string;
    data: string;
    plugins: AcceptedPlugin[];
}
export declare function process(options: Options): Promise<string>;
export default process;
export { plugins };
