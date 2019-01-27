"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_sass_1 = __importDefault(require("node-sass"));
exports.compiler = (options) => new Promise((resolve, reject) => {
    const resolved = ({ css }) => resolve({ ...options, data: css.toString() });
    node_sass_1.default.render(options, (err, res) => (err ? reject(err) : resolved(res)));
});
exports.default = exports.compiler;
