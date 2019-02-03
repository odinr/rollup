export interface Options {
    esmodules?: boolean;
    extensions?: string[];
}
export declare const plugin: (options?: Options | undefined) => Plugin;
export default plugin;
