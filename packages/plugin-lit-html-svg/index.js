"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const svgo_1 = __importDefault(require("svgo"));
const rollup_pluginutils_1 = require("rollup-pluginutils");
const template_1 = __importDefault(require("./lib/template"));
exports.template = template_1.default;
const options_1 = require("./lib/options");
exports.name = "lit-html-svg";
function plugin(options) {
    const { template = template_1.default, plugins = options_1.options } = options || {};
    const parser = new svgo_1.default({}); //{plugins});
    const filter = rollup_pluginutils_1.createFilter(["**/*.svg"], []);
    return {
        name: exports.name,
        load(file) {
            if (!filter(file))
                return null;
            return String(fs_1.default.readFileSync(file));
        },
        transform(data, file) {
            if (!filter(file))
                return;
            return parser.optimize(data, { path: file }).then(({ data }) => template(data));
        }
    };
}
exports.plugin = plugin;
exports.default = plugin;
