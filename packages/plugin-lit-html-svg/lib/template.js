"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.template = (css) => `
  import { svg } from "lit-element";
  export const symbol = svg\`${css}\`;
  export default symbol;
`;
exports.default = exports.template;
