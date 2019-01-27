"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const caniuse_api_1 = require("caniuse-api");
exports.es6Support = caniuse_api_1.getSupport("es6-module");
exports.es6Supported = Object.keys(exports.es6Support)
    .filter(browser => !!exports.es6Support[browser].y)
    .map(browser => {
    return { browser, version: exports.es6Support[browser].y };
});
exports.es6String = exports.es6Supported
    .map(({ browser, version }) => `${browser}>=${version}`)
    .join(",");
exports.default = exports.es6String;
