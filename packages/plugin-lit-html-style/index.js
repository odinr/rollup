"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const rollup_pluginutils_1 = require("rollup-pluginutils");
const options_1 = __importDefault(require("./lib/options"));
const plugins_1 = __importDefault(require("./lib/plugins"));
__export(require("./lib/browser"));
exports.name = "lit-html-css";
function plugin(args) {
    const { esmodules = true } = args || {};
    const { include, exclude, compress, env, template, compiler, processor } = Object.assign({}, options_1.default(esmodules), args);
    const filter = rollup_pluginutils_1.createFilter(include, exclude);
    const plugins = plugins_1.default({ compress, env });
    return {
        name: exports.name,
        load(file) {
            if (!filter(file))
                return null;
            return String(fs_1.default.readFileSync(file));
        },
        transform(data, file) {
            if (!filter(file) || !compiler || !processor)
                return;
            return compiler({ file, data }).then(res => processor({ file, plugins, data: res.data }).then(template));
        }
    };
}
exports.plugin = plugin;
exports.default = plugin;
