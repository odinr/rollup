import { AcceptedPlugin } from "postcss";
export interface PresetOptions {
    browsers?: string;
    stage?: number | boolean | string;
    features?: any;
    insertBefore?: any;
    insertAfter?: any;
    autoprefixer?: any;
    preserve?: boolean;
    importFrom?: any;
    exportTo?: any;
}
export interface Options {
    compress?: boolean;
    env?: PresetOptions;
}
export declare function plugins({ compress, env }: Options): AcceptedPlugin[];
export default plugins;
export { AcceptedPlugin };
