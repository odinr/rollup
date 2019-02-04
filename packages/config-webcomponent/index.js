"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resolve_1 = __importDefault(require("./plugins/resolve"));
const style_1 = __importDefault(require("./plugins/style"));
const svg_1 = __importDefault(require("./plugins/svg"));
const babel_1 = __importDefault(require("./plugins/babel"));
const terser_1 = __importDefault(require("./plugins/terser"));
const typescript_1 = __importDefault(require("./plugins/typescript"));
const server_1 = __importDefault(require("./plugins/server"));
const { compress, serve, bundle, verbose, } = process.env;
exports.createConfig = (options) => {
    const { input, name, ecma = 6, plugins = {}, pkg = require(process.cwd() + "/package.json") } = options;
    const { resolve, typescript, style, terser, server } = plugins;
    const esmodules = process.env.ecma ? process.env.ecma === '6' : ecma === 6;
    const format = esmodules ? "esm" : "iife";
    const external = bundle ? [] : Object.keys(pkg.dependencies).concat(["tslib"]);
    const file = `${bundle ? 'dist/' : ''}${name}.${esmodules ? 'mjs' : 'js'}`;
    return {
        input,
        external,
        output: { format, file, name },
        plugins: [
            resolve_1.default(resolve),
            typescript_1.default(Object.assign({}, typescript, { verbosity: !!verbose ? typescript && typescript.verbosity !== undefined ? typescript.verbosity : 2 : 0 })),
            style_1.default(Object.assign({}, style, { esmodules, compress: !compress && style && style.compress === true ? true : !compress })),
            svg_1.default(),
            babel_1.default({ esmodules }),
            !!compress && terser_1.default(terser),
            !!serve && server_1.default(server),
        ].filter((p) => !!p)
    };
};
exports.default = exports.createConfig;
