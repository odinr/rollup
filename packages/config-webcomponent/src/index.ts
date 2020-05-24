import pluginResolve, {Options as optionResolve} from "./plugins/resolve";
import pluginStyle, {Options as optionStyle} from "./plugins/style";
import pluginSvg, {Options as optionSvg} from "./plugins/svg";
import pluginBabel, {Options as optionBabel}  from "./plugins/babel";
import pluginTerser, {Options as optionTerser} from './plugins/terser';
import pluginTypescript, {Options as optionTypescript} from './plugins/typescript';
import pluginServer, {Options as optionServer} from './plugins/server';

//
const pluginProgress = require("rollup-plugin-progress");
const pluginFilesize = require("rollup-plugin-filesize");

export interface Plugins{
  resolve?: optionResolve;
  typescript?: optionTypescript;
  style?:optionStyle;
  babel?:optionBabel;
  terser?:optionTerser;
  server?:optionServer;
}

export interface Options {
  name: string;
  input: string;
  dir?: string,
  ecma?: string;
  plugins?: Plugins;
  pkg?: any;
  compress: boolean;
  bundle: boolean;
}

const { 
  compress, 
  serve, 
  bundle, 
  verbose, 
} = process.env;

export const createConfig = (options: Options) => {
  const {
    input, 
    name,
    dir,
    ecma = 6, 
    plugins = {}, 
    pkg = require(process.cwd() + "/package.json"),
    ...opt
  } = options;
  const {resolve, typescript, style, terser, server} = plugins;
  const esmodules = process.env.ecma ? process.env.ecma === '6' : ecma === 6;
  const format = esmodules ? "esm" : "iife";
  const doBundle = !!bundle || opt.bundle;
  const doCompress = !!compress || opt.compress;
  const external = doBundle ? [] : Object.keys(pkg.dependencies).concat(["tslib"]);
  const tsconfigDefaults = {
    typescript: require('typescript'),
    objectHashIgnoreUnknownHack: true,
    compilerOptions:{
      declaration:!doBundle,
      target: 'esm'
    }
  }
  const _config = {
    input,
    external,
    output: {
      format, 
      name, 
      file: dir ? undefined : `${name}.${esmodules?'mjs':'js'}`, 
      dir: dir?dir:bundle?'dist/':undefined
    },
    plugins: [
      pluginResolve(resolve),
      pluginTypescript({
        tsconfigDefaults,
        ...typescript, 
        verbosity: !!verbose ? typescript && typescript.verbosity !== undefined ? typescript.verbosity:2:0
      }),
      pluginStyle({
        ...style, 
        esmodules, 
        compress: !doCompress && style && style.compress === true ? true : !doCompress}),
      pluginSvg(),
      pluginProgress(),
      // https://github.com/ritz078/rollup-plugin-filesize/issues/57
      // pluginFilesize(),
      doBundle && pluginBabel({esmodules}),
      doCompress && pluginTerser(terser),
      !!serve && pluginServer(server),
    ].filter((p) => !!p)
  };
  return _config;
}

export default createConfig;
