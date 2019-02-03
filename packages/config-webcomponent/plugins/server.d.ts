export interface Options {
    verbose?: boolean;
    contentBase?: string[];
    port?: number | string;
}
export declare const plugin: (options?: Options | undefined) => any;
export default plugin;
