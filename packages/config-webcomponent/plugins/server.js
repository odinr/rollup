"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rollup_plugin_serve_1 = __importDefault(require("rollup-plugin-serve"));
exports.plugin = (options) => {
    const { verbose = false, contentBase = ["dist", "demo", "node_modules"], port = 8080, } = options || {};
    return rollup_plugin_serve_1.default({
        verbose,
        contentBase,
        port
    });
};
exports.default = exports.plugin;
