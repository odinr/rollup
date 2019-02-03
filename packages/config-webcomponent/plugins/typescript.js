"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TypeScript = __importStar(require("typescript"));
const rollup_plugin_typescript2_1 = __importDefault(require("rollup-plugin-typescript2"));
exports.plugin = (o) => {
    const { typescript = TypeScript, verbosity = 0, } = o || {};
    return rollup_plugin_typescript2_1.default({
        typescript,
        verbosity,
    });
};
exports.default = exports.plugin;
