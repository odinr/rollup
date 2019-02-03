"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rollup_plugin_node_resolve_1 = __importDefault(require("rollup-plugin-node-resolve"));
// @ts-ignore
const plugin = (options) => rollup_plugin_node_resolve_1.default(options);
exports.plugin = plugin;
exports.default = plugin;
