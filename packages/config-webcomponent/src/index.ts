import pluginResolve, {Options as optionResolve} from "./plugins/resolve";
import pluginStyle, {Options as optionStyle} from "./plugins/style";
import pluginSvg, {Options as optionSvg} from "./plugins/svg";
import pluginBabel, {Options as optionBabel}  from "./plugins/babel";
import pluginTerser, {Options as optionTerser} from './plugins/terser';
import pluginTypescript, {Options as optionTypescript} from './plugins/typescript';
import pluginServer, {Options as optionServer} from './plugins/server';

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
    pkg = require(process.cwd() + "/package.json")
  } = options;
  const {resolve, typescript, style, terser, server} = plugins;
  const esmodules = process.env.ecma ? process.env.ecma === '6' : ecma === 6;
  const format = esmodules ? "esm" : "iife";
  const external = bundle ? [] : Object.keys(pkg.dependencies).concat(["tslib"]);
  const tsconfigDefaults = {
    compilerOptions:{
      declaration:!bundle,
      target: 'esnext'
    }
  }
  return {
    input,
    external,
    output: {
      format, 
      name, 
      file: `${name}.${esmodules?'mjs':'js'}`, 
      dir: dir?dir:bundle?'dist/':''
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
        compress: !compress && style && style.compress === true ? true : !compress}),
      pluginSvg(),
      pluginBabel({esmodules}),
      !!compress && pluginTerser(terser),
      !!serve && pluginServer(server),
    ].filter((p) => !!p)
  };
}

export default createConfig;
