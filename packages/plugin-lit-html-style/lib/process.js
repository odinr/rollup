"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postcss_1 = __importDefault(require("postcss"));
const plugins_1 = require("./plugins");
exports.plugins = plugins_1.plugins;
exports.processor = (options) => {
    const { file, data, plugins } = options;
    return new Promise((resolve, reject) => {
        postcss_1.default(plugins)
            .process(data, { from: file })
            .then(({ css }) => resolve(css), reject);
    });
};
exports.default = process;
