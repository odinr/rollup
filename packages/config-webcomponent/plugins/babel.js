"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rollup_plugin_babel_1 = __importDefault(require("rollup-plugin-babel"));
const preset_env_1 = __importDefault(require("@babel/preset-env"));
exports.plugin = (options) => {
    const { esmodules = true, extensions = [".js", ".mjs", ".ts", ".scss", ".svg"] } = options || {};
    return rollup_plugin_babel_1.default({
        extensions,
        presets: [[preset_env_1.default, { targets: { esmodules } }]]
    });
};
exports.default = exports.plugin;
