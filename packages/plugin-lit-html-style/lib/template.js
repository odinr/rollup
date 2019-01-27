"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.template = (css) => `
  import { html } from "lit-element";
  export const style = html\`<style>${css}</style>\`;
  export default style;
`;
exports.default = exports.template;
