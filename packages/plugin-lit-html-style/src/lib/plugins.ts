import { AcceptedPlugin } from "postcss";
import cssnano from "cssnano";
import presetEnv from "postcss-preset-env";

// @see https://github.com/csstools/postcss-preset-env
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

export interface Options{
 compress?: boolean;
 env?: PresetOptions;
}

export function plugins({compress, env}: Options): AcceptedPlugin[]{
 const plugins = [presetEnv(env)]
 compress && plugins.push(cssnano);
 return plugins;
}

export default plugins;
export {AcceptedPlugin};