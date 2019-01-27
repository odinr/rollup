"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cssnano_1 = __importDefault(require("cssnano"));
const postcss_preset_env_1 = __importDefault(require("postcss-preset-env"));
function plugins({ compress, env }) {
    const plugins = [postcss_preset_env_1.default(env)];
    compress && plugins.push(cssnano_1.default);
    return plugins;
}
exports.plugins = plugins;
exports.default = plugins;
