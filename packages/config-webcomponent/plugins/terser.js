"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rollup_plugin_terser_1 = require("rollup-plugin-terser");
exports.plugin = (options) => {
    const { warnings = true, module = true } = options || {};
    return rollup_plugin_terser_1.terser({
        warnings: true,
        module: true
    });
};
exports.default = exports.plugin;
