"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const compile_1 = require("./compile");
const process_1 = require("./process");
const template_1 = __importDefault(require("./template"));
const browser_1 = __importDefault(require("./browser"));
exports.options = {
    include: ["**/*.scss"],
    exclude: [],
    compress: true,
    env: { browsers: browser_1.default },
    template: template_1.default,
    compiler: compile_1.compiler,
    processor: process_1.processor
};
exports.default = exports.options;
